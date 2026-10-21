# OG RAG Showcase

Recruiter-facing Next.js website for the OG RAG project. The showcase is
separate from the Bun/React RAG application and does not connect to its local
API or require an OpenAI key.

## Development

```bash
bun install --frozen-lockfile
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

To add a recruiter-facing **View source** link, copy `.env.example` to `.env`
and replace its placeholder with the public repository URL. This setting is
optional; without it, the site links directly to the local quick start.
`NEXT_PUBLIC_SITE_URL` is also optional and can override the canonical URL
used in social metadata; Vercel deployment URLs are detected automatically.

## Vercel deployment

1. Import the repository in Vercel.
2. Set **Root Directory** to `showcase`.
3. Keep the detected **Next.js** framework preset.
4. Leave the build command and output directory at their defaults.
5. Optionally add `NEXT_PUBLIC_REPOSITORY_URL` with the public Git repository
   URL so the source CTA is shown. `NEXT_PUBLIC_SITE_URL` can override the
   automatic Vercel URL used for social metadata.
6. Deploy. No environment variables are required for the showcase itself.

The page is statically prerendered by Next.js and is independent of the local
RAG runtime. The actual OG RAG application should continue to run through
Docker because it relies on persistent SQLite, LanceDB, and file storage.
