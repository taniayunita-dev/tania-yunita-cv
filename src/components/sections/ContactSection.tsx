import {
    ArrowUpRight,
    GitBranchIcon as Github,
    Link as Linkedin,
    Mail,
} from 'lucide-react';

import { profile } from '@/features/profile/data/profile.data';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Section } from '@/components/ui/Section';

const contactLinks = [
    {
        label: 'Email',
        description: 'Send me an email',
        href: `mailto:${profile.email}`,
        icon: Mail,
    },
    {
        label: 'WhatsApp',
        description: 'Chat me on whatsApp',
        href: `https://wa.me/${profile.whatsapp}`,
        icon: Mail,
    },
    {
        label: 'GitHub',
        description: 'View my code and projects',
        href: profile.social.github,
        icon: Github,
        external: true,
    },
    {
        label: 'LinkedIn',
        description: 'Connect with me professionally',
        href: profile.social.linkedin,
        icon: Linkedin,
        external: true,
    },
];

export function ContactSection() {
    return (
        <Section
            id="contact"
            eyebrow="Contact"
            title="Let's work together"
            description="I'm currently open to Frontend Developer opportunities and interesting projects."
        >
            <div className="overflow-hidden rounded-3xl border border-border bg-primary">
                <div className="p-8 sm:p-10 lg:p-12">
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium text-zinc-400">
                            {profile.availability}
                        </p>

                        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
                            Have a project or opportunity in mind?
                        </h3>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                            Whether you&apos;re looking for a frontend developer or want to
                            discuss a project, I&apos;d be happy to hear from you.
                        </p>

                        <div className="mt-8">
                            <ButtonLink
                                href={`mailto:${profile.email}`}
                                variant="secondary"
                                size="lg"
                                className="group"
                            >
                                Get in touch
                                <ArrowUpRight
                                    size={17}
                                    aria-hidden="true"
                                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </ButtonLink>
                        </div>
                    </div>

                    <div className="mt-12 grid border-t border-zinc-700 sm:grid-cols-4">
                        {contactLinks.map((link) => {
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
                                        {link.description}
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