import {
    ArrowUpRight,
} from 'lucide-react';

import { ButtonLink } from '@/components/ui/ButtonLink';
import { Section } from '@/components/ui/Section';
import { useTranslation } from '@/hooks/useTranslation';


export function ContactSection() {
    const { t } = useTranslation();
    return (
        <Section
            id="contact"
            eyebrow={t.contact.eyebrow}
            title={t.contact.heading}
        // description="I'm currently open to Frontend Developer opportunities and interesting projects."
        >
            <div className="overflow-hidden rounded-3xl border border-border bg-primary">
                <div className="p-8 sm:p-10 lg:p-12">
                    <div className="max-w-3xl">
                        {/* <p className="text-sm font-medium text-zinc-400">
                            I'm currently open to Frontend Developer opportunities
                        </p> */}

                        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
                            {t.contact.subheading}
                        </h3>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                            {t.contact.subtext}
                        </p>

                        <div className="mt-8">
                            <ButtonLink
                                href={`mailto:${t.contact.email}`}
                                variant="secondary"
                                size="lg"
                                className="group"
                            >
                                {t.contact.cta}
                                <ArrowUpRight
                                    size={17}
                                    aria-hidden="true"
                                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </ButtonLink>
                        </div>
                    </div>

                    <div className="mt-12 grid border-t border-zinc-700 sm:grid-cols-3">
                        {t.contact?.contactLinks?.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    {...(link.external
                                        ? {
                                            target: '_blank',
                                            rel: 'noreferrer',
                                        }
                                        : {})}
                                    className="group border-b border-zinc-700 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            size={18}
                                            className="text-zinc-400"
                                            aria-hidden="true"
                                        />

                                        <span className="text-sm font-medium text-primary-foreground">
                                            {link.label}
                                        </span>

                                        <ArrowUpRight
                                            size={15}
                                            className="ml-auto text-zinc-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <p className="mt-2 text-sm text-zinc-500">
                                        {link.desc}
                                    </p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}