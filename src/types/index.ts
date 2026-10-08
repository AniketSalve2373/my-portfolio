export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  bioPlaceholder: string;
  navItems: NavItem[];
}

export interface SectionProps {
  id?: string;
  className?: string;
}
