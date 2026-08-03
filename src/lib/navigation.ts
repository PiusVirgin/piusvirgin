import { NavGroup } from "@/interface/navigation";


export const navigation: NavGroup[] = [
  {
    title: "Who We Are",
    href: "/who-we-are",
    dropdownWidth: "700px",
    description:
      "Discover the values and principles that guide our company. Meet the team driving innovation and growth. And explore our journey and milestones over the years.",
    submenu: [
      // {
      //   title: "Our Culture",
      //   href: "/who-we-are/our-culture",
      //   description:
      //     "Discover the values and principles that guide our company.",
      // },

      {
        title: "Our History",
        href: "/who-we-are/our-history",
        description: "Explore our journey and milestones over the years.",
      },
      {
        title: "Contact Us",
        href: "/who-we-are/contact-us",
        description: "Get in touch with our team.",
      },
    ],
  },

  {
    title: "What We Do",
    href: "/what-we-do",
    dropdownWidth: "900px",
    description:
      "PiusVirgin works with small to mid-sized businesses providing the marketing strategy, education, technical expertise, and capabilities you need to acquire new customers.",
    submenu: [
      // {
      //   title: "Media",
      //   href: "/what-we-do/news",
      //   description: "Capturing Today’s Events For Tomorrow’s History.",
      // },
      {
        title: "Printing and Publishing",
        href: "/what-we-do/printing-publishing",
        description:
          "As a business enterprise, we provide institutions, deserving establishments and private sectors",
      },
      {
        title: "TOURS AND EXCURSION",
        href: "/what-we-do/tours-excursion",
        description:
          "Study Guide/Holiday Train Ride For Students, Families Business Executives",
      },
      {
        title: "Rail",
        href: "/what-we-do/rail",
        description:
          "Safety and security are guaranteed hence all necessary operatives including the Nigerian Police Force are involved.",
      },
      {
        title: "WEB DEVELOPMENT",
        href: "/what-we-do/web-development",
        description: "Growth-Driven Website Design.",
      },
      {
        title: "ART GALLERY",
        href: "/what-we-do/art-gallery",
        description: "Efficient",
      },
      {
        title: "HUMAN RELATIONS AND DEVELOPMENT",
        href: "/what-we-do/human-relations-development",
        description:
          "We build the city in vain if we do not first build the man",
      },
      {
        title: "HEALTH MANAGEMENT",
        href: "/what-we-do/health-management",
        description: "Health, safety and environmental assessment services.",
      },
    ],
  },

  // {
  //   title: "Sustainability",
  //   href: "/sustainability",
  //   dropdownWidth: "700px",
  //   description:
  //     "Our commitment to environmental stewardship. And creating positive impact where we operate.",
  //   submenu: [
  //     {
  //       title: "Environment",
  //       href: "/sustainability/environment",
  //       description: "Our commitment to environmental stewardship.",
  //     },
  //     {
  //       title: "Communities",
  //       href: "/sustainability/communities",
  //       description: "Creating positive impact where we operate.",
  //     },
  //   ],
  // },

  {
    title: "News",
    href: "/news",
  },

  {
    title: "Logistics & Transportation",
    href: "/logistics-transportation",
  },
];
