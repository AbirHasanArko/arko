import styles from './ScanlineOverlay.module.css';

export default function ScanlineOverlay({ className = '' }) {
  return <div className={`${styles.scanlines} ${className}`} aria-hidden="true" />;
}