import type { Translation } from "@/types/i18n";
import {
    BriefcaseBusiness,
    CalendarDays,
    Check,
} from 'lucide-react';
import { Badge } from "@/components/ui/Badge";
import { getCompanyInitials } from "@/libs/getCompanyInitial";
interface ExperienceDetailProps {
    experience: Translation['experience']['items'][number];
}

export function ExperienceDetail({
    experience,
}: ExperienceDetailProps) {


    return (
        <article
            key={experience.id}
            className={[
                'relative overflow-hidden',
                'rounded-2xl border border-border',
                'bg-card',
                'p-6 sm:p-8 lg:p-10',
                'animate-[experience-in_400ms_ease-out]',
                'motion-reduce:animate-none',
            ].join(' ')}
        >
            {/* decorative accent */}
            <div
                aria-hidden="true"
                className={[
                    'pointer-events-none absolute',
                    '-right-24 -top-24',
                    'h-64 w-64 rounded-full',
                    'bg-accent/5 blur-3xl',
                ].join(' ')}
            />

            <div className="relative">
                {/* Company header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                        {/* company initials */}
                        <div
                            aria-hidden="true"
                            className={[
                                'flex h-12 w-12 shrink-0 items-center justify-center',
                                'rounded-xl',
                                'border border-accent/15',
                                'bg-accent/5',
                                'text-sm font-bold text-accent',
                            ].join(' ')}
                        >
                            {experience.company == 'Career Break' ? getCompanyInitials(experience.company) : <img src={experience?.logo} className="w-full h-full rounded-xl" alt={experience.company} />}
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                                {experience.company}
                            </h3>

                            <p className="mt-1 font-medium text-accent">
                                {experience.role}
                            </p>

                            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                                <CalendarDays
                                    size={16}
                                    aria-hidden="true"
                                />
                                <span>{experience.period}</span>
                            </div>
                        </div>
                    </div>

                    {/* optional action */}
                    {experience.role !== 'Career Break' && (
                        <span
                            className={[
                                'inline-flex w-fit items-center gap-2',
                                'rounded-full border border-border',
                                'px-3 py-2',
                                'text-xs font-medium text-muted-foreground',
                            ].join(' ')}
                        >
                            <BriefcaseBusiness
                                size={14}
                                aria-hidden="true"
                            />
                            Professional Experience
                        </span>
                    )}
                </div>

                {/* Description */}
                <div className="mt-8 border-t border-border pt-7">
                    <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                        {experience.description}
                    </p>
                </div>

                {/* Responsibilities */}
                <div className="mt-8 border-t border-border pt-7">
                    <h4 className="text-sm font-semibold text-foreground">
                        Key Responsibilities
                    </h4>

                    <ul className="mt-5 space-y-4">
                        {experience.responsibilities.map(
                            (responsibility, index) => (
                                <li
                                    key={responsibility}
                                    className={[
                                        'flex gap-3',
                                        'animate-[experience-item-in_450ms_ease-out_both]',
                                        'motion-reduce:animate-none',
                                    ].join(' ')}
                                    style={{
                                        animationDelay: `${index * 70 + 80}ms`,
                                    }}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={[
                                            'mt-1 flex h-5 w-5 shrink-0',
                                            'items-center justify-center',
                                            'rounded-full',
                                            'bg-accent/10 text-accent',
                                        ].join(' ')}
                                    >
                                        <Check size={12} strokeWidth={2.5} />
                                    </span>

                                    <span className="text-sm leading-6 text-muted-foreground sm:text-base">
                                        {responsibility}
                                    </span>
                                </li>
                            ),
                        )}
                    </ul>
                </div>

                {/* Technologies */}
                <div className="mt-8 border-t border-border pt-7">
                    <h4 className="text-sm font-semibold text-foreground">
                        Technologies &amp; Tools
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {experience.stacks.map((stack) => (
                            <Badge
                                key={stack}
                                className={[
                                    'border-border',
                                    'bg-background',
                                    'text-muted-foreground',
                                    'transition-all duration-200',
                                    'hover:border-accent/30',
                                    'hover:bg-accent/5',
                                    'hover:text-foreground',
                                    'animate-[experience-item-in_450ms_ease-out_both]',
                                    'motion-reduce:animate-none',
                                ].join(' ')}
                            // style={{
                            //     animationDelay: `${index * 50 + 180}ms`,
                            // }}
                            >
                                {stack}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Note */}
                {experience.note && (
                    <div className="mt-7 rounded-xl border border-accent/10 bg-accent/5 px-4 py-3">
                        <p className="text-sm font-medium text-accent">
                            {experience.note}
                        </p>
                    </div>
                )}
            </div>
        </article>
    );
}