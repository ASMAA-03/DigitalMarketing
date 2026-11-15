#Digital Marketing Agency Website

A multi-page, fully responsive website for a digital marketing agency, built with pure **HTML5** and **CSS3** (no frameworks, no JavaScript libraries).

🔗 **Live demo:** https://asmaa-03.github.io/DigitalMarketing/
## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, call-to-action, services overview, footer |
| Our Work | `work.html` | Case studies and results |
| Consultation | `contact.html` | "Request a Free Consultation" form with the benefits of the call |

## Features

- Mobile-first responsive layout (tablet and phone breakpoints at `768px` and `480px`)
- Hover animations on cards, buttons and links
- Responsive consultation form (single column on mobile, two columns on desktop) using CSS Grid
- Smooth scrolling to in-page sections
- Material Symbols icons and an inline SVG logo

## Built With

- HTML5 (semantic elements, accessible form labels)
- CSS3 (Flexbox, Grid, media queries, transitions)
- [Material Symbols](https://fonts.google.com/icons) via Google Fonts

## Project Structure

```
.
├── index.html
├── work.html
├── contact.html
├── style.css            # shared styles (nav, home, work, footer)
├── consultStyle.css     # contact page only
└── images/
```

## Getting Started

No build step is needed.

```bash
git clone https://github.com/USERNAME/REPO-NAME.git
cd REPO-NAME
```

Then open `index.html` in your browser.

## Future Improvements

- Connect the consultation form to a backend or form service
- Add a dark mode
