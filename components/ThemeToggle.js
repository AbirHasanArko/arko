'use client';

import { useTheme } from './ThemeProvider';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    toggleTheme({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={handleClick}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className={styles.track} aria-hidden="true">
        <span className={`${styles.knob} ${isDark ? styles.knobDark : ''}`}>
          {isDark ? (
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path
                fill="currentColor"
                d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <g fill="currentColor">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
              </g>
            </svg>
          )}
        </span>
      </span>
      <span className={styles.label}>
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}