'use client';

import { useState } from 'react';
import { profile } from '@/data/profile';
import { getSocialIcon } from '@/lib/icons';
import styles from './PhotoCard.module.css';

export default function PhotoCard() {
  const [flipped, setFlipped] = useState(false);
  const socials = Object.entries(profile.socials || {});

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={`${styles.card} ${flipped ? styles.flipped : ''}`}
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label="Flip photo card"
      >
        <div className={`${styles.face} ${styles.front}`}>
          <div className={styles.photo}>
            <img
              src="/IMG_3821 (3).JPG"
              alt={profile.name}
              className={styles.photoImg}
              loading="lazy"
            />
          </div>
          <p className={styles.hint}>tap to flip</p>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <p className={styles.backHeading}>// find me here</p>
          <ul className={styles.socials}>
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
                    <span>{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </button>
    </div>
  );
}