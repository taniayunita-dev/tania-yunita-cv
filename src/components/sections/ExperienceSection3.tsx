import { useState } from 'react';
import {
    ArrowUpRight,
    BriefcaseBusiness,
    CalendarDays,
    Check,
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { useTranslation } from '@/hooks/useTranslation';
import { ExperienceDetail } from '@/features/experience/components/ExperienceDetail';

export function Experience() {
    const { t } = useTranslation();
    const experiences = t.experience.items;
    const [activeId, setActiveId] = useState(experiences[0].id);

    const activeExperience =
        experiences.find((experience) => experience.id === activeId) ??
        experiences[0];

    return (
        <section
            id="experience"
            aria-labelledby="experience-title"
            className={[
                'overflow-hidden',
                'py-20',
                'sm:py-24',
                'lg:py-32',
            ].join(' ')}
        >
            <Container>
                {/* ========================================
            SECTION HEADER
        ========================================= */}
                <div className="max-w-3xl">
                    <p
                        className={[
                            'text-sm font-semibold',
                            'uppercase tracking-[0.18em]',
                            'text-accent',
                        ].join(' ')}
                    >
                        02 / Experience
                    </p>

                    <h2
                        id="experience-title"
                        className={[
                            'mt-4',
                            'text-4xl font-semibold',
                            'tracking-[-0.04em]',
                            'text-foreground',
                            'sm:text-5xl',
                            'lg:text-6xl',
                        ].join(' ')}
                    >
                        Where I’ve worked.
                    </h2>

                    <p
                        className={[
                            'mt-5 max-w-2xl',
                            'text-base leading-7',
                            'text-muted-foreground',
                            'sm:text-lg sm:leading-8',
                        ].join(' ')}
                    >
                        My professional journey in frontend development,
                        where I built web applications and collaborated
                        with cross-functional teams.
                    </p>
                </div>

                {/* ========================================
            EXPERIENCE CONTENT
        ========================================= */}
                <div className="mt-12 lg:mt-16">
                    <div
                        className={[
                            'grid',
                            'min-w-0',
                            'gap-10',
                            'lg:grid-cols-[0.75fr_1.25fr]',
                            'lg:gap-6',
                        ].join(' ')}
                    >
                        {/* ======================================
                MOBILE COMPANY SELECTOR
            ======================================= */}
                        <div className="min-w-0 max-w-full">
                            <div
                                className={[
                                    'w-full max-w-full',
                                    'overflow-x-auto',
                                    'overflow-y-hidden',
                                    'overscroll-x-contain',
                                    'touch-pan-x',
                                    'snap-x snap-mandatory',
                                    'pb-2',
                                ].join(' ')}
                            >
                                <div
                                    className={[
                                        'flex lg:flex-col',
                                        'w-max',
                                        'lg:w-full',

                                    ].join(' ')}
                                >
                                    {experiences.map((experience) => {
                                        const isActive =
                                            experience.id ===
                                            activeExperience.id;

                                        return (
                                            <button
                                                key={experience.id}
                                                type="button"
                                                onClick={() =>
                                                    setActiveId(
                                                        experience.id,
                                                    )
                                                }
                                                aria-current={
                                                    isActive
                                                        ? 'true'
                                                        : undefined
                                                }
                                                className={[
                                                    'group relative',
                                                    'lg:w-full md:w-50% w:65%',
                                                    'min-w-[150px]',
                                                    'shrink-0',
                                                    'snap-start lg:rounded-r-xl',
                                                    'border-l-2',
                                                    'p-4 ',
                                                    'text-left',
                                                    'transition-all',
                                                    'duration-300',
                                                    'sm:w-[[170px]]',
                                                    'sm:min-w-[170px]',
                                                    isActive
                                                        ? [
                                                            'border-l-accent lg:border lg:border-accent',
                                                            'bg-card',
                                                            'lg:shadow-2xl',
                                                        ].join(' ')
                                                        : [
                                                            'border-border',
                                                            'bg-background',
                                                            'hover:border-accent/40',
                                                            'hover:bg-card',
                                                        ].join(' '),
                                                ].join(' ')}
                                            >
                                                {/* Active indicator */}
                                                <span
                                                    aria-hidden="true"
                                                    className={[
                                                        'absolute',
                                                        'left-0 top-0',
                                                        'h-full w-0.5',
                                                        'rounded-full',
                                                        'bg-accent',
                                                        'transition-opacity',
                                                        'duration-300',
                                                        isActive
                                                            ? 'opacity-100'
                                                            : 'opacity-0',
                                                    ].join(' ')}
                                                />

                                                <div
                                                    className={[
                                                        'flex',
                                                        'items-start',
                                                        'justify-between',
                                                        'gap-2',
                                                    ].join(' ')}
                                                >
                                                    <span
                                                        className={[
                                                            'min-w-0',
                                                            'text-sm font-semibold',
                                                            'leading-5',
                                                            isActive
                                                                ? 'text-foreground'
                                                                : 'text-muted-foreground',
                                                        ].join(' ')}
                                                    >
                                                        {experience.company}
                                                    </span>


                                                </div>

                                                <span
                                                    className={[
                                                        'mt-3 block',
                                                        'text-xs leading-5',
                                                        'text-muted-foreground',
                                                    ].join(' ')}
                                                >
                                                    {experience.period}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Swipe indicator */}
                            {experiences.length > 1 && (
                                <div
                                    aria-hidden="true"
                                    className={[
                                        'mt-3',
                                        'flex items-center gap-2',
                                        'text-[11px] font-medium',
                                        'uppercase tracking-[0.12em] lg:hidden',
                                        'text-muted-foreground/60',
                                    ].join(' ')}
                                >
                                    <span className="h-px w-8 bg-border" />

                                    <span>
                                        Swipe to explore
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* ======================================
                DESKTOP TIMELINE
            ======================================= */}
                        <div className="hidden min-w-0 lg:hidden">
                            <div className="sticky top-28">
                                <div className="relative">
                                    {/* Vertical timeline */}
                                    <div
                                        aria-hidden="true"
                                        className={[
                                            'absolute',
                                            'bottom-2 left-[5px] top-2',
                                            'w-px',
                                            'bg-border',
                                        ].join(' ')}
                                    />

                                    <div className="space-y-1">
                                        {experiences.map(
                                            (experience) => {
                                                const isActive =
                                                    experience.id ===
                                                    activeExperience.id;

                                                return (
                                                    <button
                                                        key={experience.id}
                                                        type="button"
                                                        onClick={() =>
                                                            setActiveId(
                                                                experience.id,
                                                            )
                                                        }
                                                        aria-current={
                                                            isActive
                                                                ? 'true'
                                                                : undefined
                                                        }
                                                        className={[
                                                            'group relative',
                                                            'flex w-full',
                                                            'items-center gap-5',
                                                            'py-4 pl-10',
                                                            'text-left',
                                                        ].join(' ')}
                                                    >
                                                        {/* Timeline dot */}
                                                        <span
                                                            aria-hidden="true"
                                                            className={[
                                                                'absolute left-0',
                                                                'h-2.5 w-2.5',
                                                                'rounded-full',
                                                                'border-2',
                                                                'border-background',
                                                                'transition-all',
                                                                'duration-300',
                                                                isActive
                                                                    ? [
                                                                        'scale-125',
                                                                        'bg-accent',
                                                                        'shadow-[0_0_0_4px]',
                                                                        'shadow-accent/10',
                                                                    ].join(' ')
                                                                    : [
                                                                        'bg-muted-foreground/30',
                                                                        'group-hover:bg-accent/50',
                                                                    ].join(' '),
                                                            ].join(' ')}
                                                        />

                                                        <div
                                                            className={[
                                                                'min-w-0 flex-1',
                                                            ].join(' ')}
                                                        >
                                                            <div
                                                                className={[
                                                                    'flex',
                                                                    'items-center',
                                                                    'justify-between',
                                                                    'gap-4',
                                                                ].join(' ')}
                                                            >
                                                                <span
                                                                    className={[
                                                                        'text-sm font-semibold',
                                                                        'transition-colors',
                                                                        'duration-200',
                                                                        isActive
                                                                            ? 'text-foreground'
                                                                            : [
                                                                                'text-muted-foreground',
                                                                                'group-hover:text-foreground',
                                                                            ].join(' '),
                                                                    ].join(' ')}
                                                                >
                                                                    {experience.company}
                                                                </span>

                                                                <ArrowUpRight
                                                                    size={15}
                                                                    aria-hidden="true"
                                                                    className={[
                                                                        'shrink-0',
                                                                        'transition-all',
                                                                        'duration-200',
                                                                        isActive
                                                                            ? 'text-accent'
                                                                            : 'text-muted-foreground/30',
                                                                        'group-hover:-translate-y-0.5',
                                                                        'group-hover:translate-x-0.5',
                                                                    ].join(' ')}
                                                                />
                                                            </div>

                                                            <span
                                                                className={[
                                                                    'mt-1 block',
                                                                    'text-xs',
                                                                    'text-muted-foreground',
                                                                ].join(' ')}
                                                            >
                                                                {experience.period}
                                                            </span>
                                                        </div>
                                                    </button>
                                                );
                                            },
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ======================================
                EXPERIENCE DETAIL
            ======================================= */}
                        <div className="min-w-0 max-w-full">
                            <ExperienceDetail
                                key={activeExperience.id}
                                experience={activeExperience}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}