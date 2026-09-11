

import { Container } from '@/components/ui/Container';
import { useTranslation } from '@/hooks/useTranslation';



export function HowIBuild() {
    const { t } = useTranslation();
    return (
        <section
            id="skills"
            aria-labelledby="how-i-build-title"
            className="relative overflow-hidden bg-card py-20 sm:py-24 lg:py-32"
        >
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                    {/* Section introduction */}
                    <header className="lg:sticky lg:top-32 lg:self-start">
                        <div className="flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-full bg-accent"
                            />

                            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                                {t.skills.eyebrow}
                            </p>
                        </div>

                        <h2
                            id="how-i-build-title"
                            className={[
                                'mt-6 max-w-lg',
                                'text-4xl font-semibold',
                                'tracking-[-0.045em]',
                                'leading-[1.05]',
                                'text-foreground',
                                'sm:text-5xl',
                            ].join(' ')}
                        >
                            {t.skills.heading}
                        </h2>

                        <div className="mt-6 h-px w-12 bg-accent" />

                        <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
                            {/* A selection of frontend practices I’m confident with,
                            experienced in, and currently developing. */}
                            {t.skills.subtext}
                        </p>
                    </header>

                    {/* Practice levels */}
                    <div className="space-y-4">
                        {t.skills.items.map((level) => (
                            <article
                                key={level.title}
                                className={[
                                    'group relative overflow-hidden',
                                    'rounded-2xl border border-border',
                                    'bg-background',
                                    'transition-all duration-300',
                                    'hover:-translate-y-0.5',
                                    'hover:border-accent/30',
                                    'hover:shadow-lg hover:shadow-accent/5',
                                ].join(' ')}
                            >
                                <div className="p-6 sm:p-7 lg:p-8">
                                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                                        {/* Number */}
                                        <span
                                            aria-hidden="true"
                                            className={[
                                                'shrink-0',
                                                'font-mono text-xs font-medium',
                                                'text-accent',
                                            ].join(' ')}
                                        >
                                            {level.number}
                                        </span>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                                                        {level.title}
                                                    </h3>

                                                    <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                                                        {level.desc}
                                                    </p>
                                                </div>

                                                {/* <span
                                                    aria-hidden="true"
                                                    className={[
                                                        'hidden h-9 w-9 shrink-0',
                                                        'items-center justify-center',
                                                        'rounded-full border border-border',
                                                        'text-muted-foreground',
                                                        'transition-all duration-300',
                                                        'sm:flex',
                                                        'group-hover:border-accent/30',
                                                        'group-hover:bg-accent',
                                                        'group-hover:text-accent-foreground',
                                                    ].join(' ')}
                                                >
                                                    <ArrowUpRight size={16} />
                                                </span> */}
                                            </div>

                                            {/* Skill badges */}
                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {level.tags.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className={[
                                                            'inline-flex items-center',
                                                            'rounded-full',
                                                            'border border-border',
                                                            'bg-card',
                                                            'px-3.5 py-2',
                                                            'text-xs font-medium',
                                                            'text-foreground',
                                                            'transition-colors duration-200',
                                                            'group-hover:border-accent/20',
                                                        ].join(' ')}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle accent line */}
                                <div
                                    aria-hidden="true"
                                    className={[
                                        'absolute bottom-0 left-0 h-px w-0',
                                        'bg-accent',
                                        'transition-all duration-500',
                                        'group-hover:w-full',
                                    ].join(' ')}
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}