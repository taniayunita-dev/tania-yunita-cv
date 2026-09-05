import { useEffect, useState } from 'react';
import { profile } from '@/features/profile/data/profile.data';
import { Container } from '@/components/ui/Container';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslation } from '@/hooks/useTranslation';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { language, toggleLanguage } = useLanguage();
    const { t } = useTranslation();

    useEffect(() => {
        if (!isMenuOpen) {
            return;
        }

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
        <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <a
                        href="#top"
                        className="text-sm font-semibold tracking-tight text-foreground"
                        aria-label={`${profile.name} - back to top`}
                    >
                        {profile.name}
                    </a>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden items-center gap-1 md:flex"
                        aria-label="Primary navigation"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div
                        aria-hidden="true"
                        className="mx-2 h-5 w-px bg-border"
                    />

                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className={[
                            'inline-flex items-center gap-2',
                            'rounded-lg border border-border',
                            'bg-background/80',
                            'px-3 py-2',
                            'text-xs font-semibold',
                            'text-foreground',
                            'transition-all duration-200',
                            'hover:border-accent/30',
                            'hover:bg-card',
                        ].join(' ')}
                        aria-label={`${t.language.switchTo}: ${language === 'en' ? 'Bahasa Indonesia' : 'English'
                            }`}
                    >
                        <Languages
                            size={15}
                            aria-hidden="true"
                        />

                        <span
                            className={
                                language === 'en'
                                    ? 'text-accent'
                                    : 'text-muted-foreground'
                            }
                        >
                            EN
                        </span>

                        <span
                            aria-hidden="true"
                            className="text-border"
                        >
                            /
                        </span>

                        <span
                            className={
                                language === 'id'
                                    ? 'text-accent'
                                    : 'text-muted-foreground'
                            }
                        >
                            ID
                        </span>
                    </button>


                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-card md:hidden"
                        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((current) => !current)}
                    >
                        <span className="sr-only">
                            {isMenuOpen ? 'Close menu' : 'Open menu'}
                        </span>

                        <span className="flex flex-col gap-1.5" aria-hidden="true">
                            <span
                                className={[
                                    'block h-0.5 w-5 bg-current transition-transform',
                                    isMenuOpen && 'translate-y-2 rotate-45',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            />

                            <span
                                className={[
                                    'block h-0.5 w-5 bg-current transition-opacity',
                                    isMenuOpen && 'opacity-0',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            />

                            <span
                                className={[
                                    'block h-0.5 w-5 bg-current transition-transform',
                                    isMenuOpen && '-translate-y-2 -rotate-45',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            />
                        </span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav
                        id="mobile-navigation"
                        className="border-t border-border py-4 md:hidden"
                        aria-label="Mobile navigation"
                    >
                        <div className="flex flex-col">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={handleNavClick}
                                    className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-card hover:text-foreground"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                )}
            </Container>
        </header >
    );
}