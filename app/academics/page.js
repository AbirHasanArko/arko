import Timeline from '@/components/Timeline';
import { education, coursework } from '@/data/academics';
import styles from './page.module.css';

export const metadata = {
  title: 'Education',
  description:
    'Academic background, schools, and core computer science coursework.',
};

export default function AcademicsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <h1 className="page-title">Education</h1>
        <p className="page-lede">
          Degrees, institutions, and the core computer science curriculum that
          underpins my engineering and research work.
        </p>
      </header>

      <section className="section">
        <div className="monograph-bar">
          <span className="monograph-index tabular">§ 01</span>
          <h2 className="section-title">Degrees &amp; Schools</h2>
          <span className="monograph-rule" aria-hidden="true" />
        </div>
        <Timeline items={education} type="education" />
      </section>

      {coursework && coursework.length > 0 && (
        <section className="section">
          <div className="monograph-bar">
            <span className="monograph-index tabular">§ 02</span>
            <h2 className="section-title">Core Coursework</h2>
            <span className="monograph-rule" aria-hidden="true" />
          </div>
          <ul className={styles.courseGrid}>
            {coursework.map((course, idx) => (
              <li key={course} className={styles.courseItem}>
                <span className={`${styles.courseIdx} tabular`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
