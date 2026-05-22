import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

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
  body: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "lumen-gt",
    title: "X-treme Hypercar",
    subtitle: "Motorcycle emotion, translated into four wheels",
    year: "2024 - 2025",
    category: "Collaboration Project with Genesis",
    client: "Personal Research",
    role: "Concept, exterior, surfacing",
    cover: p1,
    summary:
      "Lumen GT is a personal study of how electrification could free proportion. A continuous light signature wraps the front, finished with restrained copper accents.",
    body: [
      "The project started as a sketch on a long flight — a way of asking what a grand tourer could look like when the engine no longer dictates the architecture. With the powertrain compressed into the floor, the cabin moves forward, the hood lowers, and the wheels move to the corners.",
      "I wanted a single, uninterrupted light signature wrapping the front fascia — one luminous gesture, day or night. Copper inlays mark the active aerodynamic edges, a quiet reminder that every line still carries function.",
    ],
    gallery: [p1, p2],
  },
  {
    slug: "azura-saloon",
    title: "Zion CUV",
    subtitle: "Don´t follow paths, leave them behind",
    year: "2025",
    category: "Collaboration Project with CUPRA",
    client: "Confidential OEM",
    role: "Lead exterior designer",
    cover: p2,
    summary:
      "An executive saloon stripped of ornament. Deep cobalt paint, a single character line, and a cabin shaped around stillness and silence.",
    body: [
      "Azura was a commission for a European marque rethinking its flagship saloon. I led the exterior from initial sketch through to digital surfacing review.",
      "The body is defined by a single shoulder line that rises subtly toward the rear haunch, catching light without demanding it. Inside, two materials dominate: brushed aluminium and an undyed wool. Controls retreat into the architecture, surfacing only when needed.",
    ],
    gallery: [p2, p1],
  },
  {
    slug: "vanta-cuv",
    title: "Atelier Saloon",
    subtitle: "Crafted around unforgettable journeys",
    year: "2023",
    category: "Personal · Exterior",
    client: "Personal Research",
    role: "Concept & surfacing",
    cover: p3,
    summary:
      "A compact utility study to prove that capability and elegance are not opposites. Vanta is monolithic, calm, and unmistakably modern.",
    body: [
      "I started Vanta as a reaction to the visual noise common to its segment — fake vents, aggressive cladding, surfaces fighting each other. I wanted to see what was left when all of that was removed.",
      "Copper-finished wheels and underbody accents are the only chromatic gesture, anchoring the silhouette to the road. The greenhouse is intentionally small, the body intentionally quiet.",
    ],
    gallery: [p3, p4],
  },
  {
    slug: "atlas-hyper",
    title: "Urban ResQore",
    subtitle: "Emergency care designed around animal wellbeing",
    year: "2024",
    category: "First MA´s project",
    client: "Personal Research",
    role: "Concept & surfacing",
    cover: p4,
    summary:
      "Atlas is a rolling sculpture engineered for speed and presence. A full-width cobalt light bar anchors the rear, framed by structural copper diffusers.",
    body: [
      "Atlas is the project I keep returning to. It started during my final year at RCA and has been refined since. Every panel earns its place — the rear deck slopes into a venturi tunnel that doubles as the car's defining graphic.",
      "The signature taillight is a single continuous strip — a cobalt horizon line that signals presence without aggression. It's the most personal piece of work I've made.",
    ],
    gallery: [p4, p1],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
