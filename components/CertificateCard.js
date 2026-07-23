import styles from './CertificateCard.module.css';

export default function CertificateCard({ cert }) {
  const Tag = cert.link ? 'a' : 'div';
  const props = cert.link
    ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <Tag className={styles.card} {...props}>
      <div className={styles.icon} aria-hidden="true">📜</div>
      <div className={styles.body}>
        <h3 className={styles.name}>{cert.name}</h3>
        <p className={styles.meta}>
          <span>{cert.issuer}</span>
          <span className={styles.dot}>·</span>
          <span>{cert.date}</span>
        </p>
      </div>
      {cert.link && <span className={styles.arrow} aria-hidden="true">↗</span>}
    </Tag>
  );
}