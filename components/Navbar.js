'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { profile } from '@/data/profile';
import { navigation } from '@/data/navigation';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={`${profile.name} home`}>
          <span className={styles.brandMark} aria-hidden="true">
            <span className={styles.brandMarkLetter}>A</span>
            <span className={styles.brandMarkDot} />
          </span>
          <span className={styles.brandText}>{profile.name}</span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Primary">
          <ul className={styles.navList}>
            {navigation.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.link} ${isActive ? styles.active : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
        </button>
      </div>
    </header>
  );
}