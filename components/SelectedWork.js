import WorkSlider from "./WorkSlider";

const defaultProjects = [
  {
  id: 1,
  number: "1.",
  numberColor: "text-indigo-300",
  tilt: "tilt-right-sm",
  tapeTilt: "tilt-right-md",
  image: "/projects/gtechsol.png",
  imageAlt: "G-Tech Solutions Website",
  category: "IT Services",
  categoryColor: "text-indigo-700",
  title: "G-Tech Solutions",
  description:
    "IT services company providing web development, custom software solutions, and digital technologies to help businesses grow.",
  stack: "Next.js · Tailwind CSS",
  href: "https://gtechsol.com.au/",
},
{
  id: 2,
  number: "2.",
  numberColor: "text-teal-300",
  tilt: "tilt-left-sm",
  tapeTilt: "tilt-left-md",
  image: "/projects/wms.png",
  imageAlt: "Workforce Management System Website",
  category: "Workforce Management",
  categoryColor: "text-teal-700",
  title: "Workforce MS",
  description:
    "Workforce management platform designed to streamline employee scheduling, attendance tracking,.",
  stack: "Next.js · Laravel",
  href: "https://workforcems.com.au/",
},
  {
    id: 3,
    number: "3.",
    numberColor: "text-amber-300",
    tilt: "tilt-left-sm",
    tapeTilt: "tilt-left-sm",
    image: "/projects/speedymove.png",
    imageAlt: "SpeedyMove UI",
    category: "Service & Logistics",
    categoryColor: "text-amber-700",
    title: "SpeedyMove UI",
    description:
      "Multi-step instant cost estimation calculator, route booking, responsive customer feedback widgets, and CRM sync.",
    stack: "TypeScript · Laravel",
    href: "#",
  },
  
{
  id: 4,
  number: "4.",
  numberColor: "text-pink-300",
  tilt: "tilt-right-sm",
  tapeTilt: "tilt-right-md",
  image: "/projects/veltrix.png",
  imageAlt: "Veltrix Website",
  category: "Internet Services Provider Website",
  categoryColor: "text-pink-700",
  title: "Veltrix",
  description:
    "Australian internet service provider offering high-speed NBN and Community Fibre broadband plans for homes and businesses, ",
  stack: "Tailwind CSS . Laravel",
  href: "https://veltrix.gtechservices.com.au/",
},
{
  id: 5,
  number: "5.",
  numberColor: "text-cyan-300",
  tilt: "tilt-left-sm",
  tapeTilt: "tilt-left-md",
  image: "/projects/veganet.png",
  imageAlt: "VEGA Net Website",
  category: "Internet Service Provider",
  categoryColor: "text-cyan-700",
  title: "VEGA Net",
  description:
    "Internet service provider website offering broadband connectivity solutions for homes and businesses.",
  stack: "Laravel · Tailwind CSS",
  href: "https://veganet.gtechservices.com.au/",
},
{
  id: 6,
  number: "6.",
  numberColor: "text-purple-300",
  tilt: "tilt-right-sm",
  tapeTilt: "tilt-right-md",
  image: "/projects/alternameds.png",
  imageAlt: "AlternaMeds Website",
  category: "Healthcare Website",
  categoryColor: "text-purple-700",
  title: "AlternaMeds",
  description:
    "Healthcare website focused on providing accessible medical information and healthcare solutions.",
  stack: "Laravel · Tailwind CSS",
  href: "https://alternameds.gtechservices.com.au/",
},
{
  id: 7,
  number: "7.",
  numberColor: "text-blue-300",
  tilt: "tilt-left-sm",
  tapeTilt: "tilt-left-md",
  image: "/projects/chiro.png",
  imageAlt: "Advance Chiropractic Website",
  category: "Healthcare Website",
  categoryColor: "text-blue-700",
  title: "Advance Chiropractic",
  description:
    "Chiropractic clinic website offering spinal care, pain management, and personalised treatment services.",
  stack: "Next.js · Tailwind CSS",
  href: "https://advance-chiropractic.com.au/",
},
{
  id: 8,
  number: "8.",
  numberColor: "text-green-300",
  tilt: "tilt-right-sm",
  tapeTilt: "tilt-right-md",
  image: "/projects/gsaas.png",
  imageAlt: "GSAAS Website",
  category: "Business Solutions",
  categoryColor: "text-green-700",
  title: "GSAAS",
  description:
    "Business solutions website focused on delivering software services and digital tools to streamline business operations.",
  stack: "Next.js · Tailwind CSS",
  href: "https://gsaas.com.au/",
},
{
  id: 9,
  number: "9.",
  numberColor: "text-orange-300",
  tilt: "tilt-left-sm",
  tapeTilt: "tilt-left-md",
  image: "/projects/goodwillconnect.png",
  imageAlt: "Goodwill Connect Website",
  category: "Community Services",
  categoryColor: "text-orange-700",
  title: "Goodwill Connect",
  description:
    "Community-focused platform connecting people with support services, resources, and opportunities.",
  stack: "Next.js · Tailwind CSS",
  href: "https://goodwillconnect.com.au/",
},
 {
    id: 10,
    number: "10.",
    numberColor: "text-yellow-300",
    tilt: "tilt-left-sm",
    tapeTilt: "tilt-left-sm",
    image: "/projects/digitalbar-cover.png", // public folder ya full URL
    imageAlt: "DigitalBar Website",
    category: "Business Website",
    categoryColor: "text-brand-purple",
    title: "DigitalBar Website",
    description:
      "High-converting corporate portal with modern micro-animations, fast dynamic routing, and responsive booking inquiries.",
    stack: "Next.js · Tailwind",
    href: "https://digitalbar.com.au/",
  },
  {
    id: 11,
    number: "11.",
    numberColor: "text-emerald-300",
    tilt: "tilt-right-sm",
    tapeTilt: "tilt-right-md",
    image: "/projects/partner-gtech.png",
    imageAlt: "G-Tech Partner",
    category: "SaaS Partner Platform",
    categoryColor: "text-emerald-700",
    title: "G-Tech Partner",
    description:
      "Partner onboarding network with role-based auth, dynamic state dashboards, and robust API endpoints.",
    stack: "React.js · Tailwind",
    href: "https://partner.gtechsol.com.au/",
  },
];

