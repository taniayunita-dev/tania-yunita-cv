import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { projects } from '@/features/projects/data/projects.data';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { SEO } from '@/components/seo/SEO';

export function ProjectCaseStudyPage() {
    const { projectId } = useParams();

    const project = projects.find(
        (item) => item.id === projectId,
    );

    if (!project) {

        return (
            <section className="py-32">
                <Container>
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium text-accent">
                            Project not found
                        </p>

                        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                            We couldn&apos;t find that project.
                        </h1>

                        <Link
                            to="/"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                        >
                            <ArrowLeft size={16} aria-hidden="true" />
                            Back to home
                        </Link>
                    </div>
                </Container>
            </section>
        );
    }

    const seoTitle = `${project.title} | Frontend Developer`;

    const seoDescription = project.description;

    return (
        <article>
            <SEO
                title={seoTitle}
                description={seoDescription}
            />
            {/* Hero */}
            <section className="border-b border-border">
                <Container>
                    <div className="py-20 sm:py-24 lg:py-32">
                        <Link
                            to="/#projects"
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                            <ArrowLeft size={16} aria-hidden="true" />
                            Back to projects
                        </Link>

                        <div className="mt-12 max-w-4xl">
                            <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                                {project.role}
                            </p>

                            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                                {project.title}
                            </h1>

                            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                                {project.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <Badge key={technology}>{technology}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Preview */}
            <section className="py-12 sm:py-16">
                <Container>
                    <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-card">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center">
                                <span className="text-sm font-medium text-zinc-400">
                                    Project Preview
                                </span>
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            {/* Overview */}
            <section className="py-12 sm:py-16 lg:py-20">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                                Overview
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                                About the project
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-8 text-muted-foreground">
                                {project.description}
                            </p>

                            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                <div>
                                    <p className="text-sm font-medium text-foreground">
                                        Role
                                    </p>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {project.role}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-foreground">
                                        Technologies
                                    </p>

                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <Badge key={technology}>
                                                {technology}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features */}
            <section className="bg-card py-16 sm:py-20 lg:py-24">
                <Container>
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                            Features
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                            What I worked on
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {project.features.map((feature) => (
                            <div
                                key={feature}
                                className="bg-card p-6"
                            >
                                <p className="text-sm font-medium text-foreground">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-24">
                <Container>
                    <div className="flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Interested in the rest of my work?
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                                Explore more projects
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <ButtonLink href="/#projects" variant="secondary">
                                View all projects
                            </ButtonLink>

                            {project.liveUrl && (
                                <ButtonLink
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live project
                                    <ExternalLink
                                        size={15}
                                        aria-hidden="true"
                                    />
                                </ButtonLink>
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </article>
    );
}