import type { ImagePlaceholder } from "./placeholder-images";
import { PlaceHolderImages } from "./placeholder-images";

const findImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((img) => img.id === id);

export const profileData = {
  name: "Alex Doe",
  title: "Senior DevOps Engineer",
  summary:
    "Experienced DevOps Engineer with a passion for automating and optimizing mission-critical deployments in AWS, Azure, and GCP. Proven track record of building and maintaining CI/CD pipelines, managing containerized applications with Docker and Kubernetes, and implementing robust monitoring and logging solutions.",
  profilePicture: findImage("profile"),
  contact: {
    email: "alex.doe@email.com",
    phone: "+1 (555) 123-4567",
    linkedin: "https://linkedin.com/in/alexdoe",
  },
};

export const skillsData = {
  "Cloud Platforms": ["AWS", "Azure", "GCP"],
  "DevOps & CI/CD": ["Jenkins", "GitLab CI", "ArgoCD", "GitHub Actions"],
  "Infrastructure & IaC": ["Terraform", "Ansible", "CloudFormation"],
  Containers: ["Docker", "Kubernetes", "Helm"],
  Linux: ["Ubuntu", "CentOS", "Bash Scripting"],
  "Monitoring & Logs": ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  "Automation & Scripting": ["Python", "Go", "PowerShell"],
  Networking: ["VPC", "DNS", "Load Balancing", "Firewalls"],
};

export const projectsData = [
  {
    image: findImage("project1"),
    title: "Kubernetes CI/CD Pipeline",
    description:
      "Designed and implemented a fully automated CI/CD pipeline for a microservices-based application on Kubernetes using Jenkins, Docker, and Helm. Reduced deployment time by 80% and improved developer productivity.",
    technologies: ["Kubernetes", "Jenkins", "Docker", "Helm", "AWS EKS"],
  },
  {
    image: findImage("project2"),
    title: "Infrastructure as Code for Hybrid Cloud",
    description:
      "Authored Terraform modules to provision and manage infrastructure across AWS and Azure, ensuring consistency and enabling disaster recovery capabilities. This project standardized environments and reduced manual configuration errors.",
    technologies: ["Terraform", "AWS", "Azure", "Packer"],
  },
  {
    image: findImage("project3"),
    title: "Centralized Logging & Monitoring Solution",
    description:
      "Deployed and configured the ELK Stack (Elasticsearch, Logstash, Kibana) along with Prometheus and Grafana to provide centralized logging and real-time monitoring for over 200 servers, improving system observability and incident response time.",
    technologies: ["ELK Stack", "Prometheus", "Grafana", "Filebeat", "Ansible"],
  },
];

export const experienceData = [
  {
    role: "Senior DevOps Engineer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    achievements: [
      "Led the migration of monolithic applications to a microservices architecture on Kubernetes.",
      "Managed a multi-cloud environment (AWS, Azure) using Terraform and Ansible.",
      "Implemented GitOps workflows with ArgoCD for continuous deployment.",
      "Mentored junior engineers and established best practices for CI/CD and IaC.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Cloud Innovators LLC",
    period: "2017 - 2020",
    achievements: [
      "Built and maintained CI/CD pipelines using Jenkins for various development teams.",
      "Automated infrastructure provisioning on AWS with CloudFormation.",
      "Managed Docker container orchestration and registry.",
      "Developed Python scripts for automation of routine administrative tasks.",
    ],
  },
  {
    role: "System Administrator",
    company: "Data Corp.",
    period: "2015 - 2017",
    achievements: [
      "Managed a large-scale Linux server environment.",
      "Handled server patching, user management, and performance tuning.",
      "Implemented a Nagios-based monitoring system.",
    ],
  },
];

export const certificationsData = [
  {
    name: "AWS Certified DevOps Engineer - Professional",
    date: "Issued: June 2021",
    id: "Credential ID: XYZ123ABC",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    date: "Issued: March 2020",
    id: "Credential ID: CKA-20-LFW12345",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    date: "Issued: August 2019",
    id: "Credential ID: HCTA-9876",
  },
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2011 - 2015",
    details: "CGPA: 3.8/4.0",
  },
];

export const experienceDescriptionForAI = experienceData
  .map(
    (exp) =>
      `Role: ${exp.role} at ${exp.company} (${exp.period}). Achievements: ${exp.achievements.join(". ")}`
  )
  .join("\n");

export const existingSkillsForAI = Object.values(skillsData).flat();
