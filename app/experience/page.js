import Timeline from '@/components/Timeline';
import { experience } from '@/data/academics';

export const metadata = {
  title: 'Work Experience',
  description:
    'Internships, leadership roles, and teaching initiatives — most recent first.',
};

export default function ExperiencePage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-eyebrow">Experience</p>
        <h1 className="page-title">Where I&apos;ve Worked</h1>
        <p className="page-lede">
          Internships, department leadership, and independent teaching —
          ordered most recent first.
        </p>
      </header>

      <section className="section">
        <div className="monograph-bar">
          <span className="monograph-index">§ 01 · Career &amp; Leadership</span>
          <span className="monograph-rule" aria-hidden="true" />
        </div>
        <h2 className="section-title">Timeline</h2>
        <div style={{ marginTop: 22 }}>
          <Timeline items={experience} type="experience" />
        </div>
      </section>
    </div>
  );
}
