# Ahsan Portfolio — Next.js + Tailwind + Nodemailer

## Run
Requires Node.js 20.9+.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Production: `npm run build`, then `npm start`.
Stop a running production server before rebuilding and restart it afterwards, so HTML and CSS asset hashes stay in sync.

## SMTP setup (required for delivery)

1. Copy `.env.example` to `.env.local`.
2. Fill `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, and `SMTP_PASS` with your provider settings.
3. Set `MAIL_FROM_ADDRESS` to the authenticated mailbox or a sender verified by your SMTP provider.
4. `CONTACT_TO_EMAIL` is the inbox that receives enquiries (default example: `ahsanarshad291@gmail.com`).
5. Set `SITE_URL` to your exact production origin, e.g. `https://your-domain.com`. Leave it blank for the Arena preview / local development, where the request host is checked instead.
6. Restart the server after changing environment variables.

```bash
cp .env.example .env.local
# Edit .env.local privately, then:
npm run smtp:verify
npm run dev
```

### Gmail example
The example file uses Gmail's `smtp.gmail.com`, port `465`, and `SMTP_SECURE=true`.
Enable Google 2-Step Verification and create an **App Password**, if your account supports it. Use that App Password for `SMTP_PASS`, not your normal Google password. `SMTP_USER` and `MAIL_FROM_ADDRESS` should be your Gmail address (or a permitted alias). Some managed accounts do not allow App Passwords; use your administrator-approved SMTP provider instead.

For a provider on port `587`, set `SMTP_SECURE=false`; STARTTLS is mandatory. TLS certificate checks are never disabled. For a custom domain, configure your provider's SPF/DKIM and DMARC records for deliverability.

On your hosting platform, add the same values as **server-side environment variables** and redeploy. Do not use `NEXT_PUBLIC_` for secrets. `.env.local` is gitignored and excluded from the project download. Never commit it or share SMTP passwords in chat.

### What happens on submit
- Browser validation, a disabled sending button, and inline success/error feedback.
- Server validation of all fields and select options, JSON body size cap, same-origin check, honeypot, and basic rate limiting.
- Nodemailer sends one branded notification to **your fixed inbox**. No visitor auto-reply is sent (avoids turning the form into a mail relay).
- The authenticated mailbox is `From`; the visitor is `Reply-To`, so clicking Reply reaches them.
- The notification contains name, email, phone, service, budget, and message in HTML and plain text.
- User text is HTML-escaped. Visitor input cannot choose recipients or override headers.
- A success response is returned only after SMTP acceptance. This does not guarantee inbox placement; check your inbox and spam folder during a real delivery test.
- Missing SMTP credentials produce an honest “not configured” error, not a fake success. Failed requests retain the visitor's form values.

**Current delivery status:** credentials have not been provided, so no real email has been sent or inbox delivery verified. The implementation and local tests are ready; environment configuration is the remaining activation step.

### Rate limiting / deployment
The included limiter is in-memory: five attempts per ten minutes per key, plus twenty total per minute per Node process. It resets on restart and is not shared across serverless instances. By default all requests share a conservative key because forwarding headers are not blindly trusted. Set `CONTACT_TRUST_PROXY=true` only if your platform guarantees it overwrites `X-Forwarded-For` with a trustworthy client address. For public production / multi-instance hosting, use a shared Redis limiter or an edge/WAF rule and, if needed, a bot challenge. An origin check alone does not stop bots.

This API requires a **Node.js server runtime** and SMTP egress. It does not work on a static-only export or an Edge runtime.

## Email template

```bash
npm run email:preview
```

Open `email-preview/contact-email.html`. It uses fictional sample contact details and sends no mail. `email-preview/contact-email.txt` is the plain-text version.

Edit `lib/email-template.js` to customize the purple header, paper cards, yellow reply button, typography, and footer. This is an email-safe interpretation of the site: table layout, inline styles, no scripts, no external images or fonts. Rounded corners / symbols vary by email client. Outlook can render square corners; the content remains readable. Browser rendering is tested, but real Gmail/Outlook/iOS inbox rendering still needs a provider-connected test.

## Structure
- `app/page.js`: page composition
- `app/layout.js`: metadata and document layout
- `app/api/contact/route.js`: Node.js POST endpoint
- `components/*.js`: editable React sections and interactions
- `components/ContactForm.js`: form request lifecycle
- `lib/contact-validation.js`: shared server validation
- `lib/contact-handler.js`: request checks, limits and error handling
- `lib/mailer.js`: Nodemailer setup
- `lib/email-template.js`: HTML + text mail template
- `scripts/verify-smtp.js`: connection/authentication check (sends no mail)
- `app/design.css`: original textures, doodles, animations
- `app/globals.css`: Tailwind and responsive details
- `public/fonts`: original fonts, locally hosted
- `tailwind.config.js`: original theme and Tailwind plugins

All React components use `.js` files (JSX syntax), not TypeScript. No HTML iframe, raw HTML injection, or runtime Tailwind CDN.

## Responsive fidelity
Below 1024px uses the supplied mobile layout, including its tablet rules. At 1024px and above uses the desktop layout. Custom Tailwind `mobile-layout:` and `desktop-layout:` variants retain both sources' utility values without hydration-dependent layout switching or duplicate page trees. The few differing text labels use responsive spans.

Fonts, colors, original decorative SVGs, spacing, scroll reveals, skill meters, and hover effects are preserved. Unsupported utility names in the original Tailwind configuration have not been given new visual behavior. Emoji appearance varies by operating system. Contact feedback appears only on submit, so the idle page design stays unchanged.

