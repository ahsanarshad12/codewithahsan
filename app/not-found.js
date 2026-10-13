import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-paper-texture min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        <span className="tilt-right-sm inline-block bg-[#fbe84c] text-black font-marker text-xs sm:text-sm uppercase tracking-widest px-3 py-1.5 rounded-lg border-2 border-black shadow-cutout mb-5">
          Error 404
        </span>
        <h1 className="font-marker text-4xl sm:text-6xl text-slate-900 leading-tight">
          This page went missing
        </h1>
        <p className="font-doodle text-lg sm:text-2xl font-bold text-slate-600 mt-3">
          The link is broken or the page has moved somewhere else.
        </p>

        <div className="tilt-left-sm bg-white border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card-lift mt-10 text-left">
          <p className="font-mono text-[11px] sm:text-xs text-slate-500 mb-4">
            {"// quick ways back"}
          </p>
          <ul className="space-y-3 text-sm sm:text-base font-semibold text-slate-700">
            <li>
              <span className="text-brand-purple font-bold">01.</span>{" "}
              <Link
                className="underline decoration-wavy decoration-2 hover:text-brand-purple"
                href="/"
              >
                Back to the homepage
              </Link>
            </li>
            <li>
              <span className="text-brand-purple font-bold">02.</span>{" "}
              <Link
                className="underline decoration-wavy decoration-2 hover:text-brand-purple"
                href="/#projects"
              >
                See selected work
              </Link>
            </li>
            <li>
              <span className="text-brand-purple font-bold">03.</span>{" "}
              <Link
                className="underline decoration-wavy decoration-2 hover:text-brand-purple"
                href="/#contact"
              >
                Send me a message
              </Link>
            </li>
          </ul>
        </div>

        <Link
          className="btn-spring inline-flex items-center gap-2 bg-[#fbe84c] text-black font-black px-6 py-3 rounded-full border-2 border-black shadow-cutout hover:shadow-cutout-lg transition-all mt-10"
          href="/"
        >
          {"← Back to home"}
        </Link>
      </div>
    </main>
  );
}
