import { ArrowDown, ArrowUpRight } from 'lucide-react';

import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { profile } from '@/features/profile/data/profile.data';
import BGHeroImage from '@/assets/images/tania-yunita-profile.png';
import { useTranslation } from '@/hooks/useTranslation';


const credibilityItems = [
    '3+ Years Experience',
    'React',
    'TypeScript',
    'Responsive UI',
];

export function HeroSection2() {
    const { t } = useTranslation();
    return (
        <section
            aria-labelledby="hero-title"
            className="relative min-h-[calc(100vh-1rem)] overflow-hidden top-0"
        >
            {/* =========================================================
          HERO BACKGROUND
          ========================================================= */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
            >
                <img
                    src={BGHeroImage}
                    alt=""
                    className={[
                        'h-full w-full',
                        'object-cover',
                        'object-center',
                    ].join(' ')}
                />
            </div>

            {/* =========================================================
          BACKGROUND OVERLAY
          Keeps the left side readable while preserving the image.
          ========================================================= */}
            <div
                aria-hidden="true"
                className={[
                    'absolute inset-0',
                    'bg-linear-to-r',
                    'from-background via-background/75 to-transparent',
                    'lg:from-background',
                    'lg:via-background/55',
                    'lg:to-transparent',
                ].join(' ')}
            />

            {/* Very subtle overall wash */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-background/10"
            />

            {/* =========================================================
          DECORATIVE DOTS
          ========================================================= */}
            <div
                aria-hidden="true"
                className="absolute left-8 top-48 hidden sm:block lg:left-10"
            >
                <div className="grid grid-cols-4 gap-x-5 gap-y-4">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-1 w-1 rounded-full bg-accent/60"
                        />
                    ))}
                </div>
            </div>

            {/* =========================================================
          DECORATIVE CURVES
          ========================================================= */}
            <div
                aria-hidden="true"
                className={[
                    'pointer-events-none absolute',
                    '-bottom-[24rem] left-[20%]',
                    'h-[48rem] w-[48rem]',
                    'rounded-full',
                    'border border-accent/10',
                ].join(' ')}
            />

            <div
                aria-hidden="true"
                className={[
                    'pointer-events-none absolute',
                    '-bottom-[20rem] left-[25%]',
                    'h-[40rem] w-[40rem]',
                    'rounded-full',
                    'border border-accent/10',
                ].join(' ')}
            />

            {/* =========================================================
          SMALL DECORATIVE LINE
          ========================================================= */}
            <div
                aria-hidden="true"
                className="absolute bottom-24 left-10 hidden h-24 w-px bg-gradient-to-b from-border to-transparent lg:block"
            />

            <Container className="relative">
                <div className="flex min-h-[calc(100vh-1rem)] items-center">
                    {/* =====================================================
              HERO CONTENT
              ===================================================== */}
                    <div className="relative z-10 w-full max-w-[650px] py-32 sm:py-36 lg:py-40">
                        {/* Eyebrow */}
                        <p className="mb-6 text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                            {profile.role}
                        </p>

                        {/* Headline */}
                        <h1
                            id="hero-title"
                            className={[
                                'max-w-[680px]',
                                'text-4xl font-semibold',
                                'leading-[1.05]',
                                'tracking-[-0.045em]',
                                'text-foreground',
                                'sm:text-5xl',
                                'md:text-6xl',
                                'lg:text-[4.2rem]',
                                'xl:text-[4.6rem]',
                            ].join(' ')}
                        >
                            {t.hero.headline}
                        </h1>

                        {/* Description */}
                        <p
                            className={[
                                'mt-7 max-w-[560px]',
                                'text-base leading-7',
                                'text-muted-foreground',
                                'sm:text-lg sm:leading-8',
                            ].join(' ')}
                        >
                            {profile.description}
                        </p>

                        {/* =================================================
                CTA
                ================================================= */}
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <ButtonLink
                                href="#projects"
                                size="lg"
                                className={[
                                    'group',
                                    'rounded-xl',
                                    'bg-primary',
                                    'px-6',
                                    'text-primary-foreground',
                                    'shadow-sm',
                                    'transition-all duration-200',
                                    'hover:-translate-y-0.5',
                                    'hover:shadow-lg',
                                ].join(' ')}
                            >
                                View my work

                                <ArrowUpRight
                                    size={18}
                                    aria-hidden="true"
                                    className={[
                                        'transition-transform duration-200',
                                        'group-hover:translate-x-0.5',
                                        'group-hover:-translate-y-0.5',
                                    ].join(' ')}
                                />
                            </ButtonLink>

                            <ButtonLink
                                href="#contact"
                                variant="secondary"
                                size="lg"
                                className={[
                                    'rounded-xl',
                                    'border-border/70',
                                    'bg-background/70',
                                    'px-6',
                                    'backdrop-blur-sm',
                                    'transition-all duration-200',
                                    'hover:-translate-y-0.5',
                                    'hover:bg-background',
                                ].join(' ')}
                            >
                                Contact me
                            </ButtonLink>
                        </div>

                        {/* =================================================
                CREDIBILITY
                ================================================= */}
                        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
                            {credibilityItems.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground"
                                >
                                    <span
                                        aria-hidden="true"
                                        className={[
                                            'h-1.5 w-1.5 rounded-full',
                                            index === 0
                                                ? 'bg-accent'
                                                : 'bg-muted-foreground/30',
                                        ].join(' ')}
                                    />

                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* =======================================================
            SCROLL INDICATOR
            ======================================================= */}
                <a
                    href="#about"
                    aria-label="Scroll to about section"
                    className={[
                        'absolute bottom-8 left-1/2',
                        'hidden -translate-x-1/2',
                        'items-center justify-center',
                        'text-foreground/80',
                        'transition-all duration-200',
                        'hover:translate-y-1 hover:text-foreground',
                        'sm:flex',
                    ].join(' ')}
                >
                    <ArrowDown size={20} strokeWidth={1.8} />
                </a>
            </Container>
        </section>
    );
}