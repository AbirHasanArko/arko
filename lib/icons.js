// Minimal inline SVG icons for the social platforms listed in data/profile.js
// All icons use a 1em viewBox and inherit currentColor so they tint with text.
import React from 'react';

const baseProps = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

export const SOCIAL_ICONS = {
  github: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  linkedin: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M22 4.01s-2.07 1.39-3.05 1.46a4.51 4.51 0 0 0-7.91 3.06A12.82 12.82 0 0 1 2 4.5s-4 9 5 13a13.66 13.66 0 0 1-7 2c9 5 20 0 20-11.5a4.42 4.42 0 0 0-.08-.83A7.66 7.66 0 0 0 22 4.01z" />
    </svg>
  ),
  facebook: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  codeforces: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M3 17l5-5 4 4 7-7" />
      <path d="M14 9h4v4" />
      <path d="M21 3l-9 9" />
    </svg>
  ),
  youtube: (props) => (
    <svg {...baseProps} {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75,15.02 15.5,12 9.75,8.98" />
    </svg>
  ),
  huggingface: (props) => (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none" />
      <path d="M8.5 14a3.5 3.5 0 0 0 7 0" />
    </svg>
  ),
};

export function getSocialIcon(key) {
  return SOCIAL_ICONS[key] || null;
}