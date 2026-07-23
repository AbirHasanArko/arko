import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function validate(payload) {
  const errors = [];
  if (!payload || typeof payload !== 'object') {
    errors.push('Invalid payload');
    return errors;
  }
  const { name, email, message } = payload;
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name is required (min 2 chars).');
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Valid email is required.');
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.');
  }
  return errors;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const errors = validate(body);
  if (errors.length) {
    return NextResponse.json({ error: errors.join(' ') }, { status: 400 });
  }

  const { name, email, message } = body;
  const to = process.env.CONTACT_TO_EMAIL || 'abirhasanarko2004@gmail.com';
  const from =
    process.env.CONTACT_FROM_EMAIL || 'noreply@abirhasanarko.dev';
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `New portfolio message from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');

  // Fallback: log to server console when no email service is configured.
  if (!apiKey) {
    console.log('[contact]', { subject, text });
    return NextResponse.json({
      success: true,
      fallback: true,
      message: 'Message logged (email service offline).',
    });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] resend failed', err);
    return NextResponse.json(
      { error: 'Failed to send message. Try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, endpoint: 'contact' });
}