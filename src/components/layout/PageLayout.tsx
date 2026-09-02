import type { PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Navbar as Navbar2 } from './Navbar2';
import { ThemeToggle } from '@/components/ui/ThemeToggle';


export function PageLayout({ children }: PropsWithChildren) {
    return (
        <div id="top" className="min-h-screen">
            <a
                href="#main-content"
                className="sr-only z-100 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
            >
                Skip to content
            </a>

            {/* <Navbar /> */}
            <Navbar2 />

            <main id="main-content">{children}</main>
            <ThemeToggle />
            <Footer />
        </div>
    );
}