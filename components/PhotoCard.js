'use client';

import { useState } from 'react';
import { profile } from '@/data/profile';
import { getSocialIcon } from '@/lib/icons';
import styles from './PhotoCard.module.css';

export default function PhotoCard() {
  const [flipped, setFlipped] = useState(false);
  const socials = Object.entries(profile.socials || {});

  const toggle = () => setFlipped((f) => !f);

  return (
    <div className={styles.wrap}>
      <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
        {/* Front face — portrait */}
        <div
          className={`${styles.face} ${styles.front}`}
          aria-hidden={flipped}
        >
          <button
            type="button"
            className={styles.frontTrigger}
            onClick={toggle}
            tabIndex={flipped ? -1 : 0}
            aria-label="Flip portrait to view social links"
            aria-expanded={flipped}
          >
            <span className={styles.photo}>
              <img
                src="/IMG_3821 (3).JPG"
                alt={profile.name}
                className={styles.photoImg}
                fetchPriority="high"
              />
            </span>
            <span className={styles.frontBar}>
              <span className={styles.hint}>
                Tap to flip <span className={styles.flipGlyph} aria-hidden="true">↻</span>
              </span>
            </span>
          </button>
        </div>

        {/* Back face — socials */}
        <div
          className={`${styles.face} ${styles.back}`}
          aria-hidden={!flipped}
          onClick={toggle}
        >
          <div className={styles.backHeader}>
            <p className={styles.backTitle}>Find me online</p>
          </div>

          <ul
            className={styles.socials}
            aria-label="Social profiles"
            onClick={(e) => e.stopPropagation()}
          >
            {socials.map(([name, href]) => {
              const Icon = getSocialIcon(name);
              return (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={flipped ? 0 : -1}
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

          <button
            type="button"
            className={styles.backButton}
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            tabIndex={flipped ? 0 : -1}
            aria-label="Flip back to portrait"
          >
            <span aria-hidden="true">↺</span>
            <span>Flip back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
