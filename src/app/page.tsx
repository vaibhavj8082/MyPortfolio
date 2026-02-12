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
import { FolioSidebar } from "@/components/devops-folio/folio-sidebar";

export default function Home() {
  const sections = [
    { id: "profile", title: "Profile", icon: "User" },
    { id: "skills", title: "Skills", icon: "Code2" },
    { id: "experience", title: "Experience", icon: "Briefcase" },
    { id: "projects", title: "Projects", icon: "FolderKanban" },
    { id: "certifications", title: "Certifications", icon: "Award" },
    { id: "education", title: "Education", icon: "GraduationCap" },
  ];

  return (
    <FolioSidebar sections={sections} profile={profileData}>
      <main className="flex-1 p-6 sm:p-8 md:p-12">
        <div className="mx-auto max-w-5xl space-y-20">
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
    </FolioSidebar>
  );
}
