import { Badge } from '@/components/ui/Badge';
import type { Experience } from '../types/experience.types';

interface ExperienceCardProps {
    experience: Experience;
}

export function ExperienceCard({
    experience,
}: ExperienceCardProps) {
    return (
        <article className="relative border-l border-border pl-6 sm:pl-8">
            <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-zinc-50"
            />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {experience.role}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-accent">
                        {experience.company}
                    </p>
                </div>

                <time className="text-sm text-muted-foreground">
                    {experience.duration}
                </time>
            </div>

            <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
                {experience.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                ))}
            </div>

            <ul className="mt-6 max-w-3xl space-y-3">
                {experience.responsibilities.map((responsibility) => (
                    <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                        <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border"
                        />

                        <span>{responsibility}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}