import type { AnchorHTMLAttributes } from 'react';

type ButtonLinkVariant = 'primary' | 'secondary' | 'ghost';
type ButtonLinkSize = 'sm' | 'md' | 'lg';

interface ButtonLinkProps
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonLinkVariant;
    size?: ButtonLinkSize;
}

const variantStyles: Record<ButtonLinkVariant, string> = {
    primary:
        'bg-primary text-primary-foreground hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent',

    secondary:
        'border border-border bg-card text-card-foreground hover:bg-card focus-visible:ring-2 focus-visible:ring-accent',

    ghost:
        'text-foreground hover:bg-card focus-visible:ring-2 focus-visible:ring-accent',
};

const sizeStyles: Record<ButtonLinkSize, string> = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
};

export function ButtonLink({
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonLinkProps) {
    return (
        <a
            className={[
                'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
                'transition-opacity duration-200',
                'focus-visible:outline-none',
                variantStyles[variant],
                sizeStyles[size],
                className,
            ].join(' ')}
            {...props}
        />
    );
}