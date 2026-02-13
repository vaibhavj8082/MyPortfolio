import type { profileData } from "@/lib/portfolio-data";
import { Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      cta: "Send an Email",
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      cta: "Call Me",
    },
    {
      icon: <Linkedin className="h-8 w-8 text-primary" />,
      title: "LinkedIn",
      value: "Vaibhav Jadhav",
      href: contact.linkedin,
      cta: "Connect on LinkedIn",
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
          <div
            key={method.title}
            className="group relative flex transform-gpu flex-col items-center justify-center rounded-xl border border-border/20 bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
                <div className="inline-block rounded-full bg-background p-5">
                    {method.icon}
                </div>
                <h3 className="mt-6 font-headline text-2xl font-semibold text-accent-foreground">
                {method.title}
                </h3>
                <p className="mt-2 text-lg text-foreground/80">
                {method.value}
                </p>
                <Button asChild variant="link" className="mt-4 text-lg text-primary">
                    <Link
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : "_self"}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : ""}
                    >
                        {method.cta}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
