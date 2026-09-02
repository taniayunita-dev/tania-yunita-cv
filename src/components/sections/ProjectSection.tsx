import { ProjectGrid } from "@/features/projects/components/ProjectGrid";
import { Section } from '@/components/ui/Section';

export function ProjectSection() {
    return (
        <Section
            id="projects"
            eyebrow="Projects"
            title="Selected projects"
            description="A selection of projects that demonstrate my approach to building responsive, maintainable frontend applications."
        >
            <ProjectGrid />
        </Section>
    );
}