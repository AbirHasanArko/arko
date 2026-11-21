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
        <h1 className="page-title">Experience</h1>
        <p className="page-lede">
          Internships, department leadership, and independent teaching —
          ordered most recent first.
        </p>
      </header>

      <section className="section">
        <div className="monograph-bar">
          <span className="monograph-index tabular">§ 01</span>
          <h2 className="section-title">Career &amp; Leadership</h2>
          <span className="monograph-rule" aria-hidden="true" />
        </div>
        <Timeline items={experience} type="experience" />
      </section>
    </div>
  );
}
