import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface HomeHero {
  id: number;
  title: string;
  label: string;
  description: string;
  image: string;
  cta: string;
}

export interface HomeTabsItem {
  title: string;
  path: string;
  pic: string;
}

export interface HomeTransportItem {
  title: string;
  subtitle: string;
  pix: string;
}

export interface HomeNewsItem {
  title: string;
  subtitle: string;
  pix: string;
  date: string;
  slug: string;
  category: string;
}

export interface HomeTransportService {
  title: string;
  subtitle: string;
  featured?: boolean;
  image: string | StaticImport;
};
