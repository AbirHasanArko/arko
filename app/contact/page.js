import { profile } from '@/data/profile';
import { getSocialIcon } from '@/lib/icons';
import ContactForm from '@/components/ContactForm';
import WireframeCube from '@/components/WireframeCube';
import CodeFloat from '@/components/CodeFloat';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact',
  description: `Get in touch with ${profile.name}.`,
};

const SOCIAL_LINKS = [
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'twitter', label: 'X / Twitter' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'codeforces', label: 'Codeforces' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'huggingface', label: 'Hugging Face' },
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <ScrollReveal>
        <header className="page-header">
          <p className="page-eyebrow">// handshake</p>
          <h1 className="page-title">Get in touch</h1>
          <p className="page-lede">
            Whether it's a contract, a collab, or just a hello — drop a line. I
            typically reply within a day or two.
          </p>
        </header>
      </ScrollReveal>

      <div className={styles.layout}>
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <aside className={styles.sidebar}>
            <div className={styles.cubeWrap}>
              <CodeFloat count={10} />
              <WireframeCube size={96} variant="core" />
            </div>

            <p className={styles.statusRow}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Open to opportunities</span>
            </p>

            <div className={styles.infoBlock}>
              <div className={styles.info}>
                <p className={styles.infoLabel}>email</p>
                <a href={`mailto:${profile.email}`} className={styles.infoLink}>
                  {profile.email}
                </a>
              </div>
              <div className={styles.info}>
                <p className={styles.infoLabel}>phone</p>
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className={styles.infoLink}>
                  {profile.phone}
                </a>
              </div>
              <div className={styles.info}>
                <p className={styles.infoLabel}>location</p>
                <p className={styles.infoText}>{profile.location}</p>
              </div>
            </div>

            <p className={styles.socialsHeading}>// elsewhere</p>
            <ul className={styles.socials}>
              {SOCIAL_LINKS.filter((s) => profile.socials[s.key]).map((s) => {
                const Icon = getSocialIcon(s.key);
                return (
                  <li key={s.key}>
                    <a
                      href={profile.socials[s.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {Icon ? <Icon className={styles.socialIcon} /> : null}
                      <span>{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </ScrollReveal>
      </div>
    </div>
  );
}