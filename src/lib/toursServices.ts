import { TourService } from "@/types/tours";

export const toursServices: TourService[] = [
  {
    id: "1",
    slug: "cultural-heritage-tours",
    title: "Cultural & Heritage Tours",
    description:
      "Explore historic sites, traditional communities and festivals.",
    image: "/images/tours-culture.jpg",
    icon: "culture",
    duration: "2-5 Days",
    category: "Cultural",
    featured: true,
    highlights: [
      "Historic landmarks",
      "Traditional festivals",
      "Local guides",
      "Museum visits",
    ],
    content: [
      "Immerse yourself in Africa's rich history and traditions through carefully curated heritage experiences.",
      "Visit historic landmarks, museums, ancient cities, royal palaces and cultural festivals.",
      "Learn directly from local communities and cultural custodians.",
    ],
    cta: "Explore Cultural Tours",
  },
  {
    id: "2",
    slug: "city-tours-urban-experiences",
    title: "City Tours & Urban Experiences",
    description:
      "Discover Africa's major cities through architecture, food, art, business and culture.",
    icon: "city",
    image: "/images/tours-city.jpg",
    duration: "2-5 Days",
    category: "Cultural",
    featured: true,
    highlights: [
      "Historic landmarks",
      "Traditional festivals",
      "Local guides",
      "Museum visits",
    ],
    cta: "View City Experiences",

    content: [
      "Explore innovation districts.",
      "Visit iconic city landmarks.",
      "Experience nightlife, markets and local cuisine.",
    ],
  },
  {
    id: "3",
    slug: "nature-eco-tours",
    title: "Nature & Eco Tours",
    description:
      "Reconnect with nature through beaches, forests, waterfalls and wildlife reserves.",
    icon: "nature",

    image: "/images/tours-nature.jpg",
    duration: "2-5 Days",
    category: "Cultural",
    featured: true,
    highlights: [
      "Historic landmarks",
      "Traditional festivals",
      "Local guides",
      "Museum visits",
    ],
    cta: "Explore Nature Tours",

    content: [
      "Eco-conscious travel experiences.",
      "Wildlife and conservation tours.",
      "Sustainable tourism adventures.",
    ],
  },
  {
    id: "4",
    slug: "adventure-leisure-excursions",
    title: "Adventure & Leisure Excursions",

    icon: "adventure",

    image: "/images/tours-adventure.jpg",

    description:
      "Exciting outdoor experiences designed for explorers and adventure seekers.",
    duration: "2-5 Days",
    category: "Cultural",
    featured: true,
    highlights: [
      "Historic landmarks",
      "Traditional festivals",
      "Local guides",
      "Museum visits",
    ],
    cta: "Find Adventure Trips",

    content: [
      "Boat cruises.",
      "Hiking experiences.",
      "Leisure escapes and recreation.",
    ],
  },
  {
    id: "5",
    slug: "educational-study-tours",
    title: "Educational & Study Tours",
    icon: "education",

    image: "/images/tours-edu.jpg",

    description:
      "Purpose-driven tours designed for schools, institutions and organizations.",
    duration: "2-5 Days",
    category: "Cultural",
    featured: true,
    highlights: [
      "Historic landmarks",
      "Traditional festivals",
      "Local guides",
      "Museum visits",
    ],
    cta: "Request Study Tour",

    content: [
      "Leadership programs.",
      "Educational visits.",
      "Research and learning experiences.",
    ],
  },
  {
    id: "6",
    slug: "corporate-group-tours",
    title: "Corporate & Group Tours",

    icon: "corporate",

    image: "/images/tours-cop.jpg",

    description:
      "Retreats, conferences and team-building experiences for organizations.",
    duration: "2-5 Days",
    category: "Cultural",
    featured: true,
    highlights: [
      "Historic landmarks",
      "Traditional festivals",
      "Local guides",
      "Museum visits",
    ],
    cta: "Plan a Group Tour",

    content: [
      "Corporate retreats.",
      "Team-building experiences.",
      "Executive travel programs.",
    ],
  },
];
