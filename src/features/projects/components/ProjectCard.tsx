import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
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
        <Card
            className={[
                'group overflow-hidden',
                'transition-transform duration-200',
                'hover:-translate-y-1',
                featured && 'lg:col-span-2',
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {/* Project image */}
            <div
                className={[
                    'relative overflow-hidden bg-zinc-100',
                    featured ? 'aspect-[16/8]' : 'aspect-video',
                ].join(' ')}
            >
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <span className="text-sm font-medium text-zinc-400">
                            Project Preview
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs font-medium tracking-wide text-accent uppercase">
                            {project.role}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                            {project.title}
                        </h3>
                    </div>

                    <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground"
                    >
                        <ArrowUpRight size={17} />
                    </span>
                </div>

                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                    {project.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <Badge key={technology}>{technology}</Badge>
                    ))}
                </div>

                <Link
                    to={project.caseStudyUrl ?? `/projects/${project.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                    View case study
                    <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
            </div>
        </Card>
    );
}