import type { certificationsData as CertificationsDataType } from "@/lib/portfolio-data";
import { Award } from "lucide-react";

type CertificationsSectionProps = {
  id: string;
  certifications: typeof CertificationsDataType;
};

export function CertificationsSection({
  id,
  certifications,
}: CertificationsSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-center font-headline text-3xl font-bold text-primary">
        Certifications
      </h2>
      <div className="mt-8 space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md hover:shadow-primary/10"
          >
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold text-accent-foreground">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
              <p className="text-sm text-muted-foreground">{cert.id}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
