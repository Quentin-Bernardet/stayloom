# STAYLOOM — Property Management Website

Premium short-term rental management company website built with Next.js, Tailwind CSS, and static export for GitHub Pages / Hostinger deployment.

## Getting started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

This generates a fully static site in the `out/` folder, ready to upload anywhere.

## Adding your images

Drop your photos into `public/images/` using these exact filenames:

| File | Used in |
|------|---------|
| `logo.png` | Navbar, Footer |
| `hero-pool.jpg` | Home hero |
| `living-room.jpg` | Home process, How It Works |
| `kitchen.jpg` | Home process, How It Works |
| `terrace-pool.jpg` | Home process, About, How It Works |
| `indoor-outdoor.jpg` | Home "Why" section, About intro |
| `gallery-1.jpg` through `gallery-8.jpg` | Home gallery |

If an image file is missing, a solid color placeholder renders in its place so the layout stays intact.

## Deployment

### GitHub Pages (automatic)

1. Push the repository to GitHub.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys automatically.

If your site is hosted at a subpath (e.g. `https://username.github.io/stayloom/`), add `basePath` and `assetPrefix` in `next.config.js`:

```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/stayloom',
  assetPrefix: '/stayloom/',
  images: { unoptimized: true },
}
```

If you use a custom domain (e.g. `www.stayloom.com`) via GitHub Pages, no `basePath` is needed. Create a `CNAME` file in the `public/` folder containing your domain name.

### Hostinger (manual upload)

1. Run `npm run build` to generate the `out/` folder.
2. Upload the entire contents of `out/` to your Hostinger public root via FTP or the File Manager.
3. Point your domain to Hostinger in your DNS settings.

### Hostinger (npm deploy via gh-pages)

```bash
npm run deploy
```

This runs `next build` then uses `gh-pages` to push the `out/` folder to the `gh-pages` branch.

## Contact form

The contact form uses [FormSubmit](https://formsubmit.co/) to send emails to `stayloomproperty@gmail.com` without any backend. No setup is required beyond the first form submission, which will ask you to confirm your email address.

## Tech stack

- [Next.js 14](https://nextjs.org/) with App Router and static export
- [Tailwind CSS](https://tailwindcss.com/) with custom brand color palette
- Google Fonts via `next/font/google` (Cormorant Garamond + Jost)
- `next/image` for optimized images (unoptimized mode for static export)
