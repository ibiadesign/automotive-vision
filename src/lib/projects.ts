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
import zionVideoThumb from "@/assets/zion-cuv/video-thumbnail.jpg.asset.json";
import zionSketch01 from "@/assets/zion-cuv/sketch-01.jpg.asset.json";
import zionSketch02 from "@/assets/zion-cuv/sketch-02.jpg.asset.json";
import zionSketch03 from "@/assets/zion-cuv/sketch-03.jpg.asset.json";
import zionSketch04 from "@/assets/zion-cuv/sketch-04.jpg.asset.json";
import zionSketch05 from "@/assets/zion-cuv/sketch-05.jpg.asset.json";
import zionSketch06 from "@/assets/zion-cuv/sketch-06.jpg.asset.json";
import zionSketch07 from "@/assets/zion-cuv/sketch-07.jpg.asset.json";
import zionSketch08 from "@/assets/zion-cuv/sketch-08.jpg.asset.json";
import zionDetail01 from "@/assets/zion-cuv/detail-01.jpg.asset.json";
import zionDetail02 from "@/assets/zion-cuv/detail-02.jpg.asset.json";
import zionDetail03 from "@/assets/zion-cuv/detail-03.jpg.asset.json";
import zionDetail04 from "@/assets/zion-cuv/detail-04.jpg.asset.json";
import zionFinal02 from "@/assets/zion-cuv/final-02.jpg.asset.json";
import zionFinal03 from "@/assets/zion-cuv/final-03.jpg.asset.json";
import zionFinal04 from "@/assets/zion-cuv/final-04.jpg.asset.json";
import zionFinal05 from "@/assets/zion-cuv/final-05.jpg.asset.json";
import zionFinal06 from "@/assets/zion-cuv/final-06.jpg.asset.json";
import zionFinal07 from "@/assets/zion-cuv/final-07.jpg.asset.json";
import xtremeSketch01 from "@/assets/xtreme-hypercar/sketch-01.jpg.asset.json";
import xtremeSketch02 from "@/assets/xtreme-hypercar/sketch-02.jpg.asset.json";
import xtremeSketch03 from "@/assets/xtreme-hypercar/sketch-03.jpg.asset.json";
import xtremeSketch04 from "@/assets/xtreme-hypercar/sketch-04.jpg.asset.json";
import xtremeSketch05 from "@/assets/xtreme-hypercar/sketch-05.jpg.asset.json";
import xtremeSketch06 from "@/assets/xtreme-hypercar/sketch-06.jpg.asset.json";
import xtremeSketch07 from "@/assets/xtreme-hypercar/sketch-07.jpg.asset.json";
import xtremeSketch08 from "@/assets/xtreme-hypercar/sketch-08.jpg.asset.json";
import xtremeInterior01 from "@/assets/xtreme-hypercar/Interior_Design_1.jpg.asset.json";
import xtremeInterior02 from "@/assets/xtreme-hypercar/Interior_Design_2.jpg.asset.json";
import xtremeInterior03 from "@/assets/xtreme-hypercar/Interior_Design_3.jpg.asset.json";
import xtremeInterior04 from "@/assets/xtreme-hypercar/Interior_Design_4.jpg.asset.json";
import xtreme3d01 from "@/assets/xtreme-hypercar/3d_Development_1.jpg.asset.json";
import xtreme3d02 from "@/assets/xtreme-hypercar/3d_Development_2.jpg.asset.json";
import xtremeFinal01 from "@/assets/xtreme-hypercar/final_design_1.jpg.asset.json";
import xtremeFinal02 from "@/assets/xtreme-hypercar/final_design_2.jpg.asset.json";
import xtremeFinal03 from "@/assets/xtreme-hypercar/final_design_3.jpg.asset.json";
import xtremeFinal04 from "@/assets/xtreme-hypercar/final_design_4.jpg.asset.json";
import xtremeFinal05 from "@/assets/xtreme-hypercar/final_design_5.jpg.asset.json";
import xtremeFinal06 from "@/assets/xtreme-hypercar/final_design_6.jpg.asset.json";


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
  youtubeUrl?: string;
  youtubePoster?: string;
  sketches?: string[];
  detailSketches?: string[];
  finalDesign?: string[];
  sectionLabels?: {
    sketches?: { title?: string; description?: string };
    detailSketches?: { title?: string; description?: string };
    finalRenders?: { title?: string; description?: string };
  };
};


