import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
}

export function SEO({
    title,
    description,
}: SEOProps) {
    useEffect(() => {
        document.title = title;

        const descriptionTag = document.querySelector(
            'meta[name="description"]',
        );

        if (descriptionTag) {
            descriptionTag.setAttribute('content', description);
        }
    }, [title, description]);

    return null;
}