import Link from 'next/link';
import {
  researchInterests,
  researchNotes,
  researchNoteText,
} from '@/data/research';
import styles from './page.module.css';

export const metadata = {
  title: 'Research & Technical Studies',
  description:
    'Applied AI validation, auditable clinical workflows, edge computer vision, and first-principles systems inquiries.',
};

export default function ResearchPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-eyebrow">Research &amp; Inquiry</p>
        <h1 className="page-title">Research</h1>
        <p className="page-lede">
          Exploring where theoretical computer science meets reliable systems —
          from deterministic LLM tool-call validation and auditable local models
          to edge vision and processor architecture.
        </p>
      </header>

      <section className="section">
        <div className="monograph-bar">
          <span className="monograph-index">§ 01 · Focus Areas</span>
          <span className="monograph-rule" aria-hidden="true" />
        </div>
        <h2 className="section-title">Lines of Inquiry</h2>

        <div className={styles.pillarsGrid}>
          {researchInterests.map((pillar) => (
            <article key={pillar.code} className={styles.pillarCard}>
              <span className={styles.pillarCode}>{pillar.code}</span>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarSummary}>{pillar.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="monograph-bar">
          <span className="monograph-index">§ 02 · Technical Studies &amp; Artifacts</span>
          <span className="monograph-rule" aria-hidden="true" />
        </div>
        <h2 className="section-title">Ongoing &amp; Completed Work</h2>

        <ol className={styles.notesList}>
          {researchNotes.map((item) => (
            <li key={item.id} className={styles.noteCard}>
              <div className={styles.noteTop}>
                <div className={styles.noteRefGroup}>
                  <span className={`${styles.noteId} tabular`}>[{item.id}]</span>
                  <span className={`${styles.noteContext} tabular`}>
                    {item.context} · {item.year}
                  </span>
                </div>
                <span className={styles.status}>{item.status}</span>
              </div>

              <h3 className={styles.noteTitle}>{item.title}</h3>
              <p className={styles.noteAbstract}>{item.abstract}</p>

              <div className={styles.contributions}>
                <p className={styles.subLabel}>Key methodology &amp; notes</p>
                <ul className={styles.contribList}>
                  {item.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.noteFooter}>
                <ul className={styles.keywords} aria-label="Keywords">
                  {item.keywords.map((kw) => (
                    <li key={kw} className={styles.keyword}>
                      {kw}
                    </li>
                  ))}
                </ul>

                <div className={styles.noteLinks}>
                  {item.projectSlug && (
                    <Link
                      href={`/projects/${item.projectSlug}`}
                      className={styles.noteLink}
                    >
                      Case study →
                    </Link>
                  )}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.noteLink}
                    >
                      Repository ↗
                    </a>
                  )}
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.noteLink}
                    >
                      Live sandbox ↗
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <aside className={styles.philosophy}>
        <p className={styles.philosophyLabel}>Lab Note</p>
        <blockquote className={styles.philosophyQuote}>
          “{researchNoteText}”
        </blockquote>
      </aside>
    </div>
  );
}
