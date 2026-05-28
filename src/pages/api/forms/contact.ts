export const prerender = false;

import type { APIRoute } from 'astro';

const WEBHOOK_URL = import.meta.env.HIGHLEVEL_GENERAL_INQUIRY_WEBHOOK_URL as string;
const TIMEOUT_MS = 10_000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonOk(body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

function jsonErr(message: string, status: number): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return jsonErr('Content-Type must be application/json', 415);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return jsonErr('Invalid JSON body', 400);
  }

  // Silently discard honeypot submissions
  if (body.website_address) {
    return jsonOk({ success: true });
  }

  // Extract and coerce fields
  const name            = typeof body.name     === 'string' ? body.name.trim()                   : '';
  const email           = typeof body.email    === 'string' ? body.email.trim().toLowerCase()    : '';
  const message         = typeof body.message  === 'string' ? body.message.trim()                : '';
  const phone           = typeof body.phone    === 'string' ? body.phone.trim()                  : '';
  const service         = typeof body.service  === 'string' ? body.service.trim()                : '';
  const budget          = typeof body.budget   === 'string' ? body.budget.trim()                 : '';
  const timeline        = typeof body.timeline === 'string' ? body.timeline.trim()               : '';
  const consentSms      = body.consentSms      === true || body.consentSms      === 'true';
  const consentMktg     = body.consentMarketing === true || body.consentMarketing === 'true';
  const consentTerms    = body.consentTerms    === true || body.consentTerms    === 'true';
  const language        = body.language === 'es' ? 'es' : 'en';
  const sourcePage      = typeof body.source_page  === 'string' ? body.source_page  : '';
  const submittedAt     = typeof body.submitted_at === 'string' ? body.submitted_at : new Date().toISOString();

  // Validation — name is optional, consentSms is optional
  if (!email || !EMAIL_RE.test(email)) return jsonErr('A valid email address is required', 400);
  if (!message)                         return jsonErr('Message is required', 400);
  if (!consentTerms)                    return jsonErr('You must agree to the Privacy Policy and Terms of Service', 400);

  const [firstName, ...rest] = name ? name.split(' ') : [''];
  const lastName = rest.join(' ');

  const payload = {
    firstName,
    lastName,
    name,
    email,
    phone,
    message,
    service,
    budget,
    timeline,
    sms_consent:       consentSms,
    marketing_consent: consentMktg,
    terms_accepted:    true,
    source_page:       sourcePage,
    form_type:         'general_inquiry',
    language,
    submitted_at:      submittedAt,
    tags: [
      'source:noza_website',
      'form:general_inquiry',
      `lang:${language}`,
      `sms_consent:${consentSms}`,
      `marketing_consent:${consentMktg}`,
    ],
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timer);

    if (!res.ok) return jsonErr('Unable to submit form. Please try again.', 502);

    return jsonOk({ success: true });
  } catch (e) {
    clearTimeout(timer);
    if (e instanceof Error && e.name === 'AbortError') {
      return jsonErr('Request timed out. Please try again.', 504);
    }
    return jsonErr('An unexpected error occurred. Please try again.', 500);
  }
};
