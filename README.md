# AI-Powered Social Media Manager — Portfolio

Next.js 14 · React · TypeScript · Tailwind CSS · Lucide icons

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Editing content — one file

All text, links, the follower count and **every asset path** live in `data/portfolio.ts`.
Any `src: ""` shows a styled placeholder with the expected file path, so nothing appears broken while assets are missing.

1. Drop the file into the matching folder under `public/assets/`.
2. Set its `src` in `data/portfolio.ts` to `/assets/<folder>/<file>`.

## Assets you need to provide

| Section | Folder | Files |
|---|---|---|
| Profile | `public/assets/profile/` | `avatar.jpg` |
| Hero collage | `public/assets/hero/` | `content-grid.jpg`, `editing-timeline.jpg`, `script-draft.jpg`, `fashion-visual.jpg` |
| Claude research | `public/assets/claude-research/` | `claude-scriptwriting.png`, `claude-topic-research.png` (your real screenshots) |
| Scripts | `public/assets/scripts/` | `script-breakdown.png` |
| Strategy | `public/assets/strategy/` | `strategy-doc.png`, `visual-reference-board.jpg`, `research-to-script-flow.png` |
| Video project 1 | `public/assets/video-project-1/` | `before.mp4`, `after.mp4`, `before-poster.jpg`, `after-poster.jpg` |
| Video project 2 | `public/assets/video-project-2/` | `before.mp4`, `after.mp4`, `before-poster.jpg`, `after-poster.jpg` |
| AI fashion images | `public/assets/fashion/images/` | `influencer-portrait.jpg`, `influencer-outfit.jpg`, `campaign-moodboard.jpg`, `video-thumbnail.jpg`, `styling-concepts.jpg`, `video-frame.jpg` |
| AI fashion videos | `public/assets/fashion/videos/` | `film-01.mp4`, `influencer-01.mp4`, `campaign-01.mp4` (+ optional posters) |
| Instagram posts | `public/assets/instagram/` | `post-01.jpg` … `post-04.jpg` (+ post URLs) |

Also fill in: `profile.name`, `email`, `instagramUrl`, `instagramHandle`, `linkedinUrl`, the editing project titles/descriptions/improvements, and fashion video descriptions.

**Before/after slider:** appears automatically when both `before.poster` and `after.poster` are set for a project. It compares poster frames only — the real video players stay.

**Videos:** use MP4 (H.264) and keep them compressed (aim for under ~15 MB). Large files can be hosted elsewhere — put the direct URL in `src`. Videos use `preload="none"`, so nothing downloads until play is pressed.

## Contact form

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. a Formspree form URL). Until then, the submit button is disabled and the form says it isn't connected yet.

## Content honesty

The site has no invented clients, view counts or engagement rates in it. Only add figures you can verify (e.g. an Instagram post's `stat` field).
