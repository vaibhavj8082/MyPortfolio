import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AiSkillSuggester } from "./ai-skill-suggester";
import type { skillsData as SkillsDataType } from "@/lib/portfolio-data";

type SkillsSectionProps = {
  id: string;
  skills: typeof SkillsDataType;
  existingSkills: string[];
  experienceDescription: string;
};

export function SkillsSection({
  id,
  skills,
  existingSkills,
  experienceDescription,
}: SkillsSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-center font-headline text-3xl font-bold text-primary">
        Technical Skills
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card
            key={category}
            className="transform-gpu border-border/80 bg-secondary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
          >
            <CardHeader>
              <CardTitle className="font-headline text-xl text-accent-foreground">
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/50 bg-background/50 text-base text-foreground/90 transition-all duration-200 hover:scale-110 hover:bg-primary/20 hover:text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <AiSkillSuggester
        existingSkills={existingSkills}
        experienceDescription={experienceDescription}
      />
    </section>
  );
}
