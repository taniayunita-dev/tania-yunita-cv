import { ArrowDown, ArrowUpRight } from 'lucide-react';

import { profile } from '@/features/profile/data/profile.data';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';

const credibilityItems = [
    '3+ Years Experience',
    'React',
    'TypeScript',
    'Responsive UI',
];

export function HeroSection() {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative overflow-hidden border-b border-border"
        >
            <Container>
                <div className="flex min-h-[calc(100vh-4rem)] items-center py-20 sm:py-24 lg:py-28">
                    <div className="w-full max-w-4xl">
                        <p className="mb-5 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                            {profile.role}
                        </p>

                        <h1
                            id="hero-title"
                            className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-7xl"
                        >
                            I build thoughtful, responsive web experiences with React and
                            TypeScript.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                            {profile.description}
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <ButtonLink
                                size="lg"
                                className="group"
                                href="#projects"
                            >
                                View my work

                                <ArrowUpRight
                                    size={18}
                                    aria-hidden="true"
                                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </ButtonLink>

                            <ButtonLink
                                variant="secondary"
                                size="lg"
                                href="#contact"
                            >
                                Contact me
                            </ButtonLink>
                        </div>

                        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
                            {credibilityItems.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="h-1.5 w-1.5 rounded-full bg-accent"
                                    />

                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <a
                    href="#about"
                    aria-label="Scroll to about section"
                    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
                >
                    Scroll to explore

                    <ArrowDown size={14} aria-hidden="true" />
                </a>
            </Container>
        </section>
    );
}