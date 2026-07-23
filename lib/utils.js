export function classNames(...args) {
  return args.filter(Boolean).join(' ');
}

export function formatDate(value, fallback = '') {
  if (!value) return fallback;
  try {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return value;
  }
}

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}