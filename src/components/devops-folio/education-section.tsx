import type { educationData as EducationDataType } from "@/lib/portfolio-data";
import { GraduationCap } from "lucide-react";

type EducationSectionProps = {
  id: string;
  education: typeof EducationDataType;
};

export function EducationSection({ id, education }: EducationSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-headline text-3xl font-bold text-primary">
        Educational Background
      </h2>
      <div className="mt-8 space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md hover:shadow-primary/10"
          >
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold text-accent-foreground">
                {edu.degree}
              </h3>
              <p className="font-semibold text-foreground/80">
                {edu.institution}
              </p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
              <p className="text-sm text-muted-foreground">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
