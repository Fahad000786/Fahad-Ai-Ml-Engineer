# Muhammad Fahad – AI/ML Engineer & Full-Stack Developer Portfolio

Modern, premium, fully responsive personal portfolio built with **React.js, Vite, TypeScript, and CSS3**.

🔗 **Live site:** https://fahad-ai-ml-engineer.vercel.app/

## Tech Stack
- React.js (functional components, hooks)
- Vite (build tool & dev server)
- TypeScript
- HTML5 / CSS3 (custom properties, responsive design)
- Lucide React (icons)

## Project Structure
```
src/
  components/   Navbar, Hero, About, Skills, Experience, Projects,
                Certifications, Education, Contact, Footer, SEO, Icons
  data/         portfolio.ts   (all personal content, separated from UI)
  assets/       fahadceo.png   (hero profile image)
  App.tsx
  main.tsx
  index.css
public/
  robots.txt            (crawler instructions)
  sitemap.xml           (helps Google discover pages)
  favicon.svg
vercel.json             (SPA routing, cache & security headers)
index.html              (meta tags, Open Graph, Twitter cards, canonical URL)
```

## Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Deployment (Vercel)
1. Push code to GitHub
2. Go to https://vercel.com → Add New Project
3. Import repo: `Fahad000786/Fahad-Ai-Ml-Engineer`
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**

Vercel will auto-deploy on every push to `main`.

## Getting Indexed by Google (Recruiter Discovery)

To help recruiters find you via Google search, complete these steps:

### 1. Verify your site in Google Search Console
- Go to https://search.google.com/search-console/
- Add property: `https://fahad-ai-ml-engineer.vercel.app/`
- Verify ownership (HTML tag or DNS method)

### 2. Submit your sitemap
- In Google Search Console, go to **Sitemaps** (left sidebar)
- Enter: `sitemap.xml`
- Click **Submit**

This tells Google exactly which pages exist on your site so they can be discovered and crawled.

### 3. Request indexing (for new/updated content)
- In Google Search Console, paste your URL in the top search bar
- Click **Request Indexing** to ask Google to crawl the page sooner

### 4. Monitor indexing status
- Use the **Pages** report in Search Console to see which pages are indexed
- Fix any crawling errors reported there

## SEO Features Included
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Meta title, description, keywords tailored for AI/ML recruiter searches
- Open Graph & Twitter Card tags (rich link previews on LinkedIn/Twitter)
- Canonical URL to prevent duplicate content issues
- JSON-LD `Person` structured data (jobTitle, skills, contact, social profiles, education)
- `robots.txt` allowing all crawlers
- `sitemap.xml` for page discovery
- Skip-to-content link for accessibility
- Responsive design (mobile-first, tablet, desktop)
- Fast, cacheable static assets

## Performance Note
The hero image `src/assets/fahadceo.png` is ~1.7 MB. For better Core Web Vitals (LCP) and SEO rankings, consider compressing it to under 300 KB (e.g., via Squoosh.app or TinyPNG) before the next deploy.

## Contact
- Email: basharatfahad54@gmail.com
- LinkedIn: https://www.linkedin.com/in/muhammad-fahad-8b6258370/
- GitHub: https://github.com/basharatfahad54-del
