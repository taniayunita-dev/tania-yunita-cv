import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Container } from '@/components/ui/Container';
import { SEO } from '@/components/seo/SEO';

export function NotFoundPage() {
    return (
        <section className="py-32">
            <SEO
                title="Page Not Found | Frontend Developer"
                description="The page you're looking for doesn't exist or may have been moved."
            />
            <Container>
                <div className="mx-auto max-w-xl text-center">
                    <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                        404
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                        Page not found
                    </h1>

                    <p className="mt-4 leading-7 text-muted-foreground">
                        The page you&apos;re looking for doesn&apos;t exist or may have
                        been moved.
                    </p>

                    <Link
                        to="/"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                    >
                        <ArrowLeft size={16} aria-hidden="true" />
                        Back to home
                    </Link>
                </div>
            </Container>
        </section>
    );
}