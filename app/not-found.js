import Link from 'next/link';

export const metadata = {
  title: 'Signal Lost — 404',
};

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '120px 24px',
        textAlign: 'center',
      }}
    >
      <pre
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
          color: 'var(--accent)',
          margin: '0 0 32px',
          lineHeight: 1.4,
        }}
      >
{`  ╔═══════════════════════════╗
  ║   S I G N A L   L O S T   ║
  ╚═══════════════════════════╝`}
      </pre>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 8vw, 96px)',
          margin: 0,
          fontWeight: 800,
          letterSpacing: '-0.02em',
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          fontSize: 16,
          margin: '20px 0 32px',
        }}
      >
        The page you're looking for isn't here. Maybe the URL drifted, or the
        signal faded.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          background: 'var(--bg-dark)',
          color: 'var(--accent)',
          border: '1px solid var(--bg-dark)',
          borderRadius: 8,
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
          textDecoration: 'none',
        }}
      >
        ← Return to base
      </Link>
    </div>
  );
}