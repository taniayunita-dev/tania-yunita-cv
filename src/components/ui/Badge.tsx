import type { PropsWithChildren } from 'react';

interface BadgeProps extends PropsWithChildren {
    className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
    return (
        <span
            className={[
                'inline-flex items-center rounded-full',
                'border border-border bg-card px-3 py-1',
                'text-xs font-medium text-muted-foreground',
                className,
            ].join(' ')}
        >
            {children}
        </span>
    );
}