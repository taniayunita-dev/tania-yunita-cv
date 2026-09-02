import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export function Card({
    children,
    className = '',
    ...props
}: CardProps) {
    return (
        <div
            className={[
                'rounded-2xl border border-border bg-card',
                'text-card-foreground',
                className,
            ].join(' ')}
            {...props}
        >
            {children}
        </div>
    );
}