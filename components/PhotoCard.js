import { profile } from '@/data/profile';
import { getSocialIcon } from '@/lib/icons';
import styles from './PhotoCard.module.css';

const FEATURED_SOCIALS = ['github', 'linkedin', 'twitter', 'youtube', 'huggingface'];

export default function PhotoCard() {
  const socials = FEATURED_SOCIALS.filter((k) => profile.socials?.[k]).map((k) => [
    k,
    profile.socials[k],
  ]);

  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        <img
          src="/IMG_3821 (3).JPG"
          alt={profile.name}
          className={styles.photoImg}
          fetchPriority="high"
        />
      </div>
      <figcaption className={styles.caption}>
        <span className={styles.captionName}>
          {profile.name} · {profile.universityShort} &apos;27
        </span>
        <ul className={styles.socials} aria-label="Social links">
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
                  {Icon ? <Icon className={styles.socialIcon} /> : name}
                </a>
              </li>
            );
          })}
        </ul>
      </figcaption>
    </figure>
  );
}
