// import { ArrowUpRight } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/features/projects/components/ProjectCard2';
import { projects } from '@/features/projects/data/projects.data';

export function Projects() {
    const [featuredProject, ...otherProjects] = projects;

    return (
        <section
            id="projects"
            aria-labelledby="projects-title"
            className="py-20 sm:py-24 lg:py-32"
        >
            <Container>
                {/* Section heading */}
                <header className="mb-12 max-w-2xl sm:mb-14">
                    <div className="flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-accent"
                        />

                        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                            Selected Projects
                        </p>
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-8">
                        <div>
                            <h2
                                id="projects-title"
                                className={[
                                    'text-3xl font-semibold tracking-[-0.04em]',
                                    'text-foreground',
                                    'sm:text-4xl',
                                ].join(' ')}
                            >
                                Real-world work & selected case studies.
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                                A selection of professional experience and self-directed
                                projects that showcase how I approach frontend development.
                            </p>
                        </div>
                    </div>
                </header>

                {/* Featured project */}
                {featuredProject && (
                    <ProjectCard
                        project={featuredProject}
                        featured
                    />
                )}

                {/* Supporting projects */}
                {otherProjects.length > 0 && (
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {otherProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}