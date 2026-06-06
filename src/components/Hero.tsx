"use client";
import { useEffect, useRef } from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel, SiGraphql, SiGit } from "react-icons/si";

const leftCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" className="w-[18px] h-[18px]">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Next.js App Router",
    desc: "Server components, streaming, layouts and advanced routing patterns for maximum performance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" className="w-[18px] h-[18px]">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Pixel-Perfect UI",
    desc: "Tailwind CSS, Framer Motion, fully responsive designs that look stunning on every device.",
  },
];

const rightCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" className="w-[18px] h-[18px]">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Core Web Vitals",
    desc: "Lighthouse 95+, optimized LCP, zero CLS, blazing fast TTI on every project.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "API Integration",
    desc: "REST, GraphQL, Prisma, Supabase and headless CMS — connected and ready to scale.",
  },
];

const techIcons = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiVercel, label: "Vercel" },
  { icon: SiGraphql, label: "GraphQL" },
  { icon: SiGit, label: "Git" },
];

const SPEED = 0.055; // arc traverse per second
const EDGE = 0.08;  // fade zone fraction

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const arcSvgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rafPts = useRef(0);
  const rafOrbit = useRef(0);

  /* ── Arc SVG: single half-arc, always full screen width at vertical center ── */
  useEffect(() => {
    const svg = arcSvgRef.current;
    if (!svg) return;

    const draw = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      const heroRect = heroRef.current?.getBoundingClientRect();
      const heroW = heroRect?.width ?? W;
      const heroH = heroRect?.height ?? H;
      const titleRect = titleRef.current?.getBoundingClientRect();
      const titleY = titleRect && heroRect ? titleRect.top - heroRect.top : heroH * 0.24;
      const cx = heroW / 2;
      const r = heroW / 2;
      const cy = titleY + r;
      svg.setAttribute("viewBox", `0 0 ${heroW} ${heroH}`);
      const arcPath = `M 0 ${cy} A ${r} ${r} 0 0 1 ${heroW} ${cy}`;
      const fillPath = `M 0 ${cy} A ${r} ${r} 0 0 1 ${heroW} ${cy} L ${heroW} ${heroH} L 0 ${heroH} Z`;

      svg.innerHTML = `
        <defs>
          <radialGradient id="arcGlow" cx="50%" cy="100%" r="60%">
            <stop offset="0%"   stop-color="#38bdf8" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <path d="${fillPath}" fill="url(#arcGlow)" />
        <path d="${arcPath}"  fill="none" stroke="rgba(56,189,248,0.30)" stroke-width="1.2" />
      `;
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  /* ── Icons: continuous left → right flow along top-half arc ── */
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const chips = Array.from(wrap.querySelectorAll<HTMLDivElement>(".icon-chip"));
    const count = chips.length;
    const progresses = chips.map((_, i) => i / count);
    let lastTs: number | null = null;

    const resize = () => {
      const heroRect = heroRef.current?.getBoundingClientRect();
      wrap.style.width = `${heroRect?.width ?? window.innerWidth}px`;
      wrap.style.height = `${heroRect?.height ?? window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const W = window.innerWidth;
      const H = window.innerHeight;
      const heroRect = heroRef.current?.getBoundingClientRect();
      const heroW = heroRect?.width ?? W;
      const heroH = heroRect?.height ?? H;
      const titleRect = titleRef.current?.getBoundingClientRect();
      const titleY = titleRect && heroRect ? titleRect.top - heroRect.top : heroH * 0.24;
      const cx = heroW / 2;
      const r = heroW / 2;
      const cy = titleY + r;

      chips.forEach((el, i) => {
        progresses[i] += SPEED * dt;
        if (progresses[i] > 1) progresses[i] -= 1;

        const p = progresses[i];
        // angle π (left) → 2π (right) = top-half arc
        const angle = Math.PI + p * Math.PI;

        // Absolute screen position
        const sx = cx + r * Math.cos(angle);
        const sy = cy + r * Math.sin(angle);

        // As % of wrap (heroW × heroH)
        el.style.left = `${(sx / heroW) * 100}%`;
        el.style.top = `${(sy / heroH) * 100}%`;
        el.style.transform = "translate(-50%, -50%)";

        // Fade near edges
        let opacity = 1;
        if (p < EDGE) opacity = p / EDGE;
        else if (p > 1 - EDGE) opacity = (1 - p) / EDGE;
        el.style.opacity = opacity.toFixed(3);
      });

      rafOrbit.current = requestAnimationFrame(tick);
    };

    rafOrbit.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafOrbit.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0;

    const pts = Array.from({ length: 55 }, () => ({
      x: 0, y: 0, vx: 0, vy: 0, r: 0, phase: Math.random() * Math.PI * 2,
    }));

    const init = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
      pts.forEach((p) => {
        p.x = Math.random() * W; p.y = Math.random() * H;
        p.vx = (Math.random() - 0.5) * 0.3; p.vy = (Math.random() - 0.5) * 0.3;
        p.r = Math.random() * 1.3 + 0.4;
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        const a = 0.18 + 0.18 * Math.sin(t * 0.001 + p.phase);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${a})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 110) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${0.065 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      rafPts.current = requestAnimationFrame(draw);
    };

    init();
    rafPts.current = requestAnimationFrame(draw);
    const ro = new ResizeObserver(init);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(rafPts.current); ro.disconnect(); };
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative w-full min-h-[calc(100vh-4rem)] bg-[#070d18] overflow-hidden flex flex-col items-center pt-20 md:pt-24">

      {/* Particle canvas — hero section background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Arc SVG — hero section background, desktop only */}
      <svg
        ref={arcSvgRef}
        className="absolute inset-0 pointer-events-none z-0 hidden md:block"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Icon orbit wrap — hero section background, desktop only */}
      <div
        ref={wrapRef}
        className="absolute inset-0 pointer-events-none z-[2] hidden md:block"
      >
        {techIcons.map((ic, i) => (
          <div
            key={ic.label}
            className="icon-chip absolute flex items-center justify-center rounded-full text-white"
            style={{
              width: 40,
              height: 40,
              fontSize: 18,
              transform: "translate(-50%, -50%)",
              background: "rgba(56,189,248,0.18)",
              border: "1px solid rgba(56,189,248,0.3)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 0 20px rgba(56,189,248,0.18)",
              animation: `iconGlow 3s ease-in-out ${i * 0.38}s infinite`,
            }}
            title={ic.label}
          >
            <ic.icon className="h-5 w-5" />
          </div>
        ))}
      </div>

      {/* ── PAGE CONTENT ── */}
      <div className="relative z-10 w-full max-w-380 mx-auto px-4 lg:px-12 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">

        {/* Badge + Heading + Subtitle + Buttons */}
        <div className="flex flex-col items-center text-center gap-5 mb-12 max-w-3xl w-full">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
            style={{
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.2)",
              color: "#38bdf8",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            Frontend · Next.js Developer
          </div>

          <h1
            ref={titleRef}
            className="text-2xl xl:text-6xl font-black leading-[1.08] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", color: "#f0f6ff" }}
          >
            Building Fast,{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#38bdf8,#818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beautiful
            </span>{" "}
            Web Experiences
          </h1>

          <p
            className="text-[14px] xl:text-lg max-w-xl"
            style={{ color: "rgba(226,232,240,0.5)", fontFamily: "'DM Sans', sans-serif", }}
          >

            I turn complex ideas into clean, fast interfaces the kind users actually enjoy using. From pixel perfect layouts to smooth interactions, I build frontend experiences that feel right.

          </p>

          <div className="flex gap-3 mt-1">
            <button
              className="px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
                color: "#070d18",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 0 28px rgba(56,189,248,0.35)",
              }}
            >
              View My Work
            </button>
            <button
              className="px-7 py-3 rounded-xl text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#e2e8f0",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Left cards | Center image | Right cards */}
        <div className="w-full flex items-start justify-center gap-8 xl:gap-12">

          {/* LEFT CARDS — hidden on tablet/mobile */}
          <div className="hidden lg:flex flex-col gap-5 w-full lg:max-w-80 shrink-0 pb-6">
            {leftCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "transparent",
                  border: "none",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.18)" }}
                >
                  {c.icon}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>{c.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(226,232,240,0.42)", fontFamily: "'DM Sans', sans-serif" }}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE — hidden on mobile */}
          {/* <div
            className="relative hidden sm:flex items-center justify-center shrink-0"
            style={{ width: "clamp(240px,30vw,400px)", height: "clamp(240px,30vw,400px)" }}
          >
           
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
              <img
                src="/main-image.png"
                alt="Developer workspace"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(1.1) brightness(1.05)" }}
              />
            </div>
          </div> */}
          <div
            className="relative hidden sm:flex items-end justify-center shrink-0"
            style={{ width: "clamp(290px,45vw,550px)", height: "clamp(220px,40vw,480px)" }}
          >
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
              <video
                src="/product-intro.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-bottom rounded-2xl"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
          </div>

          {/* RIGHT CARDS — hidden on tablet/mobile */}
          <div className="hidden lg:flex flex-col gap-5 w-full lg:max-w-80 shrink-0 pb-6">
            {rightCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "transparent",
                  border: "none",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.18)" }}
                >
                  {c.icon}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>{c.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(226,232,240,0.42)", fontFamily: "'DM Sans', sans-serif" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>


      </div>

      <style>{`
        @keyframes floatY   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes cpulse   { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.5);box-shadow:0 0 18px 6px rgba(56,189,248,.8)} }
        @keyframes dashMove { to{stroke-dashoffset:-40} }
        @keyframes iconGlow { 0%,100%{opacity:.6;box-shadow:none} 50%{opacity:1;box-shadow:0 0 12px rgba(56,189,248,.5)} }
      `}</style>
    </section>
  );
}