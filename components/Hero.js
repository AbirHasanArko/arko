import Link from 'next/link';
import { profile } from '@/data/profile';
import PhotoCard from './PhotoCard';
import styles from './Hero.module.css';

const FIELD_NOTES = [
  {
    index: '01',
    label: 'Researching',
    value: 'Applied ML & LLM evaluation',
    detail: 'FlyRank AI',
  },
  {
    index: '02',
    label: 'Studying',
    value: `BSc in CSE · ${profile.stats.cgpa.toFixed(2)} CGPA`,
    detail: `${profile.universityShort} · ${profile.stats.problemsSolved}+ problems`,
  },
  {
    index: '03',
    label: 'Teaching & Shipping',
    value: 'Founder & Instructor at Arcode',
    detail: `${profile.stats.repositories}+ repos · ${profile.stats.hackathonWins} hackathon podiums`,
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <div className={`${styles.eyebrowRow} ${styles.stagger1}`}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.eyebrowText}>
                {profile.location} · {profile.universityShort} CSE &apos;27
              </span>
            </div>

            <h1 className={`${styles.title} ${styles.stagger2}`}>
              {profile.name}
            </h1>

            <p className={`${styles.lead} ${styles.stagger3}`}>
              Engineer, researcher-in-training, and teacher — building{' '}
              <em className={styles.italic}>quiet, inspectable software</em>{' '}
              across backend systems, applied AI, and computer architecture.
            </p>

            <p className={`${styles.about} ${styles.stagger3}`}>
              I study Computer Science &amp; Engineering at{' '}
              <strong>KUET</strong>, work on applied machine learning at{' '}
              <strong>FlyRank AI</strong>, and run <strong>Arcode</strong> to
              teach programming in Bengali. Whether validating LLM tool calls or
              wiring a 32-bit processor in Logisim, I prefer systems you can
              measure, understand, and trust.
            </p>

            {/* Bespoke archival fountain-pen signature mark */}
            <div className={`${styles.signatureRow} ${styles.stagger3}`} aria-hidden="true">
              <svg
                className={styles.signatureSvg}
                viewBox="0 0 180 46"
                width="132"
                height="34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 36 C17 20, 25 8, 30 8 C34 8, 35 23, 37 33 M17 25 C25 22, 34 21, 42 22 C46 22, 48 18, 51 17 C54 16, 53 27, 56 27 C60 27, 65 18, 69 17 C72 16, 70 27, 75 27 C80 27, 87 10, 91 8 C89 17, 86 27, 86 31 M88 23 C94 18, 100 15, 103 16 C97 21, 93 23, 99 28 C104 31, 111 26, 116 21 C121 16, 129 17, 128 24 C127 30, 118 31, 116 25 C115 21, 120 18, 127 20 C134 22, 146 21, 166 19"
                  stroke="currentColor"
                  strokeWidth="1.65"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 41 C56 37, 104 36, 152 38"
                  stroke="var(--accent)"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeOpacity="0.6"
                />
              </svg>
              <span className={styles.signatureCaption}>Khulna, Bangladesh</span>
            </div>

            <div className={`${styles.actions} ${styles.stagger4}`}>
              <Link href="/research" className={styles.ctaPrimary}>
                <span>Explore research</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/projects" className={styles.ctaSecondary}>
                Selected projects
              </Link>
              <Link href="/contact" className={styles.textLink}>
                Write a note →
              </Link>
            </div>
          </div>

          <div className={`${styles.media} ${styles.stagger3}`}>
            <PhotoCard />
          </div>
        </div>

        <div className={`${styles.fieldNotes} ${styles.stagger4}`} aria-label="Current focus">
          {FIELD_NOTES.map((note) => (
            <div key={note.index} className={styles.noteItem}>
              <div className={styles.noteHead}>
                <span className={`${styles.noteIndex} tabular`}>{note.index}</span>
                <span className={styles.noteLabel}>{note.label}</span>
              </div>
              <p className={styles.noteValue}>{note.value}</p>
              <p className={`${styles.noteDetail} tabular`}>{note.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
