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
    <div className="flex min-h-screen flex-col bg-background">
      <Header sections={sections} />
      <main className="container mx-auto w-full max-w-7xl flex-1 px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-28">
          <ProfileSection id="profile" data={profileData} />
          <SkillsSection
            id="skills"
            skills={skillsData}
            experienceDescription={experienceDescriptionForAI}
            existingSkills={existingSkillsForAI}
          />
          <ExperienceSection id="experience" experience={experienceData} />
          <ProjectsSection id="projects" projects={projectsData} />
          <CertificationsSection
            id="certifications"
            certifications={certificationsData}
          />
          <EducationSection id="education" education={educationData} />
        </div>
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {profileData.name}. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}
