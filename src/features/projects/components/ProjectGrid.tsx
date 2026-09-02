import { projects } from "../data/projects.data";

import { ProjectCard } from './ProjectCard';

export function ProjectGrid() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    featured={index === 0}
                />
            ))}
        </div>
    );
}