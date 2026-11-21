import Link from 'next/link';
import { profile } from '@/data/profile';
import { navigation } from '@/data/navigation';
import { getSocialIcon } from '@/lib/icons';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(profile.socials || {});

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <div className={styles.brandRow}>
            <img
              src="/favicon.svg"
              alt=""
              width={24}
              height={24}
              className={styles.brandLogo}
              aria-hidden="true"
            />
            <p className={styles.brand}>{profile.name}</p>
          </div>
          <p className={styles.text}>
            {profile.degree}, {profile.universityShort}. Written, studied, and
            engineered in <strong>{profile.location}</strong>.
          </p>
          <p className={styles.colophon}>
            Colophon — Set in Newsreader, Inter &amp; JetBrains Mono.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>Index</p>
          <ul className={styles.linkList}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>Elsewhere</p>
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
        <p className="tabular">© {year} {profile.name}</p>
        <p className={styles.tagline}>{profile.tagline}</p>
      </div>
    </footer>
  );
}
