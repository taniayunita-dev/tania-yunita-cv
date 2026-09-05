import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/Badge';
import type { Project } from '../types/project.types';

interface ProjectCardProps {
    project: Project;
    featured?: boolean;
}

export function ProjectCard({
    project,
    featured = false,
}: ProjectCardProps) {
    return (
        <article
            className={[
                'group relative overflow-hidden rounded-3xl border border-border bg-card',
                'transition-all duration-300',
                'hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5',
                featured ? 'lg:min-h-[440px]' : 'h-full',
            ].join(' ')}
        >
            <div
                className={[
                    'absolute inset-0 pointer-events-none',
                    'bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent',
                    'opacity-0 transition-opacity duration-300',
                    'group-hover:opacity-100',
                ].join(' ')}
            />

            <div
                className={[
                    'relative z-10 flex h-full flex-col',
                    featured ? 'p-7 sm:p-9 lg:p-10' : 'p-6 sm:p-7',
                ].join(' ')}
            >
                {/* Project type */}
                <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                        {featured
                            ? 'Professional Experience'
                            : 'Personal Case Study'}
                    </span>

                    <span
                        aria-hidden="true"
                        className={[
                            'flex h-9 w-9 items-center justify-center rounded-full',
                            'border border-border bg-background',
                            'text-muted-foreground',
                            'transition-all duration-300',
                            'group-hover:border-accent/30',
                            'group-hover:bg-accent',
                            'group-hover:text-accent-foreground',
                        ].join(' ')}
                    >
                        <ArrowUpRight size={17} />
                    </span>
                </div>

                {/* Visual placeholder */}
                <div
                    className={[
                        'relative mt-6 overflow-hidden rounded-2xl border border-border',
                        'bg-background',
                        featured
                            ? 'aspect-[16/8] lg:aspect-auto lg:min-h-[180px]'
                            : 'aspect-[16/9]',
                    ].join(' ')}
                >
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-40"
                    >
                        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-accent/20" />
                        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-accent/10" />
                    </div>

                    <div className="relative flex h-full min-h-[150px] items-center justify-center">
                        <span className="text-sm font-medium text-muted-foreground">
                            Project Preview
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-7 flex flex-1 flex-col">
                    <div>
                        <h3
                            className={[
                                'font-semibold tracking-[-0.03em] text-foreground',
                                featured
                                    ? 'text-2xl sm:text-3xl'
                                    : 'text-xl',
                            ].join(' ')}
                        >
                            {project.title}
                        </h3>

                        <p
                            className={[
                                'mt-3 leading-7 text-muted-foreground',
                                featured ? 'max-w-2xl' : 'text-sm',
                            ].join(' ')}
                        >
                            {project.description}
                        </p>
                    </div>

                    {/* Footer */}
                    <div
                        className={[
                            'mt-auto pt-7',
                            'border-t border-border',
                            featured
                                ? 'mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'
                                : 'mt-7',
                        ].join(' ')}
                    >
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <Badge
                                    key={technology}
                                    className="border-border bg-background text-muted-foreground"
                                >
                                    {technology}
                                </Badge>
                            ))}
                        </div>

                        <a
                            href={`/projects/${project.slug}`}
                            className={[
                                'inline-flex shrink-0 items-center gap-2',
                                'text-sm font-semibold text-foreground',
                                'transition-colors duration-200',
                                'hover:text-accent',
                                'focus-visible:outline-none',
                                'focus-visible:ring-2 focus-visible:ring-accent',
                                'focus-visible:ring-offset-4',
                                'focus-visible:ring-offset-card',
                            ].join(' ')}
                        >
                            View case study
                            <ArrowUpRight
                                size={16}
                                aria-hidden="true"
                                className={[
                                    'transition-transform duration-200',
                                    'group-hover:translate-x-0.5',
                                    'group-hover:-translate-y-0.5',
                                ].join(' ')}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}