### Hero title
The hero title now reads **AHSAN · portrait · ARSHAD** so the visitor sees the name and the person together.
- Wide screens (1280px and up): one line — `AHSAN`, portrait card, `ARSHAD`.
- From 640–1279px and on phones: `AHSAN` on the first line, the portrait card centered below it, `ARSHAD` beneath the card.
- Every layout stays centered with no horizontal overflow. The original cutout letters, tilts, sparkle and badge are unchanged.

### The portrait
`public/portrait.png` and `public/portrait.webp` contain the supplied cut-out photo (transparent background), already trimmed, resized and optimised. The hero serves the WebP version first (about 68 KB) and falls back to PNG for older browsers. The image keeps its original aspect ratio at every width: about 116px wide on phones, 144px on tablets and 166px on large desktops, always centered on the page and vertically hidden behind nothing. It carries the same hard `#140b33` shadow as the letter cut-outs plus a slight tilt and a gentle hover lift, so it belongs to the scrapbook style without a photo frame.

To swap the photo later, replace both files with the same filenames. A seated or cut-out shot with a transparent background works best; keep roughly a 2:3 portrait ratio to avoid layout shifts. Update `alt` in `components/Hero.js` if you want different image text. Keep the file small (a few hundred KB) so the hero stays fast.

### Dark theme
The site ships with a real dark mode — not just a mockup:
- A sun/moon toggle sits in the header next to “Let’s Talk”, with an accessible label and `aria-pressed`.
- First visit follows your OS preference (`prefers-color-scheme`); your manual choice is saved in `localStorage` and restored before first paint by a tiny script in `<head>`, so there is no white flash.
- The dark look keeps the same scrapbook identity: ink-black paper (#0f0a1e) with a subtle dot grid, deep violet cards, purple sticker letters with a soft neon glow, neon-yellow accents, and the photo picking up a warm rim light.
- Everything is re-skinned through CSS variables and `[data-theme="dark"]` rules in `app/globals.css`, so the light design is untouched. Forms, dropdowns, slider, mobile menu, badges, timeline chips and the contact card all have dark equivalents.
- Contrast was verified in the browser: no text/background pair falls below a 3:1 ratio in either theme.

To change the palette, edit the `--dark-*` variables at the top of the dark section in `app/globals.css`.

### Site-wide polish
- **Mobile navigation**: small screens had no menu at all, so a themed burger button now opens a full-screen menu (portal-rendered so the header's blur cannot clip it) with staggered links, Escape-to-close, scroll lock, and a “Let’s Talk” call to action.
- **Active section highlighting**: the desktop nav underlines the section you are viewing, and honours `prefers-reduced-motion`.
- **Back-to-top button** appears after scrolling, with keyboard support.
- **Stats count up** from zero once they scroll into view (skipped entirely when reduced motion is requested).
- **Contact extras**: a copy-email button next to the address and a live “0 / 6,000 characters” counter under the project details field.
- **Better small-screen details**: anchor targets clear the sticky header, a “Skip to content” link appears on first Tab, visible focus rings on every control, and a gentle floating animation for the hero portrait (pauses on hover).
- **Placeholder links** no longer jump to the top — the header logo scrolls up smoothly, project “Visit Site” links stay put.
- **SEO/social**: full Open Graph + Twitter metadata with a generated `public/og.png` card, sitemap, robots, JSON-LD Person data, and an `A` favicon. Set `SITE_URL` in production so these point at your domain.
- **Footer year** and clock-free code stay correct automatically.

### Selected Work slider
The five project cards now sit in a swipeable slider instead of a static grid:
- Desktop (1024px and up) shows **three cards at a time**, tablet (768–1023px) two, and phones one.
- Controls: circular yellow arrow buttons, a `01 / 05` counter in marker font, and dots. Disabled arrow states at the ends.
- Also supports dragging with the mouse, touch swipe, and Left/Right arrow keys when the slider has focus. Cards snap neatly into place, and a drag never opens a project link.
- A short hint under the dots says “Drag, swipe or use the arrows — three cards at a time on desktop.”
- Cards keep their polaroid look, tilt, tape and hover effects. Layout adapts on resize, and the section grows by about 117px on desktop to make room for the controls.

Cards that are off-screen are revealed when you reach them, so no project stays faded. Edit the five cards in `components/SelectedWork.js` as before; the slider handles any number of cards automatically.

### Contact dropdowns
The two native `<select>` menus now use an accessible custom dropdown (Radix Select portal; no new visual style is applied). They keep the black 2px border, rounded corners and paper background of the inputs, add a purple/yellow `✦`/`$` icon, an animated chevron, a “FIND YOUR RANGE / LET’S BUILD SOMETHING” heading, option descriptions, and a checkmark on the selected row, plus keyboard support and a rotating arrow while open. Values submitted to the API are unchanged, so the email template still receives the exact service and budget strings. Trigger height grows slightly (about 12px total on mobile) because the custom control has a comfortable tap target.

Existing placeholder project links remain placeholders.

## Checks

```bash
npm test
npm run build
npm run smtp:verify # Requires real credentials; verifies connection/auth, not delivery.
```

Automated tests cover validation, HTML escaping, malformed/oversized requests, origin checks, rate limits, error handling, sender/recipient safety, and Nodemailer MIME creation using a local stream transport. No external email is sent by the test suite.
