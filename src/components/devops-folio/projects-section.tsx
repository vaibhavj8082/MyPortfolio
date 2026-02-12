import Image from "next/image";
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

type ProjectsSectionProps = {
  id: string;
  projects: typeof ProjectsDataType;
};

export function ProjectsSection({ id, projects }: ProjectsSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-headline text-3xl font-bold text-primary">
        Projects Portfolio
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group flex transform-gpu flex-col overflow-hidden bg-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          >
            {project.image && (
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline text-xl text-accent-foreground">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
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
