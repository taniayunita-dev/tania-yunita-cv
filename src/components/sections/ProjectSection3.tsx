import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
// import { projects } from '@/data/projects';
// import type { Project } from '@/types/project';
import type { Translation } from '@/types/i18n';
import { useTranslation } from '@/hooks/useTranslation';
import { AbstractPatternFallback } from '../ui/ImageAltProject';

function ProjectCard({
    project,
    index,
}: {
    project: Translation['projects']['items'][number];
    index: number;
}) {
    const isProfessional = project.type === 'professional';

    return (
        <article
            className={[
                'group',
                'relative',
                'flex h-full min-w-0 flex-col',
                'overflow-hidden',
                'rounded-xl',
                'border border-white/10',
                'bg-[#0b1626]',
                'shadow-[0_12px_40px_rgba(0,0,0,0.18)]',
                'transition-all duration-300',
                'hover:-translate-y-1',
                'hover:border-accent',
                'hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]',
                'motion-reduce:transition-none',
            ].join(' ')}
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            {/* =========================================
          PROJECT IMAGE
      ========================================== */}
            <div
                className={[
                    'relative',
                    'aspect-[16/10]',
                    'overflow-hidden',
                    'border-b border-white/10',
                    'bg-[#101d2f]',
                ].join(' ')}
            >
                {project.image !== '' ?
                    <img
                        src={project.image}
                        alt={project.title}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className={[
                            'h-full w-full',
                            'object-cover',
                            'transition-transform duration-500',
                            'group-hover:scale-[1.035]',
                            'motion-reduce:transition-none',
                        ].join(' ')}
                    />
                    :
                    <AbstractPatternFallback title={project.title} />

                    // <div className="flex h-full items-center justify-center">
                    //     <span className="text-sm font-medium text-zinc-400">
                    //         Project Preview
                    //     </span>
                    // </div>
                }


                {/* Image overlay */}
                <div
                    aria-hidden="true"
                    className={[
                        'pointer-events-none absolute inset-0',
                        'bg-gradient-to-t',
                        'from-[#07111f]/70',
                        'via-transparent',
                        'to-transparent',
                        'opacity-70',
                    ].join(' ')}
                />

                {/* Project number */}
                <span
                    className={[
                        'absolute right-4 top-4',
                        'flex h-8 w-8 items-center justify-center',
                        'rounded-full',
                        'border border-white/15',
                        'bg-[#07111f]/70',
                        'text-[11px] font-semibold',
                        'text-white/70',
                        'backdrop-blur-md',
                    ].join(' ')}
                >
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>

            {/* =========================================
          CARD CONTENT
      ========================================== */}
            <div
                className={[
                    'flex flex-1 flex-col',
                    'p-5',
                    'sm:p-6',
                ].join(' ')}
            >
                {/* Top metadata */}
                <div
                    className={[
                        'flex',
                        'items-center',
                        'justify-between',
                        'gap-3',
                    ].join(' ')}
                >
                    <span
                        className={[
                            'inline-flex items-center',
                            'rounded-full',
                            'border border-cyan-400/20',
                            'bg-cyan-400/10',
                            'px-2.5 py-1',
                            'text-[10px] font-semibold',
                            'uppercase tracking-[0.08em]',
                            'text-accent',
                        ].join(' ')}
                    >
                        {isProfessional
                            ? 'Professional Experience'
                            : 'Personal Case Study'}
                    </span>

                    {isProfessional && (
                        <BriefcaseBusiness
                            size={15}
                            strokeWidth={1.7}
                            className="shrink-0 text-white/45"
                            aria-hidden="true"
                        />
                    )}
                </div>

                {/* Title */}
                <h3
                    className={[
                        'mt-4',
                        'text-xl font-semibold',
                        'leading-tight',
                        'tracking-tight',
                        'text-white',
                        'sm:text-[1.35rem]',
                    ].join(' ')}
                >
                    {project.title}
                </h3>

                {/* Description */}
                <p
                    className={[
                        'mt-3',
                        'line-clamp-3',
                        'text-sm leading-6',
                        'text-slate-400',
                    ].join(' ')}
                >
                    {project.description}
                </p>

                {/* Bottom content */}
                <div className="mt-auto pt-6">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.stacks.map((technology) => (
                            <Badge
                                key={technology}
                                className={[
                                    'border-white/10',
                                    'bg-white/[0.03]',
                                    'px-2.5 py-1',
                                    'text-[10px]',
                                    'text-slate-400',
                                    'hover:border-cyan-400/20',
                                    'hover:text-accent',
                                ].join(' ')}
                            >
                                {technology}
                            </Badge>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href={project.slug}
                        className={[
                            'group/link',
                            'mt-5',
                            'inline-flex items-center gap-2',
                            'text-xs font-semibold',
                            'text-card',
                            'transition-colors duration-200',
                            'hover:text-accent',
                            'focus-visible:outline-none',
                            'focus-visible:ring-2',
                            'focus-visible:ring-accent',
                            'focus-visible:ring-offset-2',
                            'focus-visible:ring-offset-[#0b1626]',
                        ].join(' ')}
                    >
                        <span>View Detail</span>

                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.8}
                            aria-hidden="true"
                            className={[
                                'transition-transform duration-200',
                                'group-hover/link:translate-x-0.5',
                                'group-hover/link:-translate-y-0.5',
                            ].join(' ')}
                        />
                    </a>
                </div>
            </div>
        </article>
    );
}

export function Projects() {
    const { t } = useTranslation();

    const projects = t.projects.items;
    return (
        <section
            id="projects"
            aria-labelledby="projects-title"
            className={[
                'relative',
                'overflow-hidden',
                'bg-[#050d19]',
                'py-20',
                'sm:py-24',
                'lg:py-32',
            ].join(' ')}
        >
            {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

            <div
                aria-hidden="true"
                className={[
                    'pointer-events-none absolute',
                    '-left-40 top-20',
                    'h-80 w-80',
                    'rounded-full',
                    'bg-cyan-500/10',
                    'blur-[120px]',
                ].join(' ')}
            />

            <div
                aria-hidden="true"
                className={[
                    'pointer-events-none absolute',
                    '-right-40 bottom-10',
                    'h-96 w-96',
                    'rounded-full',
                    'bg-indigo-500/10',
                    'blur-[140px]',
                ].join(' ')}
            />

            <Container className="relative min-w-0">
                {/* =========================================
            SECTION HEADER
        ========================================== */}
                <div
                    className={[
                        'mx-auto',
                        'max-w-2xl',
                        'text-center',
                    ].join(' ')}
                >
                    <p
                        className={[
                            'text-xs font-semibold',
                            'uppercase tracking-[0.2em]',
                            'text-cyan-400',
                        ].join(' ')}
                    >
                        Projects
                    </p>

                    <h2
                        id="projects-title"
                        className={[
                            'mt-3',
                            'text-4xl font-semibold',
                            'tracking-[-0.045em]',
                            'text-white',
                            'sm:text-5xl',
                            'lg:text-6xl',
                        ].join(' ')}
                    >
                        Featured{' '}
                        <span
                            className={[
                                'bg-gradient-to-r',
                                'from-cyan-400',
                                'to-indigo-400',
                                'bg-clip-text',
                                'text-transparent',
                            ].join(' ')}
                        >
                            Projects
                        </span>
                    </h2>

                    {/* Accent line */}
                    <div
                        aria-hidden="true"
                        className={[
                            'mx-auto mt-4',
                            'h-0.5 w-12',
                            'bg-gradient-to-r',
                            'from-cyan-400',
                            'to-indigo-400',
                        ].join(' ')}
                    />

                    <p
                        className={[
                            'mx-auto mt-5',
                            'max-w-xl',
                            'text-sm leading-6',
                            'text-slate-400',
                            'sm:text-base sm:leading-7',
                        ].join(' ')}
                    >
                        A selection of projects I’ve built and
                        contributed to, showcasing practical frontend
                        development and user-focused interfaces.
                    </p>
                </div>

                {/* =========================================
            PROJECTS
        ========================================== */}

                {/* Mobile:
            horizontal scroll only inside this wrapper
        */}
                <div className="mt-10 min-w-0 max-w-full sm:mt-12">
                    <div
                        className={[
                            'min-w-0 max-w-full',
                            'overflow-x-auto overflow-y-hidden',
                            'overscroll-x-contain',
                            'touch-pan-x',
                            'snap-x snap-mandatory',
                            'scrollbar-none',
                            'pb-4',
                            'sm:overflow-visible',
                            'sm:pb-0',
                        ].join(' ')}
                    >
                        <div
                            className={[
                                'flex',
                                'w-max',
                                'max-w-none',
                                'gap-4',
                                'sm:grid',
                                'sm:w-full',
                                'sm:max-w-none',
                                'sm:grid-cols-2',
                                'sm:gap-5',
                                'lg:grid-cols-3',
                                'lg:gap-6',
                            ].join(' ')}
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={project.slug}
                                    className={[
                                        'w-[82vw]',
                                        'max-w-[330px]',
                                        'shrink-0',
                                        'snap-start',
                                        'sm:w-auto',
                                        'sm:max-w-none',
                                    ].join(' ')}
                                >
                                    <ProjectCard
                                        project={project}
                                        index={index}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* =========================================
            MOBILE SWIPE INDICATOR
        ========================================== */}
                <div
                    className={[
                        'mt-4',
                        'flex items-center justify-center gap-3',
                        'sm:hidden',
                    ].join(' ')}
                    aria-hidden="true"
                >
                    <span className="h-px w-8 bg-accent" />

                    <span
                        className={[
                            'text-[10px] font-medium',
                            'uppercase tracking-[0.14em]',
                            'text-slate-500',
                        ].join(' ')}
                    >
                        Swipe to explore
                    </span>

                    <span className="h-px w-8 bg-white/10" />
                </div>
            </Container>
        </section>
    );
}