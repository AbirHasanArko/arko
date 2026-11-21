import { skills } from '@/data/skills';
import styles from './SkillTicker.module.css';

export default function SkillTicker({ sectionNum }) {
  return (
    <section className={styles.section} aria-label="Technical stack">
      <div className="monograph-bar">
        {sectionNum && (
          <span className="monograph-index tabular">{sectionNum}</span>
        )}
        <h2 className="section-title">Tools &amp; Stack</h2>
        <span className="monograph-rule" aria-hidden="true" />
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
