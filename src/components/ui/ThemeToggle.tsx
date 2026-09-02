import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
}

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

    useEffect(() => {
        document.documentElement.classList.toggle(
            'dark',
            theme === 'dark',
        );

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light',
        );
    };

    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={[
                'fixed right-5 bottom-5 z-50',
                'flex h-11 w-11 items-center justify-center',
                'rounded-full border border-border',
                'bg-card text-foreground shadow-lg',
                'transition-all duration-200',
                'hover:-translate-y-0.5 hover:shadow-xl',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-accent focus-visible:ring-offset-2',
                'focus-visible:ring-offset-background',
                'sm:right-6 sm:bottom-6',
            ].join(' ')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                <Sun size={18} aria-hidden="true" />
            ) : (
                <Moon size={18} aria-hidden="true" />
            )}
        </button>
    );
}