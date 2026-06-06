'use client'

import { motion } from 'framer-motion'

const stacks = [
  {
    name: 'React.js',
    category: 'Frontend Library',
    color: '#61DAFB',
    description: 'Component-based UI library for building interactive, scalable user interfaces.',
  },
  {
    name: 'Next.js',
    category: 'Meta-Framework',
    color: '#FFFFFF',
    description: 'React framework for SSR, SSG, and full-stack production applications.',
  },
  {
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    color: '#38BDF8',
    description: 'Utility-first CSS framework for rapid UI development and design systems.',
  },
  {
    name: 'Laravel',
    category: 'Backend Framework',
    color: '#FF2D20',
    description: 'PHP framework for clean API architecture, auth, and database management.',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    color: '#3178C6',
    description: 'Strongly-typed JavaScript for safer, more maintainable code.',
  },
  {
    name: 'Figma',
    category: 'Design Tool',
    color: '#F24E1E',
    description: 'UI/UX design and prototyping — Figma to React with pixel-perfect handoff.',
  },
]

const stackIcons: Record<string, React.ReactNode> = {
  'React.js': (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.499-.054z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  ),
  'Laravel': (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path
        d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.022-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.044-.034h.003L5.044.05a.375.375 0 0 1 .375 0L9.996 2.9h.003c.016.01.03.022.043.034.013.009.026.018.037.027.013.014.022.03.033.045.008.011.019.02.024.033.01.019.016.038.023.058.004.012.012.02.014.032.009.032.014.065.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.012.01-.02.015-.032a.369.369 0 0 1 .022-.058c.005-.013.016-.022.023-.033.01-.016.021-.031.033-.045.012-.01.025-.018.037-.027.014-.012.027-.024.044-.034h.003l4.575-2.83a.375.375 0 0 1 .375 0l4.58 2.78c.016.01.03.022.043.034.012.009.025.018.037.027.013.014.022.03.033.045.008.011.019.02.023.033.01.019.017.038.023.058zm-.74 5.01V6.097l-1.57.907-2.19 1.261v4.336zm-4.755 8.13V14.24l-2.155 1.227-6.154 3.523v4.384zM1.093 3.624v14.588l8.273 4.761v-4.384l-4.322-2.444-.002-.003-.002-.002c-.014-.01-.025-.021-.037-.031-.011-.01-.024-.018-.034-.028l-.002-.003c-.012-.012-.02-.025-.03-.037-.01-.013-.022-.024-.029-.037l-.003-.004c-.008-.014-.013-.029-.019-.043-.006-.014-.014-.027-.018-.043l-.002-.003c-.004-.014-.004-.028-.006-.042-.003-.015-.007-.03-.007-.045v-9.95zm4.951-2.891L1.852 3.016 5.044.78zM8.995 9.908 5.044 7.67 1.852 9.514l3.192-1.843zm11.033-6.891-3.19 2.135 3.19 1.843zM9.37 10.738v8.89l3.76-2.142 2.394-1.365v-8.89zm9.158-5.316-3.19-1.843-3.191 1.843 3.19 1.843z"
        fill="#FF2D20"
      />
    </svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path
        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
        fill="#3178C6"
      />
    </svg>
  ),
  'Figma': (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path
        d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 10.98c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117v-6.038H8.148zm-3.54 2.975c0-2.476 2.014-4.49 4.49-4.49h.147v8.981h-.147c-2.476 0-4.49-2.015-4.49-4.491zm4.49 1.471a3.019 3.019 0 0 1-3.019 3.019A3.019 3.019 0 0 1 5.06 15.48c0-1.665 1.355-3.019 3.019-3.019s3.019 1.354 3.019 3.019v-.054zm3.117 0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49-4.49-2.014-4.49-4.49v-4.49zm4.588 1.471h-3.117v6.038c1.665 0 3.019-1.354 3.019-3.019a3.019 3.019 0 0 0-.981-2.214 3.02 3.02 0 0 0-2.038-.805zm0 0a3.019 3.019 0 1 1 0 6.038 3.019 3.019 0 0 1 0-6.038z"
        fill="#F24E1E"
      />
    </svg>
  ),
}

function TechCard({ stack, i }: { stack: (typeof stacks)[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all duration-500 text-center"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
        style={{ backgroundColor: stack.color }}
      />

      {/* Icon circle */}
      <div
        className="size-16 mx-auto mb-5 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${stack.color}14` }}
      >
        {stackIcons[stack.name]}
      </div>

      <h3 className="font-display font-bold text-white text-xl mb-1">
        {stack.name}
      </h3>
      <p className="font-body text-xs text-white/40 uppercase tracking-wide mb-3">
        {stack.category}
      </p>
      <p className="font-body text-sm text-white/50 leading-relaxed">
        {stack.description}
      </p>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-[#070d18]">
      <div className="w-full max-w-380 mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-[0.3em] text-white/50 font-body uppercase mb-4 block">
            Tech Stack Showcase
          </span>
          <h2
            className="font-display font-bold text-white leading-[0.95]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            TOOLS &amp; TECHNOLOGIES
          </h2>
          <p className="font-body text-white/50 text-base mt-4 max-w-xl mx-auto">
            The tools I work with daily to build fast, maintainable products — visual, quick-reference, and always up to date.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stacks.map((stack, i) => (
            <TechCard key={stack.name} stack={stack} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}