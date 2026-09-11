
import { ContactSection, EngineeringApproachSection, } from '@/components/sections';
import { SEO } from '@/components/seo/SEO';
// import { HeroSection2 } from '@/components/sections/HeroSection2';
import { HeroSection3 } from '@/components/sections/HeroSection3';
import { About as About2 } from '@/components/sections/AboutSection2';
// import { Experience as Experience2 } from '@/components/sections/ExperienceSection2';
import { Experience as Experience3 } from '@/components/sections/ExperienceSection3';

// import { Projects as Project2 } from '@/components/sections/ProjectsSection2';
import { HowIBuild } from '@/components/sections/HowIBuildSection';
import { Projects } from '@/components/sections/ProjectSection3';

export function HomePage() {
    return (
        <>
            <SEO
                title="Tania Yunita | Frontend Developer | React & TypeScript"
                description="Frontend Developer focused on building responsive, maintainable web experiences with React and TypeScript."
            />
            {/* <HeroSection /> */}
            {/* <HeroSection2 /> */}
            <HeroSection3 />
            {/* <AboutSection /> */}
            <About2 />
            {/* <ExperienceSection /> */}
            {/* <Experience2 /> */}
            <Experience3 />
            {/* <Project2 /> */}
            <Projects />
            <HowIBuild />
            {/* <ProjectSection /> */}
            <EngineeringApproachSection />
            {/* <SkillsSection /> */}
            <ContactSection />

            {/* Skills akan ditambahkan nanti */}
            {/* Contact akan ditambahkan nanti */}
        </>
    );
}