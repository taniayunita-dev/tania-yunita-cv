

import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { useTranslation } from '@/hooks/useTranslation';

export function EngineeringApproachSection() {



  const { t } = useTranslation();
  return (
    <Section
      eyebrow={t.howIBuild.eyebrow}
      title={t.howIBuild.heading}
      description={t.howIBuild.subtext}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.howIBuild.principles.map((approach) => {
          const Icon = approach.icon;

          // console.log(Icon);

          return (
            <Card
              key={approach.title}
              className="p-6 sm:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
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
                {approach.desc}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}