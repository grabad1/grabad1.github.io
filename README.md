# Dusan Grabovic - portfolio

Personal software-engineering portfolio built with HTML, CSS, and JavaScript.

Website: https://grabad1.github.io/

## Local preview

From the repository directory:

```powershell
python -m http.server 4179 --bind 127.0.0.1
```

Open `http://127.0.0.1:4179/`, or open `index.html` directly.

## Design and content

- Dark navy surfaces, mint and cyan accents, monospace labels, and grid backgrounds.
- A profile panel using the actual photograph embedded in the original CV.
- Four project showcases, experience, education, contact links, and CV download.
- Responsive layouts, keyboard navigation, reduced-motion support, and content
  that remains available without JavaScript.

`assets/portrait.webp` is a lossless copy of the CV's embedded photograph at its
original resolution. It has no EXIF or location metadata. No replacement portrait
was generated, and the face was not altered.

The downloadable CV is the phone-free public copy and identifies the OS kernel
as RISC-V.

## Files

- `index.html`: page content, profile photo, and project links.
- `styles.css`: the independent digital visual design.
- `script.js`: optional scroll-reveal effects.
- `assets/portrait.webp`: the photograph extracted from the supplied CV.
- `assets/favicon.svg`: digital-style site icon.
- `assets/Dusan_Grabovic_CV.pdf`: phone-free CV download.
- `.nojekyll`: enables direct static-file hosting with GitHub Pages.

There are no build tools, package dependencies, external fonts, analytics, or
third-party scripts. The website exposes email and social links, not a phone number.

## Deployment

GitHub Pages serves the root of the `main` branch. Pushing changes to that branch
updates the website after the Pages deployment completes. `.nojekyll` keeps the
site's existing static files without requiring a separate build.

Only the public website assets belong in this repository. Keep original private
CVs, credentials, browser profiles, and development-session artifacts outside it.
