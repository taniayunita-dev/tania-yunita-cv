export type SkillCategory =
    | 'Frontend'
  | 'UI Engineering'
  | 'API & Data'
  | 'Tools & Workflow';

export interface SkillGroup {
  category: SkillCategory;
  skills: string[];
}