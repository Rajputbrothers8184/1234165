# Gx_Rajput portfolio

A responsive, static portfolio for **Gx_Rajput**, a multidisciplinary creative technologist based in Layyah, Punjab, Pakistan.

## Included

- 7+ years positioning across graphic design, social media design, web development, software and app development, and video editing
- Art-directed portfolio browser with 30 portfolio directions:
  - 5 social media concepts
  - 5 logo and identity concepts
  - 5 web and software concepts
  - 5 app concepts
  - 5 video editing concepts
  - 5 print design concepts
- Generated three-piece-suit profile artwork and wide cover artwork in `assets/`
- Responsive navigation and mobile menu
- Light/dark color theme toggle with local storage
- Portfolio filters, reduced-motion support, accessible labels, and keyboard-friendly controls
- Contact form that opens a pre-filled email draft for the supplied email address
- Social links for Instagram, Facebook, WhatsApp, TikTok, GitHub, and email
- Print service note: printing is on demand and charged separately

## Run locally

This is a no-build static site. From the project folder, run:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173`.

## Publish on GitHub Pages

The project is intentionally dependency-free and can be served from the repository root. In the repository settings, open **Pages**, choose **Deploy from a branch**, select the published branch, and choose `/ (root)`. The site entry point is `index.html`.

The GitHub link currently used in the site is `github.com/Rajputbrothers8184`. If the preferred GitHub profile username differs, update the link in `index.html` before publishing.
