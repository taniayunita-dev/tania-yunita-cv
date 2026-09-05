import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Container } from '@/components/ui/Container';
import { profile } from '@/features/profile/data/profile.data';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={[
            'fixed inset-x-0 top-0 z-50',
            'px-3 sm:px-6 lg:px-8',
            'transition-all duration-500 ease-in-out',
            isScrolled ? 'pt-2' : 'pt-4',
        ].join(' ')}>
            <Container className="px-0 sm:px-0 lg:px-0">
                <div className="rounded-4xl border border-border/70 bg-background/85 shadow-xl backdrop-blur-xl ">
                    {/* Desktop / Mobile Header */}
                    <div className="flex h-14 items-center justify-between px-3 sm:h-16 sm:px-4 lg:px-5">
                        {/* Logo */}
                        <a
                            href="#top"
                            className="group flex items-center gap-2.5"
                            aria-label={`${profile.name} - back to top`}
                        >
                            <span
                                aria-hidden="true"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[10px] font-bold tracking-tight text-primary-foreground transition-transform duration-200 group-hover:scale-105 sm:h-9 sm:w-9"
                            >
                                {profile.name
                                    .split(' ')
                                    .map((name) => name[0])
                                    .slice(0, 2)
                                    .join('')}
                            </span>

                            <span className="text-sm font-semibold tracking-tight text-foreground sm:text-[15px]">
                                {profile.name}
                            </span>

                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-accent"
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <nav
                            className="hidden items-center gap-0.5 md:flex"
                            aria-label="Primary navigation"
                        >
                            {navItems.map((item) => {
                                const isContact = item.label === 'Contact';

                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={
                                            isContact
                                                ? [
                                                    'ml-3 inline-flex items-center gap-1.5',
                                                    'rounded-xl bg-primary px-4 py-2',
                                                    'text-sm font-medium text-primary-foreground',
                                                    'transition-all duration-200',
                                                    'hover:-translate-y-0.5 hover:shadow-md',
                                                    'focus-visible:outline-none focus-visible:ring-2',
                                                    'focus-visible:ring-accent focus-visible:ring-offset-2',
                                                    'focus-visible:ring-offset-background',
                                                ].join(' ')
                                                : [
                                                    'rounded-lg px-3 py-2',
                                                    'text-md font-medium text-muted-foreground',
                                                    'transition-colors duration-200',
                                                    'hover:bg-card hover:text-foreground',
                                                    'focus-visible:outline-none focus-visible:ring-2',
                                                    'focus-visible:ring-accent',
                                                ].join(' ')
                                        }
                                    >
                                        {item.label}

                                        {isContact && (
                                            <ArrowUpRight
                                                size={15}
                                                aria-hidden="true"
                                                className="transition-transform duration-200 group-hover:translate-x-0.5"
                                            />
                                        )}
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className={[
                                'inline-flex h-10 w-10 items-center justify-center rounded-xl',
                                'border border-border/70 bg-card/70 text-foreground',
                                'transition-colors duration-200',
                                'hover:bg-card',
                                'focus-visible:outline-none focus-visible:ring-2',
                                'focus-visible:ring-accent',
                                'md:hidden',
                            ].join(' ')}
                            aria-label={
                                isMenuOpen
                                    ? 'Close navigation menu'
                                    : 'Open navigation menu'
                            }
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                            onClick={() => setIsMenuOpen((current) => !current)}
                        >
                            {isMenuOpen ? (
                                <X size={19} aria-hidden="true" />
                            ) : (
                                <Menu size={19} aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav
                            id="mobile-navigation"
                            className="border-t border-border/70 px-3 py-3 md:hidden"
                            aria-label="Mobile navigation"
                        >
                            <div className="flex flex-col gap-1">
                                {navItems.map((item) => {
                                    const isContact = item.label === 'Contact';

                                    return (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={handleNavClick}
                                            className={
                                                isContact
                                                    ? [
                                                        'mt-1 flex items-center justify-between',
                                                        'rounded-xl bg-primary px-4 py-3',
                                                        'text-sm font-medium text-primary-foreground',
                                                    ].join(' ')
                                                    : [
                                                        'rounded-xl px-4 py-3',
                                                        'text-sm font-medium text-muted-foreground',
                                                        'transition-colors duration-200',
                                                        'hover:bg-card hover:text-foreground',
                                                    ].join(' ')
                                            }
                                        >
                                            <span>{item.label}</span>

                                            {isContact && (
                                                <ArrowUpRight
                                                    size={16}
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </a>
                                    );
                                })}
                            </div>
                        </nav>
                    )}
                </div>
            </Container>
        </header >
    );
}