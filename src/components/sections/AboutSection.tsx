import { Check } from 'lucide-react';

import { profile } from '@/features/profile/data/profile.data';
import { Section } from '@/components/ui/Section';

const focusAreas = [
    'Responsive and user-focused interfaces',
    'Reusable and maintainable React components',
    'Type-safe frontend development with TypeScript',
    'Clear API integration and application states',
];

export function AboutSection() {
    return (
        <Section
            id="about"
            eyebrow="About me"
            title="I care about building interfaces that work well for people and developers."
            description="My approach combines practical frontend engineering with attention to usability, responsiveness, and maintainability."
        >
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                    <p className="text-lg leading-8 text-foreground">
                        I&apos;m {profile.role.toLowerCase()} focused on building web
                        applications that are responsive, accessible, and easy to
                        maintain.
                    </p>

                    <p className="leading-7 text-muted-foreground">
                        I enjoy working closely with product requirements and translating
                        them into clear user interfaces. I&apos;m particularly interested
                        in component architecture, API integration, responsive design,
                        and creating consistent experiences across different screen
                        sizes.
                    </p>

                    <p className="leading-7 text-muted-foreground">
                        I believe good frontend development is not only about making an
                        interface look right. It is also about creating a codebase that
                        other developers can understand, extend, and maintain.
                    </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                    <h3 className="text-lg font-semibold tracking-tight">
                        What I focus on
                    </h3>

                    <ul className="mt-6 space-y-4">
                        {focusAreas.map((item) => (
                            <li
                                key={item}
                                className="flex gap-3 text-sm leading-6 text-muted-foreground"
                            >
                                <Check
                                    size={18}
                                    className="mt-0.5 shrink-0 text-accent"
                                    aria-hidden="true"
                                />

                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}