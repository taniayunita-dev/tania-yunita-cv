import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { skillGroups } from '../data/skills.data';

export function SkillGroups() {
    return (
        <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
                <Card key={group.category} className="p-6 sm:p-7">
                    <h3 className="text-base font-semibold text-foreground">
                        {group.category}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                            <Badge key={skill}>{skill}</Badge>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    );
}