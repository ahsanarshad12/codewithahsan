import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Calendar, Clock, ArrowRight } from 'lucide-react'
import { getPostBySlug, getAllPosts, getAdjacentPosts } from '@/lib/blog'

// ── helpers ──────────────────────────────────────────────────────────────

function SectionBody({
  section,
  index,
}: {
  section: NonNullable<Awaited<ReturnType<typeof getPostBySlug>>>['content'][number]
  index: number
}) {
  if (section.type === 'h2')
    return (
      <h2
        key={index}
        className="font-display font-bold text-ink mt-12 mb-5"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', lineHeight: 1.2 }}
      >
        {section.text}
      </h2>
    )

  if (section.type === 'h3')
    return (
      <h3 key={index} className="font-display font-bold text-ink mt-8 mb-3 text-lg">
        {section.text}
      </h3>
    )

  if (section.type === 'paragraph')
    return (
      <p key={index} className="font-body text-muted text-base md:text-lg leading-relaxed mb-6">
        {section.text}
      </p>
    )

  if (section.type === 'code' && section.lang)
    return (
      <div key={index} className="mb-6">
        <div className="flex items-center justify-between px-4 py-2 bg-ink rounded-t-xl">
          <span className="font-body text-xs text-cream/40">{section.lang}</span>
        </div>
        <pre className="bg-[#111827] text-[#E5E7EB] font-mono text-sm leading-relaxed overflow-x-auto px-6 py-5 rounded-b-xl border border-t-0 border-border">
          <code>{section.text}</code>
        </pre>
      </div>
    )

  if (section.type === 'callout')
    return (
      <div
        key={index}
        className="my-8 p-6 md:p-8 rounded-2xl border border-accent/25 bg-accent/5"
      >
        <p className="font-body text-ink text-base leading-relaxed italic">
          {section.text}
        </p>
      </div>
    )

  if (section.type === 'divider')
    return <hr key={index} className="my-10 border-border" />

  if (section.type === 'list' && section.items)
    return (
      <ul key={index} className="space-y-3 mb-6">
        {section.items.map((item, j) => (
          <li key={j} className="flex items-start gap-3 font-body text-muted text-base md:text-lg leading-relaxed">
            <span className="size-2 rounded-full bg-accent mt-2.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    )

  return null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} — Ahsan Arshad`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://ahsanarshad.dev/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

// ── page ─────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const { prev, next } = getAdjacentPosts(slug)

  return (
    <article className="min-h-screen bg-background">
      {/* ── Cover ── */}
      <section className="relative pt-28 md:pt-36 pb-8 md:pb-14 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, transparent 30%, ${post.coverGradient.includes('blue') ? '#2563EB' : post.coverGradient.includes('emerald') ? '#10B981' : '#F59E0B'} 120%)`,
          }}
        />
        <div className="max-w-3xl mx-auto px-6 relative">
          <nav className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="size-4" />
              All Articles
            </Link>
          </nav>

          {/* Category + date */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-body text-xs text-accent uppercase tracking-[0.15em] px-3 py-1 rounded-full bg-accent/10 font-semibold">
              {post.category}
            </span>
            <span className="font-body text-xs text-muted flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              {post.date}
            </span>
            <span className="font-body text-xs text-muted flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display font-bold text-ink leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="font-body text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-t border-border pt-10 md:pt-14">
            {post.content.map((section, i) => (
              <SectionBody key={i} section={section} index={i} />
            ))}
          </div>

          {/* ── Author card ── */}
          <div className="mt-14 md:mt-16 p-6 md:p-8 rounded-2xl bg-ink border border-border">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-cream text-lg">AA</span>
              </div>
              <div>
                <p className="font-body text-xs text-cream/40 uppercase tracking-wider mb-1">
                  Written by
                </p>
                <h3 className="font-display font-bold text-cream text-lg mb-1">
                  Ahsan Arshad
                </h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed">
                  Frontend developer at G-Tech Solutions. Building fast, accessible,
                  and intentionally designed web applications in Rahim Yar Khan, Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Read Next ── */}
      <section className="pb-24 md:pb-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="pt-14 md:pt-20">
            <span className="font-body text-xs tracking-[0.3em] text-muted uppercase block mb-8">
              Continue reading
            </span>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Prev */}
              <div>
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group flex flex-col p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300"
                  >
                    <span className="font-body text-[10px] text-muted uppercase tracking-[0.2em] mb-2">
                      &larr; Previous
                    </span>
                    <h3 className="font-display font-bold text-ink text-lg md:text-xl leading-snug group-hover:text-accent transition-colors">
                      {prev.title}
                    </h3>
                  </Link>
                ) : (
                  <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-transparent opacity-40">
                    <span className="font-body text-xs text-muted">&larr; No previous article</span>
                  </div>
                )}
              </div>
              {/* Next */}
              <div>
                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group flex flex-col p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300"
                  >
                    <span className="font-body text-[10px] text-muted uppercase tracking-[0.2em] mb-2">
                      Next &rarr;
                    </span>
                    <h3 className="font-display font-bold text-ink text-lg md:text-xl leading-snug group-hover:text-accent transition-colors">
                      {next.title}
                    </h3>
                    <span className="font-body text-xs text-accent flex items-center gap-1 mt-3 group-hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                ) : (
                  <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-transparent opacity-40">
                    <span className="font-body text-xs text-muted">&rarr; No next article</span>
                  </div>
                )}
              </div>
            </div>

            {/* Back to list */}
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-accent transition-colors"
              >
                <ArrowLeft className="size-4" />
                View all articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
