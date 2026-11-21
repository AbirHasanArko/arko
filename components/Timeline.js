import styles from './Timeline.module.css';

export default function Timeline({ items, type = 'experience' }) {
  return (
    <ol className={styles.timeline}>
      {items.map((item, i) => (
        <li key={`${item.org || item.school}-${i}`} className={styles.item}>
          <span
            className={`${styles.dot} ${item.current ? styles.dotCurrent : ''}`}
            aria-hidden="true"
          />
          <div className={styles.content}>
            <div className={styles.headerRow}>
              <div>
                <h3 className={styles.title}>
                  {type === 'experience' ? item.role : item.degree}
                </h3>
                <p className={styles.org}>
                  {type === 'experience' ? item.org : item.school}
                  {item.location ? ` · ${item.location}` : ''}
                </p>
              </div>
              <p className={`${styles.period} tabular`}>
                {item.start}
                {item.end ? ` — ${item.end}` : ''}
              </p>
            </div>

            {item.grade && <p className={`${styles.grade} tabular`}>{item.grade}</p>}

            {item.bullets && (
              <ul className={styles.bullets}>
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
