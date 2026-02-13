import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { projectsData as ProjectsDataType } from "@/lib/portfolio-data";
import { ArrowRightCircle } from "lucide-react";

type ProjectsSectionProps = {
  id: string;
  projects: typeof ProjectsDataType;
};

export function ProjectsSection({ id, projects }: ProjectsSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-headline text-3xl font-bold text-primary">
        Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex transform-gpu flex-col bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
          >
            <CardHeader>
              <CardTitle className="font-headline text-xl text-accent-foreground">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <ul className="space-y-2 pl-2">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRightCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-foreground/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-accent text-accent-foreground/80"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}