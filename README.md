# WarmLine brochure site

Static marketing site built with [Astro](https://astro.build). It is separate from the
WarmLine app (`carolscall/telephony-app`) so marketing can edit and ship it on its own schedule.
The output is plain HTML and CSS with no JavaScript, cookies, forms, servers or customer data,
so it scales on any CDN and leaves almost nothing to attack.

The only connection to the app is links:

- **Get started** / **Choose a plan** go to `$PUBLIC_APP_URL/signup?plan=<code>`, the app's
  public enrollment page. The family picks a plan, enrolls their loved one and sets a password.
  The signup then waits for approval under the platform account (Accounts page in the app).
- **Sign in** goes to `$PUBLIC_APP_URL/admin`.

## Edit content

| What | Where |
| --- | --- |
| Brand name, tagline, contact emails | `src/site.config.ts` |
| Prices, plan features, fees | `src/data/pricing.ts` |
| Pages | `src/pages/*.astro` (one file per URL) |
| Header and footer | `src/layouts/Base.astro` |
| Colors and type | `src/styles/global.css` (CSS variables at the top) |

Prices follow `docs/03-PRICING.md` in the app repo. **Keep them in step with the plans configured
in the app** (Billing → plans on the platform account). The plan `code` values (`essential`,
`plus`, `premium`) must match the app's plan codes, because the signup page preselects by code.

Content rules:

- Never call the service a medical alert, monitoring or emergency service. Always keep the "call
  911" note.
- Make no HIPAA or compliance claims until the BAAs are signed (voice provider, AWS).
- Make no claims about customer counts, popularity or testimonials until they are real.
- Annual prepay is hidden (`showAnnual = false`) because the app doesn't bill yearly yet.
- `privacy` and `terms` are plain-language **drafts**. Have counsel review them before launch.
- Placeholder emails (`@example.com`) in `src/site.config.ts` must be replaced.

## Develop

```sh
npm ci
cp .env.example .env     # set PUBLIC_APP_URL=http://localhost:8090 for a local app
npm run dev              # http://localhost:4321
npm run check            # type and template check
npm run build            # static output in dist/
```

Node 24 (`.node-version`). Versions are pinned exactly in `package.json`.

## Deploy

Any static host works. Build command `npm run build`, output directory `dist`, with build-time
environment variables:

- `SITE_URL`: this site's public URL, used for canonical links and the sitemap
- `PUBLIC_APP_URL`: the app's public URL, e.g. `https://app.example.com`

**Cloudflare Pages** and **Netlify** pick up `public/_headers` (strict CSP, HSTS, nosniff,
frame-ancestors none). On **S3 + CloudFront**, add the same headers with a CloudFront response
headers policy. GitHub Actions (`.github/workflows/build.yml`) checks and builds every push and
pull request, and uploads `dist` as an artifact. Set the repository variables `SITE_URL` and
`PUBLIC_APP_URL` to use real URLs.
