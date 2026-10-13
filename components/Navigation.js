import ThemeToggle from "./ThemeToggle";
import NavMenu from "./NavMenu";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7f4ec]/90 backdrop-blur-md border-b-2 border-dashed border-slate-300 transition-all">
      <div className="mobile-layout:max-w-7xl mobile-layout:mx-auto mobile-layout:px-3 mobile-layout:sm:px-6 mobile-layout:lg:px-8 mobile-layout:h-16 mobile-layout:sm:h-20 mobile-layout:flex mobile-layout:items-center mobile-layout:justify-between desktop-layout:max-w-7xl desktop-layout:mx-auto desktop-layout:px-4 desktop-layout:sm:px-6 desktop-layout:lg:px-8 desktop-layout:h-20 desktop-layout:flex desktop-layout:items-center desktop-layout:justify-between">
        {"\n"}
        <a
          aria-label="Ahsan Developer Portfolio Home"
          className="group flex items-center gap-2"
          href="#"
        >
          {"\n"}
          <div className="mobile-layout:bg-brand-purple mobile-layout:text-white mobile-layout:px-2.5 mobile-layout:py-1 mobile-layout:sm:px-3 mobile-layout:sm:py-1.5 mobile-layout:rounded-lg mobile-layout:border-2 mobile-layout:border-black mobile-layout:font-black mobile-layout:text-xl mobile-layout:sm:text-2xl mobile-layout:tracking-tight mobile-layout:shadow-cutout mobile-layout:group-hover:rotate-2 mobile-layout:transition-transform desktop-layout:bg-brand-purple desktop-layout:text-white desktop-layout:px-3 desktop-layout:py-1.5 desktop-layout:rounded-lg desktop-layout:border-2 desktop-layout:border-black desktop-layout:font-black desktop-layout:text-2xl desktop-layout:tracking-tight desktop-layout:shadow-cutout desktop-layout:group-hover:rotate-2 desktop-layout:transition-transform">
            {"\n  AHSAN.\n"}
          </div>
          {"\n"}
          <span className="mobile-layout:font-doodle mobile-layout:text-sm mobile-layout:sm:text-xl mobile-layout:font-bold mobile-layout:text-brand-purple mobile-layout:block mobile-layout:transition-transform mobile-layout:duration-300 mobile-layout:group-hover:translate-x-1 desktop-layout:font-doodle desktop-layout:text-xl desktop-layout:font-bold desktop-layout:text-brand-purple desktop-layout:hidden desktop-layout:sm:inline-block desktop-layout:transition-transform desktop-layout:duration-300 desktop-layout:group-hover:translate-x-1">
            {"frontend wizard ~"}
          </span>
          {"\n"}
        </a>
        {"\n"}
        <nav className="hidden md:flex items-center space-x-7 font-bold text-sm tracking-wide text-slate-700">
          {"\n"}
          <a
            className="hover:text-brand-purple hover:underline decoration-wavy decoration-2 transition"
            href="#about"
          >
            {"About"}
          </a>
          {"\n"}
          <a
            className="hover:text-brand-purple hover:underline decoration-wavy decoration-2 transition"
            href="#projects"
          >
            {"Selected Work"}
          </a>
          {"\n"}
          <a
            className="hover:text-brand-purple hover:underline decoration-wavy decoration-2 transition"
            href="#skills"
          >
            {"Skills"}
          </a>
          {"\n"}
          <a
            className="hover:text-brand-purple hover:underline decoration-wavy decoration-2 transition"
            href="#journey"
          >
            {"The Path"}
          </a>
          {"\n"}
          <a
            className="hover:text-brand-purple hover:underline decoration-wavy decoration-2 transition"
            href="#services"
          >
            {"Services"}
          </a>
          {"\n"}
          <a
            className="hover:text-brand-purple hover:underline decoration-wavy decoration-2 transition"
            href="#contact"
          >
            {"Contact"}
          </a>
          {"\n"}
        </nav>
        {"\n"}
        <div className="mobile-layout:flex mobile-layout:items-center mobile-layout:gap-2 desktop-layout:flex desktop-layout:items-center desktop-layout:gap-3">
          {"\n"}
          <ThemeToggle />
          {"\n"}
          <a
            className="btn-spring mobile-layout:inline-flex mobile-layout:items-center mobile-layout:gap-1.5 mobile-layout:bg-[#fbe84c] mobile-layout:text-black mobile-layout:font-extrabold mobile-layout:px-3.5 mobile-layout:py-2 mobile-layout:sm:px-5 mobile-layout:sm:py-2.5 mobile-layout:rounded-full mobile-layout:border-2 mobile-layout:border-black mobile-layout:shadow-cutout mobile-layout:hover:shadow-cutout-lg mobile-layout:text-xs mobile-layout:sm:text-sm mobile-layout:transition-all desktop-layout:inline-flex desktop-layout:items-center desktop-layout:gap-2 desktop-layout:bg-[#fbe84c] desktop-layout:text-black desktop-layout:font-extrabold desktop-layout:px-5 desktop-layout:py-2.5 desktop-layout:rounded-full desktop-layout:border-2 desktop-layout:border-black desktop-layout:shadow-cutout desktop-layout:hover:shadow-cutout-lg desktop-layout:transition-all"
            href="#contact"
          >
            {"\n"}
            <span>{"Let's Talk"}</span>
            {"\n"}
            <svg
              className="mobile-layout:w-3.5 mobile-layout:h-3.5 mobile-layout:stroke-[3] mobile-layout:transition-transform mobile-layout:duration-300 mobile-layout:group-hover:translate-x-1 desktop-layout:w-4 desktop-layout:h-4 desktop-layout:stroke-[3] desktop-layout:transition-transform desktop-layout:duration-300 desktop-layout:group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {"\n"}
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              {"\n"}
            </svg>
            {"\n"}
          </a>
          {"\n"}
          <NavMenu />
          {"\n"}
        </div>
        {"\n"}
      </div>
    </header>
  );
}
