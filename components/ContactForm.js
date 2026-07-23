'use client';

import { useState } from 'react';
import { profile } from '@/data/profile';
import styles from './ContactForm.module.css';

const initial = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: 'Transmitting...' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Transmission failed');
      }
      setStatus({
        state: 'sent',
        message: data?.fallback
          ? 'Message logged. Email delivery is offline, but I will read it soon.'
          : 'Message sent. Expect a reply soon.',
      });
      setForm(initial);
    } catch (err) {
      setStatus({
        state: 'error',
        message: err.message || 'Something went wrong. Try emailing me directly.',
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Ada Lovelace"
            className={styles.input}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="ada@example.com"
            className={styles.input}
          />
        </label>
      </div>
      <label className={styles.field}>
        <span className={styles.label}>message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder={`Hello ${profile.name.split(' ')[0]}, I'd like to talk about...`}
          className={styles.textarea}
        />
      </label>
      <div className={styles.actions}>
        <button
          type="submit"
          className={styles.submit}
          disabled={status.state === 'sending'}
        >
          {status.state === 'sending' ? 'Sending...' : 'Send message →'}
        </button>
        <a href={`mailto:${profile.email}`} className={styles.directEmail}>
          or email {profile.email}
        </a>
      </div>
      {status.state !== 'idle' && (
        <p
          className={`${styles.status} ${
            status.state === 'error' ? styles.errorText : styles.okText
          }`}
          role="status"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}