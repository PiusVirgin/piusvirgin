import { IconType } from "react-icons";

export interface NavItem {
  title: string;
  path: string;
}

export interface ContactItem {
  title: string;
  path: string;
}

export interface SocialLinkItem {
  icon: IconType;
  path: string;
}

export interface NavLinkItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  title: string;
  href?: string;
  dropdownWidth?: string;
  description?: string;
  submenu?: NavLinkItem[];
}
