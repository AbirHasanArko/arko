import styles from './CertificateCard.module.css';

export default function CertificateCard({ cert }) {
  const Tag = cert.link ? 'a' : 'div';
  const props = cert.link
    ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag className={`${styles.card} ${cert.link ? styles.clickable : ''}`} {...props}>
      <div className={styles.iconWrap} aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8.5" r="5" />
          <path d="M9.5 13 8 21l4-2.25L16 21l-1.5-8" />
        </svg>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{cert.name}</h3>
        <p className={`${styles.meta} tabular`}>
          <span>{cert.issuer}</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>{cert.date}</span>
        </p>
      </div>
      {cert.link && <span className={styles.arrow} aria-hidden="true">↗</span>}
    </Tag>
  );
}
