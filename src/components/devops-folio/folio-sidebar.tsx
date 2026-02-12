
'use client';
import React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, Code2, Briefcase, FolderKanban, Award, GraduationCap, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import type { profileData as ProfileDataType } from '@/lib/portfolio-data';

const iconMap = {
  User,
  Code2,
  Briefcase,
  FolderKanban,
  Award,
  GraduationCap,
};

type Section = {
  id: string;
  title: string;
  icon: keyof typeof iconMap;
};

type FolioSidebarProps = {
  sections: Section[];
  profile: typeof ProfileDataType;
  children: React.ReactNode;
};

export function FolioSidebar({ sections, profile, children }: FolioSidebarProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex flex-col items-center p-4 text-center">
            <Avatar className="mb-4 h-24 w-24">
              <AvatarImage src={profile.profilePicture?.imageUrl} alt={profile.name} />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="font-headline text-xl font-bold">{profile.name}</h2>
            <p className="text-sm text-muted-foreground">{profile.title}</p>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {sections.map((section) => {
              const Icon = iconMap[section.icon];
              return (
              <SidebarMenuItem key={section.id}>
                <Link href={`#${section.id}`} legacyBehavior passHref>
                  <SidebarMenuButton tooltip={section.title}>
                    {Icon ? <Icon /> : null}
                    <span>{section.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            )})}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex justify-center gap-2">
            <Button asChild variant="ghost" size="icon">
              <Link href={`mailto:${profile.contact.email}`} aria-label="Email">
                <Mail />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </Link>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:hidden">
            <Link href="#profile" className="flex items-center gap-2">
                <Code2 className="h-7 w-7 text-primary" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-headline text-xl font-bold text-transparent">DevOps Folio</span>
            </Link>
          <SidebarTrigger />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
