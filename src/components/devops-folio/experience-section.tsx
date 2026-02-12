import type { experienceData as ExperienceDataType } from "@/lib/portfolio-data";
import { Briefcase, CheckCircle2 } from "lucide-react";

type ExperienceSectionProps = {
  id: string;
  experience: typeof ExperienceDataType;
};

export function ExperienceSection({ id, experience }: ExperienceSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-headline text-3xl font-bold text-primary">
        Professional Experience
      </h2>
      <div className="mt-8 space-y-12">
        {experience.map((job, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{job.period}</p>
                <h3 className="mt-1 font-headline text-xl font-bold text-accent-foreground">
                  {job.role}
                </h3>
                <p className="font-semibold text-foreground/80">
                  {job.company}
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 pl-4">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-foreground/80">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
