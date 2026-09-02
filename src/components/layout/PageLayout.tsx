import type { PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function PageLayout({ children }: PropsWithChildren) {
    return (
        <div id="top" className="min-h-screen">
            <a
                href="#main-content"
                className="sr-only z-100 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
            >
                Skip to content
            </a>

            <Navbar />

            <main id="main-content">{children}</main>

            <Footer />
        </div>
    );
}