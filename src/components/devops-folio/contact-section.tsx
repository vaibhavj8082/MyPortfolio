import { Button } from "@/components/ui/button";
import type { profileData } from "@/lib/portfolio-data";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

type ContactSectionProps = {
  id: string;
  contact: typeof profileData.contact;
};

export function ContactSection({ id, contact }: ContactSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-center font-headline text-4xl font-bold text-primary">
        Get In Touch
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-foreground/80">
        I'm currently looking for new opportunities. Feel free to reach out if
        you have a role that might be a good fit.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4 sm:gap-8">
        <Button
          asChild
          variant="outline"
          className="h-20 w-20 flex-col gap-1 rounded-full border-2 border-primary/20 p-0 transition-all hover:scale-110 hover:border-primary/50 hover:bg-primary/10"
        >
          <Link href={`mailto:${contact.email}`} aria-label="Email">
            <Mail className="h-8 w-8" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-20 w-20 flex-col gap-1 rounded-full border-2 border-primary/20 p-0 transition-all hover:scale-110 hover:border-primary/50 hover:bg-primary/10"
        >
          <Link href={`tel:${contact.phone}`} aria-label="Phone">
            <Phone className="h-8 w-8" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-20 w-20 flex-col gap-1 rounded-full border-2 border-primary/20 p-0 transition-all hover:scale-110 hover:border-primary/50 hover:bg-primary/10"
        >
          <Link
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8" />
          </Link>
        </Button>
      </div>
      <div className="mt-8 text-center">
        <a
          href={`mailto:${contact.email}`}
          className="text-xl text-accent-foreground transition-colors hover:text-primary"
        >
          {contact.email}
        </a>
      </div>
    </section>
  );
}
