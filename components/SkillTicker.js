import { skills } from '@/data/skills';
import styles from './SkillTicker.module.css';

export default function SkillTicker({ indexLabel }) {
  return (
    <section className={styles.section} aria-label="Technical stack">
      {indexLabel ? (
        <div className="monograph-bar">
          <span className="monograph-index">{indexLabel}</span>
          <span className="monograph-rule" aria-hidden="true" />
        </div>
      ) : null}
      <div className={styles.header}>
        {!indexLabel && <p className="section-heading">Capabilities</p>}
        <h2 className="section-title">Tools &amp; Stack</h2>
      </div>
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.category} className={styles.group}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item.name} className={styles.item}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
