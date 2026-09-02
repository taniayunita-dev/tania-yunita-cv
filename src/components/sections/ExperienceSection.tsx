import { ExperienceList } from '@/features/experience/components/ExperienceList';
import { Section } from '@/components/ui/Section';

export function ExperienceSection() {
    return (
        <Section
            id="experience"
            eyebrow="Experience"
            title="Professional experience"
            description="A selection of my professional frontend development experience."
            className="bg-zinc-50"
        >
            <div className="max-w-4xl">
                <ExperienceList />
            </div>
        </Section>
    );
}