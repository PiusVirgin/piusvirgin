// export interface TransportService {
//   id: string;

//   slug: string;

//   title: string;

//   description: string;

//   image: string;

//   category: string;

//   featured?: boolean;

//   footerText: string;

//   infoList: {
//     title: string;
//     desc: string;
//   }[];
// }

export interface TransportFeature {
  title: string;
  subtitle: string;
}

export interface TransportService {
  id: string;
  slug: string;

  title: string;
  description: string;

  image: string;

  category: string;

  featured?: boolean;

  highlights: string[];

  content: string[];

  cta: string;
}
