import type { profileData as ProfileDataType } from "@/lib/portfolio-data";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

type ProfileSectionProps = {
  id: string;
  data: typeof ProfileDataType;
};

export function ProfileSection({ id, data }: ProfileSectionProps) {
  const { name, title, summary, profilePicture, contact } = data;
  return (
    <section
      id={id}
      className="scroll-mt-20 flex flex-col items-center gap-y-8 text-center md:flex-row md:gap-x-12 md:text-left"
    >
      {profilePicture && (
        <Avatar className="h-40 w-40 flex-shrink-0 border-4 border-primary/20 md:h-48 md:w-48">
          <Image
            src={profilePicture.imageUrl}
            alt={name}
            width={192}
            height={192}
            priority
            className="h-full w-full object-cover"
            data-ai-hint={profilePicture.imageHint}
          />
        </Avatar>
      )}
      <div>
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-headline text-6xl font-extrabold tracking-tight text-transparent lg:text-7xl">
          {name}
        </h1>
        <h2 className="mt-2 font-headline text-2xl font-semibold text-foreground/90">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">{summary}</p>
        <div className="mt-6 flex justify-center gap-2 md:justify-start">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            <Link href={`mailto:${contact.email}`} aria-label="Email">
              <Mail />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            <Link href={`tel:${contact.phone}`} aria-label="Phone">
              <Phone />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
