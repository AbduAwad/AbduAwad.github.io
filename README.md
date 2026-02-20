# Abdulrahman Awad - Personal Portfolio

Live at **[abduawad.github.io](https://abduawad.github.io)**

A static portfolio website built with vanilla HTML, CSS, and JavaScript. Stripe-inspired design featuring a 3D particle globe, orbital education visualization, and responsive mobile-first layout.

---

### Tech Stack

- HTML / CSS / JavaScript (single `index.html` file)
- Inter + JetBrains Mono (Google Fonts)
- Canvas API (3D globe, orbital rings)
- GitHub Pages (static hosting from `main` branch)

---

### Local Development

No build step required. Just open the file:

```bash
git clone https://github.com/AbduAwad/AbduAwad.github.io.git
cd AbduAwad.github.io
open index.html
```

Or use a local server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

### Deployment

The site deploys automatically via GitHub Pages from the `main` branch. To deploy changes:

```bash
git add -A
git commit -m "your commit message"
git push origin main
```

Changes go live within a few minutes at [abduawad.github.io](https://abduawad.github.io).

---

### Project Structure

```
.
├── index.html          # Main site (production)
├── portfolio.html      # Working copy (edit here, then cp to index.html)
├── shopify.png         # Experience card images
├── nokia1.png
├── nokia2.png
├── nokia3.png
├── carleton.png
├── carleton_text.png
└── resume.tex          # LaTeX resume source
```
