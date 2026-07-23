import styles from './WireframeCube.module.css';

export default function WireframeCube({ size = 280 }) {
  const faceStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };
  return (
    <div
      className={styles.scene}
      style={{ width: `${size * 1.6}px`, height: `${size * 1.6}px` }}
      aria-hidden="true"
    >
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.front}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.back}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.right}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.left}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.top}`} style={faceStyle} />
        <div className={`${styles.face} ${styles.bottom}`} style={faceStyle} />
      </div>
    </div>
  );
}