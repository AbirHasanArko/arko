import styles from './CrtScanlines.module.css';

/**
 * Full-viewport CRT scanline overlay. Rendered once at the root inside
 * ThemeProvider. The component itself is invisible — all visual styling lives
 * behind `[data-theme='dark']` selectors so light mode is unaffected.
 */
export default function CrtScanlines() {
  return (
    <div className={styles.crt} aria-hidden="true">
      <div className={styles.lines} />
      <div className={styles.aperture} />
      <div className={styles.vignette} />
      <div className={styles.flicker} />
    </div>
  );
}