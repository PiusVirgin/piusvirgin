import {
  RiFacebookLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";

import { NavItem, ContactItem, SocialLinkItem } from "@/types/navigation";

export const linkMenu: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "News",
    path: "/news",
  },
  {
    title: "Rail",
    path: "/rail",
  },
  {
    title: "Tours and Excursion",
    path: "/tours-and-excursion",
  },
  {
    title: "Logistics and Transportation",
    path: "/logistics-and-transportation",
  },
  {
    title: "Web Development and Design",
    path: "/web-development-and-design",
  },
  {
    title: "Mentoring, Human Relations and Development",
    path: "/human-relations-and-development",
  },
  {
    title: "Art Gallery",
    path: "/art-gallery",
  },
  {
    title: "Health Management",
    path: "/health-management",
  },
];

export const contactMenu: ContactItem = {
  title: "Contact Us",
  path: "/contact-us",
};

export const socialLink: SocialLinkItem[] = [
  {
    icon: RiFacebookLine,
    path: "/contact-us",
  },
  {
    icon: RiTwitterXLine,
    path: "/contact-us",
  },
  {
    icon: RiInstagramLine,
    path: "/contact-us",
  },
  {
    icon: RiLinkedinLine,
    path: "/contact-us",
  },
];
