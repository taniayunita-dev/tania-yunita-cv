
import { AboutSection, ExperienceSection, HeroSection, ContactSection, ProjectSection, EngineeringApproachSection, SkillsSection } from '@/components/sections';
import { SEO } from '@/components/seo/SEO';

export function HomePage() {
    return (
        <>
            <SEO
                title="Tania Yunita | Frontend Developer | React & TypeScript"
                description="Frontend Developer focused on building responsive, maintainable web experiences with React and TypeScript."
            />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
            <EngineeringApproachSection />
            <SkillsSection />
            <ContactSection />

            {/* Skills akan ditambahkan nanti */}
            {/* Contact akan ditambahkan nanti */}
        </>
    );
}