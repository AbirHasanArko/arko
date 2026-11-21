'use client';

import { classNames } from '@/lib/utils';
import styles from './FilterBar.module.css';

export default function FilterBar({ filters, active, onChange }) {
  return (
    <div className={styles.bar} role="tablist" aria-label="Filter items">
      {filters.map((f) => (
        <button
          key={f}
          type="button"
          role="tab"
          aria-selected={active === f}
          className={classNames(styles.pill, active === f && styles.active)}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
