import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found — 404',
};

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: '0 auto',
        padding: '120px 24px',
        textAlign: 'center',
      }}
    >
      <p className="page-eyebrow" style={{ marginBottom: 16 }}>
        Error 404
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          margin: 0,
          fontWeight: 500,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
        }}
      >
        This page doesn&apos;t exist.
      </h1>
      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: 16,
          lineHeight: 1.65,
          maxWidth: '42ch',
          margin: '18px auto 32px',
        }}
      >
        The link may be outdated or the address might have moved.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '11px 22px',
          background: 'var(--btn-primary-bg)',
          color: 'var(--btn-primary-fg)',
          border: '1px solid var(--btn-primary-bg)',
          borderRadius: 999,
          fontSize: 14,
          fontWeight: 500,
          textDecoration: 'none',
        }}
      >
        ← Back to home
      </Link>
    </div>
  );
}
