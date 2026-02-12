import type { experienceData as ExperienceDataType } from "@/lib/portfolio-data";
import { Briefcase, CheckCircle2 } from "lucide-react";

type ExperienceSectionProps = {
  id: string;
  experience: typeof ExperienceDataType;
};

export function ExperienceSection({ id, experience }: ExperienceSectionProps) {
  if (experience.length === 1) {
    const job = experience[0];
    return (
      <section id={id} className="scroll-mt-20">
        <h2 className="text-center font-headline text-3xl font-bold text-primary">
          Professional Experience
        </h2>
        <div className="relative mt-12 flex justify-center">
          <div className="w-full px-4 md:w-3/4 lg:w-2/3">
            <div className="rounded-lg border border-border bg-card p-6 shadow-md transition-shadow hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center gap-4">
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
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-center font-headline text-3xl font-bold text-primary">
        Professional Experience
      </h2>
      <div className="relative mt-12">
        <div
          className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"
          aria-hidden="true"
        ></div>
        {experience.map((job, index) => (
          <div key={index} className="relative mb-12">
            <div className="flex items-center justify-center">
              <div className="absolute left-1/2 top-1.5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-secondary ring-8 ring-background">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } w-full`}
            >
              <div
                className={`w-full px-4 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="rounded-lg border border-border bg-card p-6 shadow-md transition-shadow hover:shadow-lg hover:shadow-primary/10">
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                  <h3 className="mt-1 font-headline text-xl font-bold text-accent-foreground">
                    {job.role}
                  </h3>
                  <p className="font-semibold text-foreground/80">
                    {job.company}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
