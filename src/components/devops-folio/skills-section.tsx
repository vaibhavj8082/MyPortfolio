import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { skillsData as SkillsDataType } from "@/lib/portfolio-data";

type SkillsSectionProps = {
  id: string;
  skills: typeof SkillsDataType;
};

export function SkillsSection({ id, skills }: SkillsSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-headline text-4xl font-bold text-primary">
        Technical Skills
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card
            key={category}
            className="transform-gpu rounded-xl border-border/20 bg-secondary/30 text-left shadow-lg shadow-background/20 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
          >
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent-foreground">
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/30 bg-background/70 px-4 py-2 text-base font-medium text-foreground/90 transition-all duration-200 hover:scale-105 hover:bg-primary/20 hover:text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
