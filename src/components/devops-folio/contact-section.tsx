import type { profileData } from "@/lib/portfolio-data";
import { Linkedin, Mail, Phone, ArrowRight } from "lucide-react";

type ContactSectionProps = {
  id: string;
  contact: typeof profileData.contact;
};

export function ContactSection({ id, contact }: ContactSectionProps) {
  const contactMethods = [
    {
      icon: <Mail className="h-7 w-7 text-primary" />,
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <Phone className="h-7 w-7 text-primary" />,
      title: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <Linkedin className="h-7 w-7 text-primary" />,
      title: "LinkedIn",
      value: "Vaibhav Jadhav",
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
      <div className="mx-auto mt-12 max-w-lg space-y-6">
        {contactMethods.map((method) => (
          <a
            key={method.title}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : "_self"}
            rel={method.href.startsWith("http") ? "noopener noreferrer" : ""}
            className="group flex items-center gap-6 rounded-xl border border-border/20 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="rounded-lg bg-background p-3 transition-colors duration-300 group-hover:bg-primary/10">
              {method.icon}
            </div>
            <div className="flex-grow">
              <h3 className="font-headline text-xl font-semibold text-accent-foreground">
                {method.title}
              </h3>
              <p className="text-foreground/80 transition-colors duration-300 group-hover:text-primary">
                {method.value}
              </p>
            </div>
            <ArrowRight className="h-6 w-6 text-foreground/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </a>
        ))}
      </div>
    </section>
  );
}