import { experiences } from '@/features/experience/data/experience.data';

import { Container } from '@/components/ui/Container';
import { ExperienceCard } from '@/features/experience/components/ExperienceCard2';

export function Experience() {
    return (
        <section
            id="experience"
            aria-labelledby="experience-title"
            className="bg-card py-20 sm:py-24 lg:py-32"
        >
            <Container>
                <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                    {/* Section intro */}
                    <header className="lg:sticky lg:top-32 lg:self-start">
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-accent" />

                            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                                Professional Experience
                            </p>
                        </div>

                        <h2
                            id="experience-title"
                            className={[
                                'mt-6 max-w-md',
                                'text-3xl font-semibold tracking-[-0.04em]',
                                'text-foreground',
                                'sm:text-4xl',
                            ].join(' ')}
                        >
                            My professional experience.
                        </h2>

                        <div className="mt-5 h-px w-12 bg-accent" />

                        <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
                            Over the past 3+ years, I&apos;ve worked on web applications
                            across different products and teams.
                        </p>
                    </header>

                    {/* Experience cards */}
                    <div className="space-y-5">
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={`${experience.company}-${experience.duration}`}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}