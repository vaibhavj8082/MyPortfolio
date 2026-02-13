import type { experienceData as ExperienceDataType } from "@/lib/portfolio-data";
import { Briefcase, ArrowRightCircle } from "lucide-react";

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
      <div className="mt-12 space-y-16">
        {experience.map((job, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
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
            <ul className="mt-6 space-y-4 pl-4">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-4">
                  <ArrowRightCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
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
