// Components/theme.ts
export const tokens = {
    light: {
        bg: "bg-gradient-to-br from-slate-50 to-white",
        card: "bg-white",
        text: "text-slate-900",
        sub: "text-slate-600",
        accent: "bg-[#023D8A]",
        accentText: "text-white",
        border: "border-slate-200/60",
        glow: "bg-blue-500/5",
        badge: "bg-white/80 border border-slate-200",
    },
    dark: {
        bg: "bg-gradient-to-br from-black to-gray-950",
        card: "bg-gray-900",
        text: "text-white/90",
        sub: "text-white/60",
        accent: "bg-[#409775]",
        accentText: "text-black",
        border: "border-white/10",
        glow: "bg-teal-500/10",
        badge: "bg-white/10 border border-white/10",
    },
} as const;