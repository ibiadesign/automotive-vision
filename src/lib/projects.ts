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
    title: "Lumen GT",
    subtitle: "A grand tourer reimagined for the electric era",
    year: "2025",
    category: "Concept · Exterior",
    client: "Internal Research",
    role: "Lead Exterior Designer",
    cover: p1,
    summary:
      "Lumen GT explores the visual language of light itself — a continuous signature carved into matte composite bodywork, finished with restrained copper accents.",
    body: [
      "The project began as a study on how electrification could free proportion from the constraints of combustion. With the powertrain compressed into the floor, the cabin moves forward, the hood lowers, and the wheels are pushed to the corners — restoring the silhouette of a true grand tourer.",
      "A single, uninterrupted light signature wraps the front fascia, reading as one luminous gesture day or night. Copper inlays mark the active aerodynamic edges, a quiet reminder that every line carries function.",
    ],
    gallery: [p1, p2],
  },
  {
    slug: "azura-saloon",
    title: "Azura Saloon",
    subtitle: "Quiet luxury for a new generation of executive travel",
    year: "2024",
    category: "Concept · Exterior & Interior",
    client: "Confidential OEM",
    role: "Senior Designer",
    cover: p2,
    summary:
      "An executive saloon stripped of ornament. Deep cobalt paint, a single character line, and a cabin shaped around stillness and silence.",
    body: [
      "Azura is a meditation on restraint. The body is shaped by one continuous shoulder line that rises subtly toward the rear haunch, catching light without demanding it.",
      "Inside, two materials dominate: brushed aluminium and a soft, undyed wool. Controls retreat into the architecture, surfacing only when needed.",
    ],
    gallery: [p2, p1],
  },
  {
    slug: "vanta-cuv",
    title: "Vanta CUV",
    subtitle: "Utility, sculpted without compromise",
    year: "2024",
    category: "Concept · Exterior",
    client: "Studio Project",
    role: "Designer",
    cover: p3,
    summary:
      "A compact utility study that proves capability and elegance are not opposites. Vanta is monolithic, calm, and unmistakably modern.",
    body: [
      "Vanta rejects the visual noise common to its segment. There are no fake vents, no aggressive cladding — only honest surfaces meeting at precise radii.",
      "Copper-finished wheels and underbody accents serve as the sole chromatic gesture, anchoring the silhouette to the road.",
    ],
    gallery: [p3, p4],
  },
  {
    slug: "atlas-hyper",
    title: "Atlas Hyper",
    subtitle: "Aerodynamic theatre at three hundred kilometres per hour",
    year: "2023",
    category: "Concept · Hypercar",
    client: "Personal Project",
    role: "Concept & Surfacing",
    cover: p4,
    summary:
      "Atlas is a rolling sculpture engineered for speed and presence. A full-width light bar in deep cobalt anchors the rear, framed by structural copper diffusers.",
    body: [
      "Every panel of Atlas earns its place. The rear deck slopes into a venturi tunnel that doubles as the car's defining graphic.",
      "The signature taillight is a single continuous strip — a cobalt horizon line that signals presence without aggression.",
    ],
    gallery: [p4, p1],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
