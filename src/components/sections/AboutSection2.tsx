import { Code2, Database, GraduationCap, MapPin, Palette, Wrench } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/hooks/useTranslation';

const stackGroups = [
    {
        title: 'Frontend',
        icon: Code2,
        items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'UI & Styling',
        icon: Palette,
        items: ['Tailwind CSS', 'Responsive Design', 'Accessibility'],
    },
    {
        title: 'Data & Integration',
        icon: Database,
        items: ['REST API', 'GraphQL', 'AWS'],
    },
    {
        title: 'Tools',
        icon: Wrench,
        items: ['Git', 'GitHub', 'Vercel'],
    },
];

export function About() {
    const { t } = useTranslation();
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="pb-20 pt-0 sm:py-0 lg:py-32"
        >
            <Container>
                <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm ">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                        {/* Left — About */}
                        <div
                            className={[
                                'relative overflow-hidden',
                                'bg-foreground text-background',
                                'p-7 sm:p-10 lg:p-12',
                                'lg:min-h-full',
                            ].join(' ')}
                        >
                            {/* Curved split */}
                            <div
                                aria-hidden="true"
                                className={[
                                    'pointer-events-none absolute z-0',
                                    'hidden lg:block',
                                    '-right-[280px] -top-[12%]',
                                    'h-[124%] w-[360px]',
                                    'rounded-[50%]',
                                    'bg-card',
                                ].join(' ')}
                            />

                            {/* Decorative circle */}
                            <div
                                aria-hidden="true"
                                className={[
                                    'pointer-events-none absolute z-0',
                                    '-bottom-32 -left-32',
                                    'h-80 w-80 rounded-full',
                                    'border border-background/10',
                                ].join(' ')}
                            />

                            {/* Dot pattern */}
                            <div
                                aria-hidden="true"
                                className={[
                                    'pointer-events-none absolute z-0',
                                    'bottom-10 left-10',
                                    'grid grid-cols-5 gap-3',
                                    'opacity-30',
                                ].join(' ')}
                            >
                                {Array.from({ length: 25 }).map((_, index) => (
                                    <span
                                        key={index}
                                        className="h-1 w-1 rounded-full bg-accent"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-accent" />
                                    <p className="text-xs font-semibold tracking-[0.18em] text-background/60 uppercase">
                                        About me
                                    </p>
                                </div>

                                <h2
                                    id="about-title"
                                    className={[
                                        'mt-7',
                                        'text-4xl font-semibold tracking-[-0.04em]',
                                        'sm:text-5xl',
                                    ].join(' ')}
                                >
                                    {t.about.greeting}{' '}
                                    <span className="text-accent">{t.about.name}.</span>
                                </h2>

                                <div className="mt-8 max-w-xl space-y-5">
                                    <p className="text-base leading-7 text-background/90 sm:text-lg sm:leading-8">
                                        {/* Frontend Developer with 3+ years of experience building and
                                        maintaining web applications using React and TypeScript. */}
                                        {t.about.p1}
                                    </p>

                                    <p className="text-sm leading-7 text-background/60 sm:text-base">
                                        {/* I translate UI designs into responsive web interfaces,
                                        build reusable components, and integrate APIs to deliver
                                        functional and maintainable applications. */}
                                        {t.about.p2}
                                    </p>
                                </div>

                                {/* Education & Location */}
                                <div className="mt-10 grid gap-8 border-t border-background/10 pt-8 sm:grid-cols-2">
                                    <div className="flex gap-4">
                                        <div
                                            className={[
                                                'flex h-10 w-10 shrink-0 items-center justify-center',
                                                'rounded-xl border border-background/10',
                                                'bg-background/5 text-accent',
                                            ].join(' ')}
                                        >
                                            <GraduationCap size={19} aria-hidden="true" />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold tracking-[0.12em] text-background/50 uppercase">
                                                {t.about.eduLabel}
                                            </p>

                                            <div className="mt-2 space-y-0.5 text-sm leading-6 text-background/90">
                                                <p>{t.about.degree}</p>
                                                <p>{t.about.field}</p>
                                                <p className="text-background/60">
                                                    {t.about.university}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div
                                            className={[
                                                'flex h-10 w-10 shrink-0 items-center justify-center',
                                                'rounded-xl border border-background/10',
                                                'bg-background/5 text-accent',
                                            ].join(' ')}
                                        >
                                            <MapPin size={18} aria-hidden="true" />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold tracking-[0.12em] text-background/50 uppercase">
                                                {t.about.locLabel}
                                            </p>

                                            <p className="mt-2 text-sm font-medium text-background/90">
                                                {t.about.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Stack */}
                        <div className="bg-card p-7 sm:p-10 lg:p-12">
                            <div className="flex items-center gap-4">
                                <h3 className="whitespace-nowrap text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                                    {t.about.stackTitle}
                                </h3>

                                <div
                                    aria-hidden="true"
                                    className="h-px flex-1 bg-border"
                                />
                            </div>

                            <div className="mt-8 divide-y divide-border">
                                {stackGroups.map((group) => {
                                    const Icon = group.icon;

                                    return (
                                        <div
                                            key={group.title}
                                            className={[
                                                'group flex gap-5 py-6 first:pt-0 last:pb-0',
                                                'sm:gap-6',
                                            ].join(' ')}
                                        >
                                            <div
                                                className={[
                                                    'flex h-11 w-11 shrink-0 items-center justify-center',
                                                    'rounded-xl border border-accent/10',
                                                    'bg-accent/5 text-accent',
                                                    'transition-all duration-200',
                                                    'group-hover:border-accent/20',
                                                    'group-hover:bg-accent/10',
                                                ].join(' ')}
                                            >
                                                <Icon size={20} aria-hidden="true" />
                                            </div>

                                            <div className="min-w-0">
                                                <h4 className="text-sm font-semibold text-foreground">
                                                    {group.title}
                                                </h4>

                                                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-6 text-muted-foreground">
                                                    {group.items.map((item, index) => (
                                                        <span key={item} className="inline-flex items-center">
                                                            {index > 0 && (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="mr-2 text-border"
                                                                >
                                                                    ·
                                                                </span>
                                                            )}
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}