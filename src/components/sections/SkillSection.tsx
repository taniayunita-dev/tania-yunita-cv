import { SkillGroups } from "@/features/skills/components/SkillsGroup";
import { Section } from '@/components/ui/Section';

export function SkillsSection() {
    return (
        <Section
            id="skills"
            eyebrow="Skills"
            title="Tools and technologies I work with"
            description="A practical set of frontend technologies and engineering practices I use to build modern web applications."
            className="bg-card"
        >
            <SkillGroups />
        </Section>
    );
}