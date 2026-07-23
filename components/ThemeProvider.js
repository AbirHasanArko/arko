'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import CrtScanlines from './CrtScanlines';
import styles from './ThemeProvider.module.css';

const STORAGE_KEY = 'arko-theme';
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

function readInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch (_) {
    /* ignore — localStorage may be unavailable */
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('light');
  const [pending, setPending] = useState(null);
  const overlayRef = useRef(null);

  // Mount-time sync with storage / OS preference. Inline script in layout.js
  // already applied the data-theme attribute, so this just keeps React state
  // honest.
  useEffect(() => {
    setThemeState(readInitialTheme());
  }, []);

  // Watch the OS theme only if the user has never explicitly chosen one.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      /* ignore */
    }
    if (stored === 'light' || stored === 'dark') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setThemeState(e.matches ? 'dark' : 'light');
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const applyTheme = useCallback((next) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', next);
    // Update the meta theme-color so mobile browsers repaint the chrome bar.
    const themeColor = next === 'dark' ? '#13131F' : '#F5F0E8';
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', themeColor);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {
      /* ignore */
    }
  }, []);

  // Trigger the dramatic curtain reveal. The curtain is a fixed full-viewport
  // div that scales from the click point outward; its `from` and `to` colors
  // make the page appear to "flip" to the new theme in one continuous motion.
  const runReveal = useCallback(
    (fromTheme, toTheme, anchorX, anchorY) => {
      const overlay = overlayRef.current;
      if (!overlay) {
        applyTheme(toTheme);
        setThemeState(toTheme);
        return;
      }

      // The curtain element has two halves (light + dark) stacked. We toggle
      // which one is visible and animate from a small circle at the click
      // point to cover the entire viewport.
      const color =
        toTheme === 'dark'
          ? 'rgba(19, 19, 31, 1)'
          : 'rgba(245, 240, 232, 1)';

      overlay.style.setProperty('--curtain-color', color);
      overlay.style.setProperty('--anchor-x', `${anchorX}px`);
      overlay.style.setProperty('--anchor-y', `${anchorY}px`);

      overlay.classList.remove(styles.revealing);
      // Force reflow so the next class re-triggers the animation.
      // eslint-disable-next-line no-unused-expressions
      overlay.offsetWidth;
      overlay.classList.add(styles.revealing);

      // Switch theme at the midpoint of the curtain reveal so the user sees
      // the page already in the new theme when the curtain starts receding.
      window.setTimeout(() => {
        applyTheme(toTheme);
        setThemeState(toTheme);
        setPending(null);
      }, 320);
    },
    [applyTheme],
  );

  const toggleTheme = useCallback(
    (anchor) => {
      const next = theme === 'dark' ? 'light' : 'dark';
      const x = anchor?.x ?? window.innerWidth / 2;
      const y = anchor?.y ?? 64;
      setPending(next);
      runReveal(theme, next, x, y);
    },
    [theme, runReveal],
  );

  const setTheme = useCallback(
    (next, anchor) => {
      if (next === theme) return;
      const x = anchor?.x ?? window.innerWidth / 2;
      const y = anchor?.y ?? 64;
      setPending(next);
      runReveal(theme, next, x, y);
    },
    [theme, runReveal],
  );

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme, pending }),
    [theme, toggleTheme, setTheme, pending],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
      <CrtScanlines />
      <div
        ref={overlayRef}
        className={styles.overlay}
        aria-hidden="true"
        data-pending={pending ?? ''}
      />
    </ThemeContext.Provider>
  );
}