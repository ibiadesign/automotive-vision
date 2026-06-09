import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import atelierRender01 from "@/assets/atelier-saloon/render-01.png.asset.json";
import atelierRender02 from "@/assets/atelier-saloon/render-02.jpg.asset.json";
import atelierAnimation from "@/assets/atelier-saloon/animation.mp4.asset.json";
import atelierAnimationPoster from "@/assets/atelier-saloon/animation-poster.jpg.asset.json";
import atelierSketch01 from "@/assets/atelier-saloon/sketch-01.jpg.asset.json";
import atelierSketch02 from "@/assets/atelier-saloon/sketch-02.jpg.asset.json";
import atelierSketch03 from "@/assets/atelier-saloon/sketch-03.jpg.asset.json";
import atelierSketch04 from "@/assets/atelier-saloon/sketch-04.jpg.asset.json";
import atelierSketch05 from "@/assets/atelier-saloon/sketch-05.jpg.asset.json";
import atelierSketch06 from "@/assets/atelier-saloon/sketch-06.jpg.asset.json";
import atelierSketch07 from "@/assets/atelier-saloon/sketch-07.jpg.asset.json";
import atelierSketch08 from "@/assets/atelier-saloon/sketch-08.jpg.asset.json";
import atelierSketch09 from "@/assets/atelier-saloon/sketch-09.jpg.asset.json";
import atelierSketch10 from "@/assets/atelier-saloon/sketch-10.jpg.asset.json";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  client: string;
  role: string;
  cover: string;
  summary: string;
  inspiration: string;
  body: string[];
  gallery: string[];
  projectType?: string;
  discipline?: string;
  duration?: string;
  software?: string;
  animation?: string;
  animationPoster?: string;
};

export const projects: Project[] = [
  {
    slug: "lumen-gt",
    title: "X-treme Hypercar",
    subtitle: "Motorcycle emotion, translated into four wheels",
    year: "2024 - 2025",
    category: "Collaboration Project with Genesis",
    client: "Genesis",
    role: "Concept, exterior, surfacing",
    cover: p1,
    summary:
      "A hypercar shaped around the raw, exposed sensations of riding a motorbike — wind, tension, mechanical honesty — translated into four wheels.",
    inspiration:
      "Inspired by the emotions and feelings of a motorbike: the exposure, the lean, the intimacy with the road.",
    body: [
      "X-treme Hypercar began as a question: what would a car feel like if it inherited the soul of a motorcycle? Not the geometry, but the emotion — the wind pressure, the visual lightness, the sense of being mechanically connected to the asphalt.",
      "The volumes are stretched and lean, with exposed structural elements and a cockpit that sits forward like a rider's stance. Aerodynamic surfaces wrap with tension rather than ornament, and the rear opens up to reveal the powertrain like the frame of a sportbike.",
      "Developed in collaboration with Genesis, the project explores how a luxury brand can embrace adrenaline without losing its refinement — precision, restraint, and pure forward motion.",
    ],
    gallery: [p1, p2],
    projectType: "Collaboration Project",
    discipline: "Transportation Design",
    duration: "6 months · 2024–2025",
    software: "Photoshop · Vizcom · Blender",
  },
  {
    slug: "azura-saloon",
    title: "Zion CUV",
    subtitle: "Don’t follow paths, leave them behind",
    year: "2025",
    category: "Collaboration Project with CUPRA",
    client: "CUPRA",
    role: "Lead exterior designer",
    cover: p2,
    summary:
      "An off-road electric CUV designed to retrace the Pony Express trail across the American West — feeling the landscape, the silence and the slow rhythm of the journey.",
    inspiration:
      "Inspired by the Pony Express trail in the United States — repeating the route in a CUPRA, letting the landscape and the act of driving shape the emotion.",
    body: [
      "Zion CUV imagines a modern CUPRA built to retrace one of America's most mythical routes. The Pony Express trail becomes the brief: long horizons, shifting terrain, and the meditative loneliness of crossing a continent.",
      "Geometric surfaces and raised proportions give the vehicle the confidence to leave paved roads behind, while a wide greenhouse opens the cabin to the landscape. Lighting graphics reference the desert sun and the cold blue of mountain dawns.",
      "The result is a vehicle that does not just move through territory — it listens to it.",
    ],
    gallery: [p2, p1],
    projectType: "Collaboration Project",
    discipline: "Transportation Design",
    duration: "3 months · 2025",
    software: "Photoshop · Vizcom",
  },
  {
    slug: "atelier-saloon",
    title: "Atelier Saloon",
    subtitle: "Crafted around unforgettable journeys",
    year: "2023",
    category: "Personal · Exterior & Interior",
    client: "Ford",
    role: "Concept & surfacing",
    cover: p3,
    summary:
      "A grand saloon conceived as a space for connection and shared experiences. Elegant, intimate, and built around meaningful journeys.",
    inspiration:
      "Inspired by the journeys that mark the beginning of a shared life, transforming the vehicle into a companion for meaningful moments and lasting memories.",
    body: [
      "Atelier Saloon explores the idea of a grand touring vehicle designed around shared experiences rather than performance or status. Conceived as a companion for a newly married couple, it transforms the journey itself into part of the memory.",
      "Its proportions are calm and generous, while the interior is shaped as a warm, intimate environment. Natural materials, soft ambient light and carefully crafted details create a sense of comfort, permanence and emotional connection.",
      "Rather than pursuing visual drama, Atelier Saloon embraces timeless elegance. Every surface has been developed to express craftsmanship and longevity, creating a vehicle designed to accompany life's most meaningful moments.",
    ],
    gallery: [atelierRender01.url, atelierRender02.url],
    projectType: "ArtCenter Professional Car Design Program",
    discipline: "Transportation Design",
    duration: "4 weeks · 2023",
    software: "Photoshop · Vizcom",
    animation: atelierAnimation.url,
    animationPoster: atelierAnimationPoster.url,
  },
  {
    slug: "citroen-urban-resqore",
    title: "Urban ResQore",
    subtitle: "Emergency care designed around animal wellbeing",
    year: "2024",
    category: "Master Thesis Project",
    client: "Personal Research",
    role: "Concept, exterior & interior",
    cover: p4,
    summary:
      "An urban emergency vehicle conceived as an ambulance for animals — equipped, calm, and designed entirely around the wellbeing of its non-human passengers.",
    inspiration:
      "Inspired by the absence of a real emergency vehicle for animals in distress in our cities.",
    body: [
      "Urban ResQore began with a simple observation: cities have ambulances for humans, but almost nothing for the animals that share those same streets. The project proposes a dedicated vehicle for animal emergency response — small enough for dense urban fabric, equipped for veterinary intervention on the move.",
      "The interior is organised around a stress-reducing transport bay: soft lighting, acoustic isolation, modular restraint and quick-access medical equipment. Visibility, ventilation and surface temperature were treated as primary design parameters.",
      "The exterior language is calm and recognisable rather than aggressive — a public service vehicle that signals help, not alarm.",
    ],
    gallery: [p4, p1],
    projectType: "Master Studio Project",
    discipline: "Transportation Design",
    duration: "2 months · 2024",
    software: "Photoshop · Vizcom",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
