import Link from 'next/link';

// Custom <a> — detects external vs internal links, adds an arrow icon for external
// and uses Next.js Link for internal routes.
export function MDXLink({ href = '', children, ...rest }) {
  const isExternal = /^https?:\/\//i.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span aria-hidden="true" className="mdx-ext-icon">
          ↗
        </span>
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

// Responsive iframe wrapper — supports YouTube, Vimeo, CodePen, HuggingFace Spaces, etc.
// Usage in MDX:
//   <iframe src="https://www.youtube.com/embed/xyz" title="Demo" />
//   <iframe src="https://arko-hasan-ai-function-validator.hf.space" title="HF demo" height="640" />
export function MDXIframe({ src, title = 'Embedded content', height = 480, allow, ...rest }) {
  const allowDefault =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  return (
    <span className="mdx-iframe-wrap">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow={allow || allowDefault}
        allowFullScreen
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
        {...rest}
      />
    </span>
  );
}

export const mdxComponents = {
  a: MDXLink,
  iframe: MDXIframe,
};

export default mdxComponents;
