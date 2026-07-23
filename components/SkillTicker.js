import { flatSkills } from '@/data/skills';
import styles from './SkillTicker.module.css';

export default function SkillTicker() {
  const items = flatSkills.map((s) => s.name);
  const loop = [...items, ...items];

  return (
    <div className={styles.ticker} aria-label="Skills marquee">
      <div className={styles.track}>
        {loop.map((name, i) => (
          <span key={`${name}-${i}`} className={styles.badge}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}