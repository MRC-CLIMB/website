# CLIMB website (Jekyll)

The public front door for **CLIMB** — Cloud Infrastructure for Microbial
Bioinformatics — at [climb.ac.uk](https://climb.ac.uk). Built with Jekyll,
deployed to GitHub Pages via GitHub Actions.

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. If the `github-pages` gem version clashes
with your local Ruby, switch the `Gemfile` to a plain `jekyll` install.

## Structure

```
_config.yml              Site settings, nav menu and org details
Gemfile                  github-pages gem (matches GitHub's build servers)
.github/workflows/pages.yml  Build & deploy to GitHub Pages on push to main
_layouts/                default, home, page, post, blog
_includes/               head.html, header.html, footer.html
assets/css/style.css     Design system — CSS variables at the top (brand navy #08204A)
assets/js/main.js        Light/dark theme toggle + mobile nav
assets/img/              Logos (climb-logo-white.svg for dark, climb-logo-blue.svg for light)
index.md                 Homepage
about/                   Mission, history, team, citation, terms, privacy
pricing/                 Trial / research / training / surveillance
getting-started/         Registration, authentication, Bryn
docs/                    Landing page linking out to docs.climb.ac.uk + case studies
support/, contact/       Support hub and contact page
blog/ + _posts/          News listing and posts
```

## Editing

- **Navigation** — edit `nav:` in `_config.yml`.
- **Colours / type / spacing** — edit the CSS custom properties at the top
  of `assets/css/style.css`.
- **News post** — add `_posts/YYYY-MM-DD-slug.md` with front matter
  (`title`, `date`, `category`, `author`). It appears automatically in
  `/blog/`, the homepage teaser and `feed.xml`.

## Notes

- Technical/user documentation lives separately at
  [docs.climb.ac.uk](https://docs.climb.ac.uk); this site links out instead
  of duplicating it.
- `__texts/` and `__misc/` are source material (excluded from the build).
- Search for `MAINTAINER NOTE` for content that still needs real input
  (team bios, paid-tier pricing numbers, citation DOI, community links,
  case-study sign-off).# Bioinfo-skills-2022-CLIMB-VM.github.io
