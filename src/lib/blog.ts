export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  coverGradient: string
  content: Section[]
}

export interface Section {
  type: 'h2' | 'h3' | 'paragraph' | 'code' | 'list' | 'callout' | 'divider'
  text?: string
  items?: string[]
  lang?: string
}

const posts: BlogPost[] = [
  {
    slug: 'building-a-frontend-journey',
    title: 'Building a Foundation: My Frontend Journey',
    excerpt:
      'How I went from curiosity to production-ready React code lessons, tools, and the mindset shift that mattered most.',
    date: 'Jul 26, 2025',
    readTime: '6 min read',
    category: 'Journey',
    coverGradient: 'from-blue-600 via-indigo-500 to-purple-600',
    content: [
      { type: 'h2', text: 'Where It Started' },
      {
        type: 'paragraph',
        text: 'My first encounter with web development wasn\'t in a classroom it was in a browser, staring at an inspect-element panel, wondering how buttons became real. That curiosity stayed with me. I started with HTML and CSS, building tiny pages just to see what was possible, and slowly the pieces started fitting together.',
      },
      {
        type: 'paragraph',
        text: 'The turning point came when I built my first React component. Suddenly, building UI wasn\'t the tedious page-by-page grind I\'d imagined it felt like putting together a set of well-designed LEGO pieces. That moment hooked me.',
      },
      { type: 'divider' },
      { type: 'h2', text: 'The Learning Curve' },
      {
        type: 'paragraph',
        text: 'Between my first "Hello World" and shipping production code, I went through a lot of trial, a lot of error, and a lot of Stack Overflow. Here are the things I kept coming back to:',
      },
      {
        type: 'list',
        items: [
          'Build tiny things first don\'t jump to enterprise patterns.',
          'Read other people\'s code open-source projects are the best textbooks.',
          'Ship broken things perfectionism makes you research in circles.',
          'Learn to debug the console message is trying to help you.',
        ],
      },
      { type: 'divider' },
      { type: 'h2', text: 'Tools That Stuck' },
      {
        type: 'paragraph',
        text: 'Somewhere along the way, certain tools kept showing up in my daily workflow, and I haven\'t looked back. React and Next.js for component architecture, Tailwind CSS for styling speed, TypeScript for catching bugs before they happen.',
      },
      {
        type: 'paragraph',
        text: 'Every new project is still a chance to learn something. The goal isn\'t to know everything it\'s to know enough to figure out what comes next.',
      },
    ],
  },
  {
    slug: 'from-figma-to-react-workflow',
    title: 'From Figma to React: A Real-World Workflow',
    excerpt:
      'A practical walkthrough of my design-to-code process how I go from Figma files to pixel-perfect React components fast.',
    date: 'Aug 19, 2025',
    readTime: '8 min read',
    category: 'Tutorial',
    coverGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    content: [
      {
        type: 'h2',
        text: 'Why Figma → Code Still Matters',
      },
      {
        type: 'paragraph',
        text: 'In an era of AI code generation, the Figma-to-code workflow remains uniquely valuable not because it\'s automated, but because it forces you to make decisions. Colors, spacing, states, breakpoints every choice is intentional, and that intentionality shows in the interface.',
      },
      { type: 'h2', text: 'My Step-by-Step Process' },
      {
        type: 'h3',
        text: '1. Frame & Flatten',
      },
      {
        type: 'paragraph',
        text: 'Before writing a single line of code, I inspect the Figma frame. I look at typography scale, spacing tokens (are 8px multiples being used?), border radii, and shadow treatment. If the design uses auto-layout, I check the constraints it tells me how components are supposed to resize.',
      },
      {
        type: 'h3',
        text: '2. Extract the Token System',
      },
      {
        type: 'paragraph',
        text: 'I build a small design-token file before touching a component. Colors, fonts, spacing, and border-radius values get documented first. This eliminates guesswork and keeps the code aligned with the design intent from the start.',
      },
      {
        type: 'code',
        lang: 'ts',
        text: `const tokens = {
  colors: {
    primary: '#2563EB',
    ink: '#1A1A1A',
    muted: '#6B6B6B',
    border: 'oklch(0.92 0 0)',
  },
  spacing: { sm: 8, md: 16, lg: 24, xl: 32 },
  radius: { sm: 6, md: 8, lg: 12 },
}`,
      },
      {
        type: 'h3',
        text: '3. Component-by-Component Assembly',
      },
      {
        type: 'paragraph',
        text: 'I componentize early. If a button appears in a navbar and in a CTA card, it\'s the same React component just with different props. This isn\'t about DRY for its own sake; it\'s about consistency. The same visual element shouldn\'t have different implementations across the same product.',
      },
      {
        type: 'h3',
        text: '4. Responsive Reality-Check',
      },
      {
        type: 'paragraph',
        text: 'Pushing to 375px isn\'t responsive design. Every breakpoint needs a reason: not just adding `md:` but thinking about what actually changes at that breakpoint. Does the layout reflow? Does the navigation go hamburger? Does a multi-column stack collapse?',
      },
      { type: 'divider' },
      { type: 'h2', text: 'The Net Effect' },
      {
        type: 'paragraph',
        text: 'A good Figma-to-code workflow isn\'t about being fast it\'s about building well. The extra time spent at the token and component layer pays for itself the moment you refactor the third variant of the same button.',
      },
    ],
  },
  {
    slug: 'core-web-vitals-that-matter',
    title: 'Core Web Vitals That Actually Move the Needle',
    excerpt:
      "Beyond the Lighthouse score which Core Web Vitals metrics directly impact UX rankings and how to fix them in production.",
    date: 'Sep 12, 2025',
    readTime: '10 min read',
    category: 'Performance',
    coverGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    content: [
      { type: 'h2', text: 'What the Three Vitals Actually Measure' },
      {
        type: 'paragraph',
        text: 'Core Web Vitals are Google\'s attempt to capture what users feel how fast a page loads, how soon it becomes interactive, and how stable its layout stays while loading. They\'re not just SEO signals; they\'re direct UX metrics.',
      },
      {
        type: 'h3',
        text: 'LCP Largest Contentful Paint',
      },
      {
        type: 'paragraph',
        text: 'LCP measures the time until the largest visible element usually a heading or an image is fully rendered. Under 2.5s is "good." If you\'re seeing images or heavy fonts pushing LCP past 4s, start with smarter `<img>` loading: use `fetchpriority="high"` on the hero image and prefetch key fonts.',
      },
      {
        type: 'h3',
        text: 'INP Interaction to Next Paint',
      },
      {
        type: 'paragraph',
        text: 'INP replaced FID because it captures the full range of interactions not just the first click. Slow event handlers, expensive re-renders, and long-running callbacks all contribute. The fix is the same: split event handling from main-thread work via `requestIdleCallback` or Web Workers.',
      },
      {
        type: 'h3',
        text: 'CLS Cumulative Layout Shift',
      },
      {
        type: 'paragraph',
        text: 'CLS is layout jank. Images loading without dimensions, late-rendered content pushing everything down users despise this. The fix is straightforward: set explicit `width` and `height` (or `aspect-ratio`) on every `<img>` and `<iframe>`, and reserve space for injected content using skeleton screens.',
      },
      { type: 'divider' },
      { type: 'h2', text: 'What Actually Moves the Numbers' },
      {
        type: 'list',
        items: [
          'LCP hero image `fetchpriority`, font `font-display: swap`, CDN for static assets',
          'INP split heavy handlers, avoid layout thrashing, use virtualization on long lists',
          'CLS `aspect-ratio` on media, avoid `insertBefore` animation, reserve ad space',
        ],
      },
      {
        type: 'paragraph',
        text: 'The most impactful wins are usually the simplest ones. Reserving image space and splitting a heavy event handler can move all three vitals into "Good" territory without touching your framework or build tooling.',
      },
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return posts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null
  next: BlogPost | null
} {
  const idx = posts.findIndex((p) => p.slug === slug)
  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx < posts.length - 1 ? posts[idx + 1] : null,
  }
}
