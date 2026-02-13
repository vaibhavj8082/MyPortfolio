import type { ImagePlaceholder } from "./placeholder-images";
import { PlaceHolderImages } from "./placeholder-images";

const findImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((img) => img.id === id);

export const profileData = {
  name: "Vaibhav Jadhav",
  title: "Aspiring DevOps & Cloud Engineer",
  summary:
    "A motivated and enthusiastic fresher with a solid foundation in computer science and engineering. Eager to launch a career in DevOps, Cloud Engineering, or Linux Administration. Passionate about automation, cloud technologies, and solving complex problems.",
  profilePicture: findImage("profile"),
  contact: {
    email: "vaibhavj7326@gmail.com",
    phone: "+91 9307187326",
    linkedin: "https://linkedin.com/in/vaibhav-jadhav",
  },
};

export const skillsData = {
  "Linux": ["RHEL", "Ubuntu", "NFS", "SELinux", "Storage Management", "User Management", "Permission Management", "Bash Scripting"],
  "Containers": ["Docker", "Dockerfile", "Docker Compose", "Image Registry"],
  "Cloud Platforms": ["AWS", "Azure", "GCP"],
  "DevOps & CI/CD": ["Jenkins", "GitHub Actions"],
  "Infrastructure & IaC": ["Terraform", "Ansible", "CloudFormation"],
  "Kubernetes": ["Pods", "Deployments", "Services", "Namespaces", "Network Policies"],
  "Networking": ["VPC", "DNS", "Load Balancing", "Firewalls"],
  "Automation & Scripting": ["Python", "Go", "PowerShell"],
};

export const projectsData = [
  {
    image: findImage("project1"),
    title: "Containerized Website on AWS",
    description:
      "Deployed a containerized static website on an AWS EC2 instance using Docker. This project involved creating a Dockerfile, building a custom Nginx image, and running the container on AWS.",
    technologies: ["Docker", "AWS EC2", "Nginx"],
  },
  {
    image: findImage("project2"),
    title: "Dockerized Web App with CI/CD",
    description:
      "Developed a CI/CD pipeline using Jenkins to automatically build and deploy a simple Python Flask web application. The pipeline triggers on code changes, builds a Docker image, and pushes it to Docker Hub.",
    technologies: ["Docker", "Jenkins", "Python", "Flask", "GitHub"],
  },
  {
    image: findImage("project3"),
    title: "Kubernetes 3-Tier App Security",
    description:
      "Implemented Kubernetes Network Policies to secure a 3-tier application (frontend, backend, database). This project demonstrates isolating pods and controlling traffic flow between different components within a cluster.",
    technologies: ["Kubernetes", "Network Policies", "YAML"],
  },
  {
    image: findImage("project1"),
    title: "Automated Docker Deployment with Bash",
    description:
      "Wrote a Bash script to automate the deployment of a Dockerized application. The script pulls the latest image, stops and removes the old container, and starts a new one with the updated image.",
    technologies: ["Bash Scripting", "Docker", "Automation"],
  },
];

export const experienceData = [
  {
    role: "Technical Support Intern",
    company: "Global IT Providers",
    period: "Jan 2025 - Jul 2025",
    achievements: [
      "Resolved customer tickets and technical issues through the WHMCS portal.",
      "Created and maintained technical documentation for common tasks and solutions.",
      "Performed Linux administration tasks, including user/group management and storage allocation.",
      "Configured and managed NFS for file sharing between servers.",
      "Assisted in deploying and managing web servers like Apache (httpd) and Nginx.",
    ],
  },
];

export const certificationsData = [
  {
    name: "Red Hat Certified System Administrator - RHCSA",
    date: "Issued: 28 July 2025",
    id: "Credential ID: 250-086-337",
    url: "#"
  },
  {
    name: "Red Hat Certified Specialist in Containers - EX188",
    date: "Issued: 16 June 2025",
    id: "Credential ID: 250-086-337",
    url: "#"
  },
  {
    name: "Certified Linux Administrator-CLA Exam",
    date: "Issued: 14 August 2025",
    id: "Credential ID: CHWZV6VUH0U",
    url: "#"
  },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "G.S Mandals Marathwada Institute of Technology, Aurangabad",
    period: "2021 - 2024",
    details: "CGPA: 7.61/10",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "MGM Polytechnic College, Aurangabad",
    period: "2018 - 2021",
    details: "Percentage: 85.47%",
  },
];
