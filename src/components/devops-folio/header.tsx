"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Code2 } from "lucide-react";

type Section = {
  id: string;
  title: string;
};

type HeaderProps = {
  sections: Section[];
};

export function Header({ sections }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("profile");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sectionElements = sections.map((s) =>
        document.getElementById(s.id)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sectionElements) {
        if (section) {
          if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const NavLink = ({
    section,
    isMobile,
  }: {
    section: Section;
    isMobile?: boolean;
  }) => (
    <Link
      href={`#${section.id}`}
      onClick={() => isMobile && setIsMobileMenuOpen(false)}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300",
        activeSection === section.id
          ? "bg-primary text-primary-foreground"
          : "text-foreground/80 hover:bg-accent hover:text-accent-foreground",
        isMobile && "block w-full text-left"
      )}
    >
      {section.title}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="#profile" className="flex items-center gap-2">
          <Code2 className="h-7 w-7 text-primary" />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-headline text-xl font-bold text-transparent">DevOps Folio</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-2">
          {sections.map((section) => (
            <NavLink key={section.id} section={section} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 flex flex-col gap-4">
                {sections.map((section) => (
                  <NavLink key={section.id} section={section} isMobile />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
