import { profile } from '@/features/profile/data/profile.data';
import { Container } from '@/components/ui/Container';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border">
            <Container>
                <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-foreground">
                            {profile.name}
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {profile.role}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href={profile.social.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            GitHub
                        </a>

                        <a
                            href={profile.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            LinkedIn
                        </a>

                        <a
                            href={`mailto:${profile.email}`}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Email
                        </a>
                    </div>
                </div>

                <div className="border-t border-border py-6">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} {profile.name}. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}