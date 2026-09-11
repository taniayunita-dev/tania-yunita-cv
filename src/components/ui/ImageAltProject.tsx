// Palet warna senada aksen ungu portofolio (bisa ditambah ramp lain)
const PALETTES: readonly [string, string, string, string][] = [
    ["#EEEDFE", "#CECBF6", "#AFA9EC", "#7F77DD"], // purple
    ["#E1F5EE", "#9FE1CB", "#5DCAA5", "#1D9E75"], // teal
    ["#FAECE7", "#F5C4B3", "#F0997B", "#D85A30"], // coral
    ["#FBEAF0", "#F4C0D1", "#ED93B1", "#D4537E"], // pink
];

interface PatternParams {
    palette: readonly [string, string, string, string];
    circle1: { cx: number; cy: number; r: number; };
    circle2: { cx: number; cy: number; r: number; };
    rectRotate: number;
    rectX: number;
    rectY: number;
}

interface AbstractPatternFallbackProps {
    title?: string;
}

// Hash sederhana dari string -> angka, dipakai sebagai seed
function hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

// Generate parameter shape (posisi, ukuran, rotasi) dari seed,
// supaya konsisten setiap kali di-render untuk project yang sama.
function getPatternParams(seed: number): PatternParams {
    const rand = (min: number, max: number, offset = 0): number => {
        const x = Math.sin(seed + offset) * 10000;
        const frac = x - Math.floor(x);
        return min + frac * (max - min);
    };

    return {
        palette: PALETTES[seed % PALETTES.length],
        circle1: { cx: rand(20, 60, 1), cy: rand(15, 45, 2), r: rand(14, 26, 3) },
        circle2: { cx: rand(220, 280, 4), cy: rand(90, 130, 5), r: rand(20, 34, 6) },
        rectRotate: rand(-30, 30, 7),
        rectX: rand(120, 170, 8),
        rectY: rand(10, 40, 9),
    };
}

export function AbstractPatternFallback({
    title = "",
}: AbstractPatternFallbackProps) {
    const seed = hashString(title || "project");
    const p = getPatternParams(seed);
    const [bg, c1, c2, c3] = p.palette;

    return (
        <svg
            viewBox="0 0 300 140"
            className="h-full w-full transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transition-none"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label={title ? `Ilustrasi untuk ${title}` : "Ilustrasi project"}
        >
            <rect width="300" height="140" fill={bg} />
            <circle cx={p.circle1.cx} cy={p.circle1.cy} r={p.circle1.r} fill={c1} />
            <circle
                cx={p.circle2.cx}
                cy={p.circle2.cy}
                r={p.circle2.r}
                fill={c2}
                opacity="0.6"
            />
            <rect
                x={p.rectX}
                y={p.rectY}
                width="90"
                height="90"
                rx="12"
                fill={c3}
                opacity="0.35"
                transform={`rotate(${p.rectRotate} ${p.rectX + 45} ${p.rectY + 45})`}
            />
        </svg>
    );
}