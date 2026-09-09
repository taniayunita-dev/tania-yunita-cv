import { Check, ChevronDown, Languages } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { useLanguage } from '@/hooks/useLanguage';

const languages = [
    {
        value: 'en',
        label: 'ENGLISH',
        shortLabel: 'EN',
        flag: '🇬🇧',
    },
    {
        value: 'id',
        label: 'INDONESIAN',
        shortLabel: 'ID',
        flag: '🇮🇩',
    },
] as const;

interface LanguageSwitcherProps {
    mobile?: boolean;
}

export function LanguageSwitcher({
    mobile = false,
}: LanguageSwitcherProps) {
    const { language, setLanguage } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(
        (item) => item.value === language,
    );

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside,
            );
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    const handleLanguageChange = (
        value: (typeof languages)[number]['value'],
    ) => {
        setLanguage(value);
        setIsOpen(false);
    };

    return (
        <div
            ref={containerRef}
            className={[
                'relative',
                mobile ? 'w-full' : '',
            ].join(' ')}
        >
            {/* Mobile label */}
            {mobile ? (
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <Languages
                            size={19}
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />

                        <span>Language</span>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            setIsOpen((current) => !current)
                        }
                        aria-label={`Switch language. Current language: ${currentLanguage?.label}`}
                        aria-expanded={isOpen}
                        aria-haspopup="listbox"
                        className={[
                            'flex h-10 items-center gap-2 w-25',
                            'rounded-full border border-border',
                            'bg-card px-3',
                            'text-sm font-semibold text-foreground',
                            'shadow-sm',
                            'transition-all duration-200',
                            'hover:border-accent/30',
                            'hover:shadow-md',
                            'focus-visible:outline-none',
                            'focus-visible:ring-2',
                            'focus-visible:ring-accent',
                        ].join(' ')}
                    >
                        <span
                            className="text-lg leading-none"
                            aria-hidden="true"
                        >
                            {currentLanguage?.flag}
                        </span>

                        <span>{currentLanguage?.shortLabel}</span>

                        <ChevronDown
                            size={15}
                            aria-hidden="true"
                            className={[
                                'text-accent',
                                'transition-transform duration-200',
                                isOpen ? 'rotate-180' : '',
                            ].join(' ')}
                        />
                    </button>
                </div>
            ) : (
                /* Desktop trigger */
                <button
                    type="button"
                    onClick={() =>
                        setIsOpen((current) => !current)
                    }
                    aria-label={`Switch language. Current language: ${currentLanguage?.label}`}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    className={[
                        'flex h-11 w-30 items-center gap-3',
                        'rounded-full border border-border',
                        'bg-card px-4',
                        'text-sm font-semibold text-foreground',
                        'shadow-sm',
                        'transition-all duration-200',
                        'hover:border-accent/30',
                        'hover:shadow-md',
                        'focus-visible:outline-none',
                        'focus-visible:ring-2',
                        'focus-visible:ring-accent',
                    ].join(' ')}
                >
                    <span
                        className="text-lg leading-none"
                        aria-hidden="true"
                    >
                        {currentLanguage?.flag}
                    </span>

                    <span>{currentLanguage?.shortLabel}</span>

                    <ChevronDown
                        size={15}
                        aria-hidden="true"
                        className={[
                            'text-accent',
                            'transition-transform duration-200',
                            isOpen ? 'rotate-180' : '',
                        ].join(' ')}
                    />
                </button>
            )}

            {/* Dropdown */}
            {isOpen && (
                <div
                    role="listbox"
                    aria-label="Language options"
                    className={[
                        'absolute z-[60]',
                        'w-52',
                        'overflow-hidden',
                        'rounded-xl border border-border',
                        'bg-card',
                        'p-2',
                        'shadow-xl shadow-black/10',

                        mobile
                            ? 'right-0 top-[calc(100%+8px)]'
                            : 'right-0 top-[calc(100%+8px)]',
                    ].join(' ')}
                >
                    {languages.map((item) => {
                        const isActive = item.value === language;

                        return (
                            <button
                                key={item.value}
                                type="button"
                                role="option"
                                aria-selected={isActive}
                                onClick={() => {
                                    handleLanguageChange(item.value);
                                    // console.log(item.value);
                                }
                                }
                                className={[
                                    'flex w-full items-center gap-3',
                                    'rounded-lg px-3 py-3',
                                    'text-left',
                                    'transition-colors duration-150',
                                    isActive
                                        ? 'bg-accent/5'
                                        : 'hover:bg-muted/10',
                                ].join(' ')}
                            >
                                <span
                                    className="text-xl leading-none"
                                    aria-hidden="true"
                                >
                                    {item.flag}
                                </span>

                                <span
                                    className={[
                                        'flex-1 text-sm font-semibold',
                                        isActive
                                            ? 'text-foreground'
                                            : 'text-muted-foreground',
                                    ].join(' ')}
                                >
                                    {item.label}
                                </span>

                                {isActive && (
                                    <Check
                                        size={20}
                                        strokeWidth={2.5}
                                        className="text-emerald-600"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}