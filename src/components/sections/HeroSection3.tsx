import { ArrowDown, ArrowUpRight } from 'lucide-react';

import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { profile } from '@/features/profile/data/profile.data';
import BGHeroImage from '@/assets/images/profile3.png';

const credibilityItems = [
    '3+ Years Experience',
    'React',
    'TypeScript',
    'Responsive UI',
];

export function HeroSection3() {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative min-h-screen overflow-hidden"
        >
            {/* =====================================================
          Decorative background elements
          ===================================================== */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-8 top-44 hidden sm:block lg:left-10"
            >
                <div className="grid grid-cols-4 gap-x-5 gap-y-4">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-1 w-1 rounded-full bg-accent/50"
                        />
                    ))}
                </div>
            </div>

            {/* Large decorative circle */}
            <div
                aria-hidden="true"
                className={[
                    'pointer-events-none absolute',
                    '-bottom-[28rem] left-[18%]',
                    'h-[48rem] w-[48rem]',
                    'rounded-full',
                    'border border-accent/10',
                ].join(' ')}
            />

            <div
                aria-hidden="true"
                className={[
                    'pointer-events-none absolute',
                    '-bottom-[24rem] left-[23%]',
                    'h-[40rem] w-[40rem]',
                    'rounded-full',
                    'border border-accent/5',
                ].join(' ')}
            />

            <Container className="relative">
                <div className="grid min-h-screen items-center lg:grid-cols-[0.9fr_1.1fr]">
                    {/* =================================================
              LEFT — CONTENT
              ================================================= */}
                    <div className="relative z-10 pt-32 pb-10 sm:pt-36 lg:py-32">
                        {/* Eyebrow */}
                        <p className="mb-6 text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                            {profile.role}
                        </p>

                        {/* Headline */}
                        <h1
                            id="hero-title"
                            className={[
                                'max-w-2xl',
                                'text-4xl font-semibold',
                                'leading-[1.05]',
                                'tracking-[-0.045em]',
                                'text-foreground',
                                'sm:text-5xl',
                                'md:text-6xl',
                                'lg:text-[4rem]',
                                'xl:text-[4.5rem]',
                            ].join(' ')}
                        >
                            {profile.headline}
                        </h1>

                        {/* Description */}
                        <p
                            className={[
                                'mt-7 max-w-xl',
                                'text-base leading-7',
                                'text-muted-foreground',
                                'sm:text-lg sm:leading-8',
                            ].join(' ')}
                        >
                            {profile.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <ButtonLink
                                href="#projects"
                                size="lg"
                                className={[
                                    'group rounded-xl',
                                    'bg-primary text-primary-foreground',
                                    'px-6',
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
                                    'border-border',
                                    'bg-background',
                                    'px-6',
                                    'transition-all duration-200',
                                    'hover:-translate-y-0.5',
                                    'hover:bg-card',
                                ].join(' ')}
                            >
                                Contact me
                            </ButtonLink>
                        </div>

                        {/* Credibility */}
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

                    {/* =================================================
              RIGHT — PROFILE IMAGE
              ================================================= */}
                    <div
                        className={[
                            'relative flex items-end justify-center',
                            'min-h-[420px]',
                            'sm:min-h-[520px]',
                            'lg:min-h-screen',
                            'lg:justify-end',
                        ].join(' ')}
                    >
                        {/* Soft accent glow */}
                        <div
                            aria-hidden="true"
                            className={[
                                'pointer-events-none absolute',
                                'bottom-10 right-[15%]',
                                'h-72 w-72',
                                'rounded-full',
                                'bg-accent/10',
                                'blur-3xl',
                            ].join(' ')}
                        />

                        {/* Image */}
                        <div
                            className={[
                                'relative z-10',
                                'h-[460px] w-full',
                                'sm:h-[560px]',
                                'lg:h-[700px]',
                                'xl:h-[760px]',
                                'lg:w-[620px]',
                                'xl:w-[680px]',
                            ].join(' ')}
                        >
                            <img
                                src={BGHeroImage}
                                alt={`${profile.name} - ${profile.role}`}
                                className={[
                                    'absolute inset-0',
                                    'h-full w-full',
                                    'object-contain',
                                    'object-bottom',
                                    'transition-transform duration-500',
                                    'hover:scale-[1.01]',
                                ].join(' ')}
                            />
                        </div>
                    </div>
                </div>

                {/* =====================================================
            SCROLL INDICATOR
            ===================================================== */}
                <a
                    href="#about"
                    aria-label="Scroll to about section"
                    className={[
                        'absolute bottom-8 left-1/2',
                        'hidden -translate-x-1/2',
                        'items-center justify-center',
                        'text-foreground/70',
                        'transition-all duration-200',
                        'hover:translate-y-1',
                        'hover:text-foreground',
                        'sm:flex',
                    ].join(' ')}
                >
                    <ArrowDown size={20} strokeWidth={1.8} />
                </a>
            </Container>
        </section>
    );
}