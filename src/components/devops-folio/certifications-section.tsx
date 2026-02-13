import type { certificationsData as CertificationsDataType } from "@/lib/portfolio-data";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <h2 className="font-headline text-3xl font-bold text-primary">
        Certifications
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
          >
            <div className="flex items-start gap-4">
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
            <div className="mt-4 flex justify-end">
              <Button
                asChild
                variant="outline"
                size="sm"
                disabled={!cert.url || cert.url === "#"}
              >
                <Link
                  href={cert.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
