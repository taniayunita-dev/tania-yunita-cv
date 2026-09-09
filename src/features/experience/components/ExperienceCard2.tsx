import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/Badge';
import type { Translation } from '@/types/i18n';

interface ExperienceCardProps {
    experience: Translation['experience']['items'][number];
}

function getCompanyInitials(company: string) {
    return company
        .replace(/[()]/g, '')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join('')
        .toUpperCase();
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    const initials = getCompanyInitials(experience.company);

    return (
        <article
            className={[
                'group rounded-2xl border border-border bg-card',
                'p-6 sm:p-7 lg:p-8',
                'transition-all duration-300',
                'hover:-translate-y-1',
                'hover:border-accent/30',
                'hover:shadow-lg hover:shadow-accent/5',
            ].join(' ')}
        >
            <div className="grid gap-7">
                {/* Company / Role */}
                <div>
                    <div className="flex items-start gap-4">
                        <div
                            className={[
                                'flex h-11 w-11 shrink-0 items-center justify-center',
                                'rounded-xl border border-accent/15',
                                'bg-accent/5 text-sm font-semibold text-accent',
                                'transition-colors duration-200',
                                'group-hover:bg-accent/10',
                            ].join(' ')}
                            aria-hidden="true"
                        >
                            {initials}
                        </div>

                        <div className="min-w-0">
                            <h3 className="text-base font-semibold tracking-tight text-foreground">
                                {experience.company}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-accent">
                                {experience.role}
                            </p>
                        </div>
                    </div>

                    <time className="mt-5 block text-sm text-muted-foreground">
                        {experience.period}
                    </time>
                </div>
                <div className='grid lg:grid-cols-2'>

                    {/* Description + Responsibilities */}
                    <div>
                        <p className="leading-7 text-muted-foreground">
                            {experience.description}
                        </p>

                        <ul className="mt-5 space-y-3">
                            {experience?.responsibilities?.map((responsibility) => (
                                <li
                                    key={responsibility}
                                    className="flex gap-3 text-sm leading-6 text-muted-foreground"
                                >
                                    <Check
                                        size={17}
                                        className="mt-1 shrink-0 text-accent"
                                        aria-hidden="true"
                                    />

                                    <span>{responsibility}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="lg:border-l lg:border-border lg:pl-6">
                        <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase lg:hidden">
                            Stacks
                        </p>

                        <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
                            {experience?.stacks?.map((stack) => (
                                <Badge
                                    key={stack}
                                    className="border-border bg-background text-muted-foreground"
                                >
                                    {stack}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}