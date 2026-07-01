export type TourIcon =
  | "culture"
  | "city"
  | "nature"
  | "adventure"
  | "education"
  | "corporate";

export interface TourService {
  id: string;
  slug: string;
  title: string;
  icon: TourIcon;
  image: string;
  description: string;
  content: string[];
  duration: string;
  highlights: string[];
  category: string;
  featured: boolean;
  cta: string;
}
