import type { PropsWithChildren, ReactNode } from 'react';

import { Container } from './Container';

interface SectionProps extends PropsWithChildren {
    id?: string;
    className?: string;
    eyebrow?: string;
    title?: string;
    description?: ReactNode;
}

export function Section({
    id,
    children,
    className = '',
    eyebrow,
    title,
    description,
}: SectionProps) {
    return (
        <section id={id} className={`py-20 sm:py-24 lg:py-32 ${className}`}>
            <Container>
                {(eyebrow || title || description) && (
                    <header className="mb-12 max-w-2xl">
                        {eyebrow && (
                            <div className="flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="h-2 w-2 rounded-full bg-accent"
                                />

                                <p className="text-xs  font-semibold tracking-[0.18em] text-accent uppercase">
                                    {eyebrow}
                                </p>
                            </div>
                            // <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
                            //     {eyebrow}
                            // </p>
                        )}

                        {title && (
                            <h2 className="text-3xl mt-6 font-semibold tracking-tight text-foreground sm:text-4xl">
                                {title}
                            </h2>
                        )}

                        {description && (
                            <div className="mt-4 text-base leading-7 text-muted-foreground">
                                {description}
                            </div>
                        )}
                    </header>
                )}

                {children}
            </Container>
        </section>
    );
}