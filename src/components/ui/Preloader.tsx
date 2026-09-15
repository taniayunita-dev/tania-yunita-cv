import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
        }, 1400);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div
            className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-background
        animate-preloader-exit
      "
            role="status"
            aria-label="Loading portfolio"
        >
            <div className="flex flex-col items-center">

                {/* T */}
                <span
                    className="
            text-4xl font-semibold
            tracking-[-0.05em]
            text-foreground
            animate-preloader-scale
          "
                >
                    T
                </span>

                {/* Line */}
                <span
                    className="
            mt-4 h-px
            w-20
            origin-center
            bg-accent
            animate-preloader-line
          "
                />

                {/* Name */}
                <span
                    className="
            mt-4
            text-sm font-semibold
            tracking-[0.18em]
            text-foreground
            uppercase
            animate-preloader-up
          "
                >
                    Tania Yunita
                </span>

                {/* Role */}
                <span
                    className="
            mt-2
            text-[10px] font-medium
            tracking-[0.2em]
            text-muted-foreground
            uppercase
            animate-preloader-up
            [animation-delay:100ms]
          "
                >
                    Frontend Developer
                </span>

            </div>
        </div>
    );
}