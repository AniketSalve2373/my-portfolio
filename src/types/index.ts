export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  bioPlaceholder: string;
  introduction: string;
  socialLinks: SocialLinks;
  navItems: NavItem[];
}

export interface SectionProps {
  id?: string;
  className?: string;
}

