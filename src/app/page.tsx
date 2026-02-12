import { Header } from "@/components/devops-folio/header";
import { ProfileSection } from "@/components/devops-folio/profile-section";
import { SkillsSection } from "@/components/devops-folio/skills-section";
import { ExperienceSection } from "@/components/devops-folio/experience-section";
import { ProjectsSection } from "@/components/devops-folio/projects-section";
import { CertificationsSection } from "@/components/devops-folio/certifications-section";
import { EducationSection } from "@/components/devops-folio/education-section";
import {
  profileData,
  skillsData,
  experienceData,
  projectsData,
  certificationsData,
  educationData,
  experienceDescriptionForAI,
  existingSkillsForAI,
} from "@/lib/portfolio-data";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const sections = [
    { id: "profile", title: "Profile" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "certifications", title: "Certifications" },
    { id: "education", title: "Education" },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header sections={sections} />
      <main className="container mx-auto max-w-5xl px-4 py-8 pt-24 sm:pt-28">
        <ProfileSection id="profile" data={profileData} />
        <SectionSeparator />
        <SkillsSection
          id="skills"
          skills={skillsData}
          experienceDescription={experienceDescriptionForAI}
          existingSkills={existingSkillsForAI}
        />
        <SectionSeparator />
        <ExperienceSection id="experience" experience={experienceData} />
        <SectionSeparator />
        <ProjectsSection id="projects" projects={projectsData} />
        <SectionSeparator />
        <CertificationsSection
          id="certifications"
          certifications={certificationsData}
        />
        <SectionSeparator />
        <EducationSection id="education" education={educationData} />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {profileData.name}. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}

const SectionSeparator = () => <Separator className="my-12 bg-border/50 md:my-16" />;
