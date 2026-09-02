import { experiences } from '../data/experience.data';

import { ExperienceCard } from './ExperienceCard';

export function ExperienceList() {
    return (
        <div className="space-y-10">
            {experiences.map((experience) => (
                <ExperienceCard
                    key={experience.id}
                    experience={experience}
                />
            ))}
        </div>
    );
}