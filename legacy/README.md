# Simcha Poems

Custom poetry for every Jewish celebration — weddings, bar/bat mitzvahs, birthdays, baby namings, anniversaries, and more.

## 🌐 Live site

**[https://mattis-klein.github.io/](https://mattis-klein.github.io/)**

The site publishes automatically from the `main` branch via GitHub Pages. Every push to `main` is live within a minute or two.

---

## 👀 Preview changes before merging

### Option 1 — Download the preview artifact (no install needed)

Every pull request runs a GitHub Actions workflow that packages the site and uploads it as a downloadable artifact.

1. Open the PR → click **Checks** → open the **Deploy PR Preview** workflow run
2. Scroll to the **Artifacts** section at the bottom of the run page
3. Download **site-preview-pr-N** and unzip it
4. Open `index.html` directly in your browser — done!

> A comment is automatically posted on each PR with a direct link to the workflow run.

### Option 2 — Run the repo locally

No build step is needed — the site is plain HTML/CSS/JS.

```bash
# 1. Clone (or check out the PR branch)
git checkout <branch-name>

# 2. Start a local server — pick whichever you have:
python3 -m http.server 8080          # Python 3 (built-in, no install)
npx serve .                          # Node.js

# 3. Open in your browser
#    http://localhost:8080/
```

---

## 📄 Pages

| File | Description |
|------|-------------|
| `index.html` | Home — hero, how-it-works, testimonials, occasions, pricing teaser |
| `pricing.html` | Pricing tiers + FAQ accordion |
| `samples.html` | Six sample poems |
| `order.html` | Order form |

---

## 🗂 File structure

```
index.html          Home page
pricing.html        Pricing + FAQ
samples.html        Sample poems
order.html          Order form
style.css           All styles
main.js             Nav toggle, scroll-to-top, fade-in animations
assets/
  logo.svg          Header logo
  icon.svg          Favicon
.github/
  workflows/
    deploy-preview.yml    Packages site for every PR and posts preview instructions
```
