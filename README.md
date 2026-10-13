# QUINT — Official Company Website / 공식 홈페이지

Official bilingual corporate website for **QUINT Co., Ltd. (주식회사 퀸트)**, an AI technology developer based in Gwangju, South Korea. It highlights the company's on-device safety solution **ON-SIGHT**, computer vision, embedded intelligence, digital twins, robotics and R&D approach.

> **Data provenance:** The company identity, contact details, and ON-SIGHT capabilities are based on the corporate profile supplied by QUINT. The hero illustration and architecture diagram are *conceptual representations*, not measured performance, deployed hardware photographs, or customer evidence. ON-SIGHT product UI is excerpted from the supplied company profile. No unverified deployment counts, accuracy metrics, revenue, patents or certifications are claimed.

## Live URL / 배포 주소

After GitHub Pages is enabled: https://qnt-sunghunbae.github.io/quint-website/

- Korean: `/?lang=ko`
- English: `/?lang=en`
- No route rewrites needed: both languages share a single static `index.html`. URL language parameters survive refresh; a language preference is also stored locally.

## Structure / 파일 구성

```
.
├── index.html             # Semantic HTML, SEO, schema.org, sections, metadata
├── styles.css             # Responsive design system and layouts
├── script.js              # Korean/English texts, menu and language controls
├── assets/
│   ├── quint-wordmark.png # Actual wordmark extracted from supplied QUINT company profile
│   ├── quint-emblem.png   # Actual emblem extracted from supplied QUINT company profile
│   ├── onsight-interface.webp # Product UI image excerpted from company profile
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   └── social-card.png
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── README.md
```

## Run locally / 로컬 실행

No build tools or external APIs are required. From the repo root:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000/` and `http://localhost:8000/?lang=en`.

## Publish on GitHub Pages / GitHub Pages 설정

The repository already exists. **Do not create a new one**.

1. Open `https://github.com/QNT-sunghunbae/quint-website/settings/pages`.
2. Under **Build and deployment**, set **Source → Deploy from a branch**.
3. Choose **Branch: main** and **Folder: /(root)**, then click **Save**.
4. After deployment is completed, visit `https://qnt-sunghunbae.github.io/quint-website/`. Refresh and test both `?lang=ko` and `?lang=en`.
5. To check progress, open **Actions** and look for the `pages build and deployment` run. A code commit is **not** proof of successful publication.

Every later commit to the selected publishing branch triggers a Pages rebuild (subject to GitHub's settings/policies).

## Content updates / 수정

| Need | Edit |
| --- | --- |
| Korean/English copy | `script.js` → `translations.ko` / `translations.en` |
| New sections/layout | `index.html` |
| Colors, spacing, responsive rules | `styles.css` |
| Contact email/phone | `index.html` contact links and both languages' related labels in `script.js` |
| Official company logo | `assets/quint-wordmark.png` and `assets/quint-emblem.png` |
| Social sharing image | `assets/social-card.png` and `index.html` OG image metadata |
| Future custom domain | GitHub Pages settings + DNS; adjust canonical, hreflang, OG URLs, robots/sitemap, schema.org |

Keep `assets/*` and relative URLs intact for Pages paths under `/quint-website/`. Avoid storing API credentials in this public repository. The contact action is a `mailto:` link, not a backend form; no messages are processed on the site.

## Release checklist

- [ ] Confirm Page's public URL gives HTTP 200 with HTTPS
- [ ] Review desktop, tablet and mobile layouts
- [ ] Toggle KR/EN and refresh both `?lang=` URLs
- [ ] Verify all internal anchors and `mailto:` / `tel:` links
- [ ] Verify fonts, CSS, product interface image and wordmark render
- [ ] Check browser console and accessibility keyboard navigation
- [ ] Update legal/company information before announcing any new certification, patent or partnership

No analytics, cookies, third-party scripts, external font CDNs, API keys or paid services are used.

Copyright © QUINT Co., Ltd. All rights reserved. The images extracted from the supplied company profile are company materials; this repository does not grant a public reuse license.
