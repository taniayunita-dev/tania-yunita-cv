import {
  Accessibility,
  Boxes,
  Gauge,
  Smartphone,
  Type,
} from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

const approaches = [
  {
    title: 'Component-driven',
    description:
      'I break interfaces into reusable components to keep the UI consistent and the codebase easier to maintain.',
    icon: Boxes,
  },
  {
    title: 'Type-safe',
    description:
      'I use TypeScript to make component props, application data, and API responses easier to understand and safer to work with.',
    icon: Type,
  },
  {
    title: 'Responsive',
    description:
      'I build interfaces with different screen sizes in mind, from mobile layouts to larger desktop experiences.',
    icon: Smartphone,
  },
  {
    title: 'Accessible',
    description:
      'I consider semantic HTML, keyboard navigation, focus states, readable content, and accessible interactions.',
    icon: Accessibility,
  },
  {
    title: 'Performance-minded',
    description:
      'I pay attention to loading behavior, unnecessary rendering, image optimization, and keeping the user experience responsive.',
    icon: Gauge,
  },
];

export function EngineeringApproachSection() {
  return (
    <Section
      eyebrow="How I build"
      title="A practical approach to frontend engineering"
      description="Good frontend development is about more than translating a design into code. I focus on creating interfaces that are useful for users and maintainable for developers."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {approaches.map((approach) => {
          const Icon = approach.icon;

          return (
            <Card
              key={approach.title}
              className="p-6 sm:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-zinc-50">
                <Icon
                  size={19}
                  className="text-accent"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight">
                {approach.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {approach.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}