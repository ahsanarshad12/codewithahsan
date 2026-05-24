import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Ahsan Arshad | Frontend Developer',
  description:
    'Essays and tutorials on frontend development, React, Next.js, performance, and design-to-code workflows by Ahsan Arshad.',
  openGraph: {
    title: 'Blog — Ahsan Arshad | Frontend Developer',
    description:
      'Essays and tutorials on frontend development, React, Next.js, and performance by Ahsan Arshad.',
    url: 'https://ahsanarshad.dev/blog',
  },
}

function BackgroundPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
      backgroundSize: '32px 32px',
    }} />
  )
}

function PostCard({
  post,
}: {
  post: ReturnType<typeof getAllPosts>[number]
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="relative overflow-hidden rounded-2xl border border-border bg-card hover:border-accent/40 transition-all duration-500 h-full flex flex-col"
        style={{
          background: `radial-gradient(ellipse at 60% 0%, color-mix(in srgb, ${post.coverGradient.includes('blue') ? '#2563EB' : post.coverGradient.includes('emerald') ? '#10B981' : '#F59E0B'} 8%, transparent 60%), white 0%)`,
        }}
      >
        {/* Cover area */}
        <div className="h-40 md:h-48 relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${post.coverGradient} opacity-10`}
          />
          <span className="absolute top-4 left-4 font-body text-[10px] text-white/90 uppercase tracking-[0.15em] px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <span className="font-body text-xs text-accent uppercase tracking-wide mb-2">
            {post.date}
          </span>
          <h2 className="font-display font-bold text-ink text-xl md:text-2xl leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
            {post.title}
          </h2>
          <p className="font-body text-sm text-muted leading-relaxed mb-5 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="font-body text-xs text-muted">{post.readTime}</span>
            <span className="font-body text-sm text-accent flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
              Read
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <BackgroundPattern />
        <div className="max-w-7xl mx-auto px-6 relative">
          <span className="font-body text-xs tracking-[0.3em] text-muted uppercase block mb-4">
            Blog
          </span>
          <h1
            className="font-display font-bold text-ink leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
          >
            WRITING &amp;<br />
            <span className="text-accent italic"> Reflections</span>
          </h1>
          <p className="font-body text-muted text-base md:text-lg max-w-xl leading-relaxed">
            Thoughts on frontend development, design-to-code workflows, performance,
            and the craft of building products that users actually enjoy using.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
