import Link from 'next/link';
import { profile } from '@/data/profile';
import { getSocialIcon } from '@/lib/icons';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(profile.socials || {});

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <p className={styles.heading}>// signal</p>
          <p className={styles.text}>
            Currently shipping from <strong>Khulna, Bangladesh</strong>.
            Open to collaboration on AI tooling, backend systems, and developer
            education.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>// links</p>
          <ul className={styles.linkList}>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/academics">Education</Link></li>
            <li><Link href="/experience">Experience</Link></li>
            <li><Link href="/credentials">Credentials</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>// socials</p>
          <ul className={styles.socialList}>
            {socials.map(([name, href]) => {
              const Icon = getSocialIcon(name);
              return (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={name}
                    title={name}
                  >
                    {Icon ? <Icon className={styles.socialIcon} /> : null}
                    <span className={styles.socialLabel}>{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {year} {profile.name}. Built with Next.js · Deployed on Vercel.
        </p>
        <p className={styles.tagline}>// {profile.tagline}</p>
      </div>
    </footer>
  );
}