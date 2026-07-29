# CV Site

Personal CV website with Supabase backend. Beautiful block-based UI for visitors, inline editing for you, and a separate PDF download.

## Stack

- React + Vite + TypeScript
- Tailwind CSS
- Supabase (CV data + PDF storage + auth)

## Quick start

```bash
cd cv-site
npm install
cp .env.example .env   # fill in Supabase credentials
npm run dev
```

Without Supabase configured, the app runs with default placeholder data locally.

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com)
2. Run SQL from `supabase/schema.sql` in the SQL Editor
3. Create a user: Authentication → Users → Add user (email + password)
4. Create storage bucket `cv-files` (public) and upload `resume.pdf`
5. Copy project URL and anon key to `.env`

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

6. Seed CV data: open the site, sign in, edit content, click Save

## Usage

| Action | Who |
|--------|-----|
| View CV | Everyone |
| Download PDF | Everyone (from Supabase Storage) |
| Edit content | You (sign in via Edit button) |

## Project structure

```
src/
├── components/
│   ├── blocks/       # Hero, About, Experience, Skills, Education
│   ├── layout/       # Toolbar
│   ├── auth/         # Login modal
│   └── ui/           # EditableText, Tag, SectionCard
├── data/             # Default CV content
├── hooks/            # useCv, useAuth
├── lib/              # Supabase client
└── types/            # CV types
```

## Deploy

```bash
npm run build
```

Deploy `dist/` to Vercel, Netlify, or any static host. Add env variables in the hosting dashboard.
