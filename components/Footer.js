export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-black relative overflow-hidden pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {"\n"}
        <div className="mobile-layout:flex mobile-layout:flex-col mobile-layout:md:flex-row mobile-layout:items-center mobile-layout:justify-between mobile-layout:gap-6 mobile-layout:pb-6 mobile-layout:sm:pb-8 mobile-layout:border-b mobile-layout:border-zinc-800 mobile-layout:text-center mobile-layout:sm:text-left desktop-layout:flex desktop-layout:flex-col desktop-layout:md:flex-row desktop-layout:items-center desktop-layout:justify-between desktop-layout:gap-6 desktop-layout:pb-8 desktop-layout:border-b desktop-layout:border-zinc-800">
          {"\n"}
          <div className="flex items-center gap-3">
            {"\n"}
            <div className="mobile-layout:bg-brand-purple mobile-layout:text-white mobile-layout:px-3 mobile-layout:py-1 mobile-layout:rounded-lg mobile-layout:border-2 mobile-layout:border-white mobile-layout:font-black mobile-layout:text-lg mobile-layout:sm:text-xl mobile-layout:shadow-sm desktop-layout:bg-brand-purple desktop-layout:text-white desktop-layout:px-3 desktop-layout:py-1 desktop-layout:rounded-lg desktop-layout:border-2 desktop-layout:border-white desktop-layout:font-black desktop-layout:text-xl desktop-layout:shadow-sm">
              {"\n  AHSAN.\n"}
            </div>
            {"\n"}
            <div>
              {"\n"}
              <p className="mobile-layout:font-bold mobile-layout:text-xs mobile-layout:sm:text-sm mobile-layout:text-zinc-200 desktop-layout:font-bold desktop-layout:text-sm desktop-layout:text-zinc-200">
                {"Frontend & Next.js Developer"}
              </p>
              {"\n"}
              <p className="mobile-layout:text-[10px] mobile-layout:sm:text-xs mobile-layout:text-zinc-500 mobile-layout:font-mono desktop-layout:text-xs desktop-layout:text-zinc-500 desktop-layout:font-mono">
                {"React · Next.js · Tailwind · Laravel"}
              </p>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
          <div className="mobile-layout:flex mobile-layout:flex-wrap mobile-layout:justify-center mobile-layout:gap-4 mobile-layout:sm:gap-6 mobile-layout:font-bold mobile-layout:text-[11px] mobile-layout:sm:text-xs mobile-layout:uppercase mobile-layout:tracking-wider mobile-layout:text-zinc-400 desktop-layout:flex desktop-layout:flex-wrap desktop-layout:justify-center desktop-layout:gap-6 desktop-layout:font-bold desktop-layout:text-xs desktop-layout:uppercase desktop-layout:tracking-wider desktop-layout:text-zinc-400">
            {"\n"}
            <a className="hover:text-yellow-300 transition" href="#hero">
              {"Back to Top ↑"}
            </a>
            {"\n"}
            <a className="hover:text-yellow-300 transition" href="#about">
              {"About"}
            </a>
            {"\n"}
            <a className="hover:text-yellow-300 transition" href="#projects">
              {"Selected Work"}
            </a>
            {"\n"}
            <a className="hover:text-yellow-300 transition" href="#skills">
              {"Skills"}
            </a>
            {"\n"}
            <a className="hover:text-yellow-300 transition" href="#contact">
              {"Contact"}
            </a>
            {"\n"}
          </div>
          {"\n"}
        </div>
        {"\n"}
        <div className="mobile-layout:pt-6 mobile-layout:sm:pt-8 mobile-layout:flex mobile-layout:flex-col mobile-layout:sm:flex-row mobile-layout:items-center mobile-layout:justify-between mobile-layout:gap-4 mobile-layout:text-center mobile-layout:sm:text-left desktop-layout:pt-8 desktop-layout:flex desktop-layout:flex-col desktop-layout:sm:flex-row desktop-layout:items-center desktop-layout:justify-between desktop-layout:gap-4 desktop-layout:text-center desktop-layout:sm:text-left">
          {"\n"}
          <p className="mobile-layout:text-[11px] mobile-layout:sm:text-xs mobile-layout:text-zinc-500 mobile-layout:font-mono desktop-layout:text-xs desktop-layout:text-zinc-500 desktop-layout:font-mono">
            {"\n  AHSAN. © "}
            {new Date().getFullYear()}
            {" · Built with Next.js aesthetic & Tailwind CSS.\n"}
          </p>
          {"\n"}
          <div className="tilt-right-sm mobile-layout:inline-flex mobile-layout:items-center mobile-layout:gap-2 mobile-layout:bg-[#fdfbf7] mobile-layout:text-slate-900 mobile-layout:px-3.5 mobile-layout:py-1 mobile-layout:sm:px-4 mobile-layout:sm:py-1.5 mobile-layout:rounded-xl mobile-layout:border-2 mobile-layout:border-black mobile-layout:font-doodle mobile-layout:text-base mobile-layout:sm:text-lg mobile-layout:font-bold mobile-layout:shadow-cutout mobile-layout:hover:rotate-0 mobile-layout:hover:scale-105 mobile-layout:transition-transform mobile-layout:cursor-pointer desktop-layout:inline-flex desktop-layout:items-center desktop-layout:gap-2 desktop-layout:bg-[#fdfbf7] desktop-layout:text-slate-900 desktop-layout:px-4 desktop-layout:py-1.5 desktop-layout:rounded-xl desktop-layout:border-2 desktop-layout:border-black desktop-layout:font-doodle desktop-layout:text-lg desktop-layout:font-bold desktop-layout:shadow-cutout desktop-layout:hover:rotate-0 desktop-layout:hover:scale-105 desktop-layout:transition-transform desktop-layout:cursor-pointer">
            {"\n"}
            <span>{"Thanks for visiting!"}</span>
            {"\n"}
            <span className="mobile-layout:text-red-500 mobile-layout:text-lg mobile-layout:sm:text-xl mobile-layout:leading-none mobile-layout:animate-pulse desktop-layout:text-red-500 desktop-layout:text-xl desktop-layout:leading-none desktop-layout:animate-pulse">
              {"♥"}
            </span>
            {"\n"}
            <span className="mobile-layout:text-xs mobile-layout:sm:text-sm desktop-layout:text-sm">
              {"📎"}
            </span>
            {"\n"}
          </div>
          {"\n"}
        </div>
        {"\n"}
      </div>
    </footer>
  );
}