function ProjectCard({ project }) {
  return (
    // Wrapper: number ke liye upar space (pt-10) taake slider clip na kare
    <div className="pt-10 sm:pt-12 pb-2">
      <div
        className={`work-poster-card group relative flex flex-col bg-[#fdfbf7] text-slate-900 rounded-2xl border-3 border-black p-4 shadow-2xl ${project.tilt} reveal-on-scroll`}
      >
        {/* Project number - z-20 + origin-bottom-left so hover pe cut na ho */}
        <div
          className={`absolute -top-8 sm:-top-10 left-3 z-20 origin-bottom-left font-doodle text-5xl sm:text-6xl font-black ${project.numberColor} drop-shadow-[2px_2px_0px_#000] group-hover:scale-110 transition-transform`}
        >
          {project.number}
        </div>

        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape ${project.tapeTilt} z-10`}
        ></div>

        {/* Poster - sirf image */}
        <div className="w-full h-40 sm:h-44 rounded-xl border-2 border-black overflow-hidden relative bg-slate-900 mb-3 group-hover:shadow-md transition">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider ${project.categoryColor}`}
            >
              {project.category}
            </span>
            <h3 className="font-black text-xl text-slate-900 group-hover:text-brand-purple transition">
              {project.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-dashed border-slate-300 flex items-center justify-between">
            <span className="font-mono text-[10px] text-slate-500">
              {project.stack}
            </span>
            <a
              className="inline-flex items-center gap-1 font-bold text-xs text-brand-purple hover:underline desktop-layout:hidden"
              href={project.href}
            >
              Visit Site ↗
            </a>
            <span className="inline-flex items-center gap-1 font-bold text-xs text-brand-purple hover:underline mobile-layout:hidden">
              Visit Site ↗
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork({
  projects = defaultProjects,
  heading = "Selected Work",
  subheading = "Hand-crafted production applications built for scale and speed",
  ctaTitle = "Let's create something amazing together!",
  ctaText = "Looking for a Next.js / Frontend Developer to bring designs into reality?",
  ctaLabel = "Start a Conversation →",
  ctaHref = "#contact",
}) {
  return (
    <section
      className="bg-purple-noise text-white pt-10 sm:pt-12 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 relative z-10"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="reveal-on-scroll text-center mb-10 sm:mb-14 relative">
          <div className="inline-block relative">
            <svg
              className="tilt-right-md animate-crown w-9 sm:w-12 h-8 sm:h-10 text-yellow-300 absolute -top-6 sm:-top-8 -right-4 sm:-right-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 36 28"
            >
              <path
                d="M3 24 L7 8 L18 16 L29 8 L33 24 Z"
                fill="rgba(253, 224, 71, 0.3)"
              ></path>
              <circle cx="7" cy="6" fill="#fde047" r="2.5"></circle>
              <circle cx="18" cy="13" fill="#fde047" r="2.5"></circle>
              <circle cx="29" cy="6" fill="#fde047" r="2.5"></circle>
            </svg>
            <h2 className="font-marker text-3xl sm:text-6xl text-white tracking-wide">
              {heading}
            </h2>
          </div>
          <div className="w-44 sm:w-56 mx-auto mt-1 sm:mt-2">
            <svg className="w-full text-white/80" fill="none" viewBox="0 0 200 16">
              <path
                d="M5 8 C 50 1, 150 14, 195 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="3"
              ></path>
              <path
                d="M20 12 C 70 5, 130 15, 180 11"
                stroke="#ffd84d"
                strokeLinecap="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
          <p className="font-doodle text-base sm:text-xl text-purple-200 mt-2">
            {subheading}
          </p>
        </div>

        {/* Slider */}
        <WorkSlider>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </WorkSlider>

        {/* CTA */}
        <div className="reveal-on-scroll mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/30 p-4 sm:p-5 sm:px-8 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="animate-sparkle text-2xl sm:text-3xl">✨</span>
            <div>
              <p className="font-marker text-lg sm:text-2xl text-yellow-300">
                {ctaTitle}
              </p>
              <p className="text-purple-200 text-[11px] sm:text-xs font-mono">
                {ctaText}
              </p>
            </div>
          </div>
          <a
            className="btn-spring bg-yellow-300 text-black font-black px-5 sm:px-6 py-2.5 rounded-full border-2 border-black shadow-cutout transition text-xs sm:text-sm w-full sm:w-auto text-center"
            href={ctaHref}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}