export const projects: Project[] = [
  {
    slug: "xtreme-hypercar",
    title: "Xtreme Hypercar",
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
      "Xtreme Hypercar began as a question: what would a car feel like if it inherited the soul of a motorcycle? Not the geometry, but the emotion — the wind pressure, the visual lightness, the sense of being mechanically connected to the asphalt.",
      "The volumes are stretched and lean, with exposed structural elements and a cockpit that sits forward like a rider's stance. Aerodynamic surfaces wrap with tension rather than ornament, and the rear opens up to reveal the powertrain like the frame of a sportbike.",
      "Developed in collaboration with Genesis, the project explores how a luxury brand can embrace adrenaline without losing its refinement — precision, restraint, and pure forward motion.",
    ],
    gallery: [xtreme3d01.url, xtreme3d02.url],
    projectType: "Collaboration Project",
    discipline: "Transportation Design",
    duration: "6 months · 2024–2025",
    software: "Photoshop · Vizcom · Blender",
    sketches: [
      xtremeSketch01.url,
      xtremeSketch02.url,
      xtremeSketch03.url,
      xtremeSketch04.url,
      xtremeSketch05.url,
      xtremeSketch06.url,
      xtremeSketch07.url,
      xtremeSketch08.url,
    ],
    detailSketches: [
      xtremeInterior01.url,
      xtremeInterior02.url,
      xtremeInterior03.url,
      xtremeInterior04.url,
    ],
    finalDesign: [
      xtremeFinal01.url,
      xtremeFinal02.url,
      xtremeFinal03.url,
      xtremeFinal04.url,
      xtremeFinal05.url,
      xtremeFinal06.url,
    ],
    youtubeUrl: "https://youtu.be/HEid5rEzsOM",
    sectionLabels: {
      sketches: {
        title: "Exterior Design Process",
        description:
          "Early ideation, silhouette studies and surfacing explorations that shaped the exterior direction of Xtreme Hypercar.",
      },
      detailSketches: {
        title: "Interior Design Process",
        description:
          "Package exploration, interior layout, control ergonomics and the motorcycle-inspired cockpit that define the driving experience.",
      },
      finalRenders: {
        title: "3D Development",
        description:
          "Digital surfacing and aerodynamic studies translating the sketches into a resolved three-dimensional form.",
      },
    },
  },

  {
    slug: "zion-cuv",
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
    duration: "8 months · 2025",
    software: "Photoshop · Alias · Blender",
    youtubeUrl: "https://www.youtube.com/watch?v=iUHVThviA08",
    youtubePoster: zionVideoThumb.url,
    sketches: [
      zionSketch01.url,
      zionSketch02.url,
      zionSketch03.url,
      zionSketch04.url,
      zionSketch05.url,
      zionSketch06.url,
      zionSketch07.url,
      zionSketch08.url,
    ],
    detailSketches: [
      zionDetail01.url,
      zionDetail02.url,
      zionDetail03.url,
      zionDetail04.url,
    ],
    finalDesign: [
      zionFinal02.url,
      zionFinal03.url,
      zionFinal04.url,
      zionFinal05.url,
      zionFinal06.url,
      zionFinal07.url,
    ],
  },
  {
    slug: "atelier-saloon",
    title: "Atelier Saloon",
    subtitle: "Crafted around unforgettable journeys",
    year: "2023",
    category: "Personal Exterior",
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
    sketches: [
      atelierSketch01.url,
      atelierSketch02.url,
      atelierSketch03.url,
      atelierSketch04.url,
      atelierSketch05.url,
      atelierSketch06.url,
      atelierSketch07.url,
      atelierSketch08.url,
      atelierSketch09.url,
      atelierSketch10.url,
    ],
  },
  {
    slug: "citroen-urban-resqore",
    title: "Urban ResQore",
    subtitle: "Emergency care designed around animal wellbeing",
    year: "2024",
    category: "Master Studio Project",
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
