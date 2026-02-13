import type { profileData } from "@/lib/portfolio-data";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

type ContactSectionProps = {
  id: string;
  contact: typeof profileData.contact;
};

export function ContactSection({ id, contact }: ContactSectionProps) {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <Linkedin className="h-8 w-8 text-primary" />,
      title: "LinkedIn",
      value: "View Profile",
      href: contact.linkedin,
    },
  ];

  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-center font-headline text-4xl font-bold text-primary">
        Get In Touch
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-foreground/80">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of an amazing team. Feel free to reach out.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {contactMethods.map((method) => (
          <Link
            key={method.title}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={
              method.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="group block rounded-xl border border-border/20 bg-secondary/30 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-secondary/60 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="inline-block rounded-full bg-background p-4">
              {method.icon}
            </div>
            <h3 className="mt-4 font-headline text-xl font-semibold text-accent-foreground">
              {method.title}
            </h3>
            <p className="mt-1 text-foreground/80 transition-colors duration-300 group-hover:text-primary">
              {method.value}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
