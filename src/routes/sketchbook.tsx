import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageLightbox } from "@/components/ImageLightbox";
import sketchCover from "@/assets/project-5.jpg";
import handEfebo from "@/assets/sketchbook/hand-efebo.jpg.asset.json";
import handFutureF1 from "@/assets/sketchbook/hand-future-f1.jpg.asset.json";
import handKiaGlare from "@/assets/sketchbook/hand-kia-glare.jpg.asset.json";
import handKeyCarStudy from "@/assets/sketchbook/hand-key-car-study.png.asset.json";
import handLearning from "@/assets/sketchbook/hand-learning.jpg.asset.json";
import handExterior4 from "@/assets/sketchbook/hand-exterior-design-4.png.asset.json";
import ddF1Past from "@/assets/sketchbook/Digital_Design_-_Future_F1_Project_from_past_to_future.png.asset.json";
import ddF1 from "@/assets/sketchbook/Digital_Design_-_Future_F1_Project.png.asset.json";
import ddGenesisDev from "@/assets/sketchbook/Digital_Design_-_Genesis_Development.png.asset.json";
import ddGenesisExp from "@/assets/sketchbook/Digital_Design_-_Genesis_Exploration.png.asset.json";
import ddLine from "@/assets/sketchbook/Digital_Design_-_Line_Exploration.png.asset.json";
import ddMoto from "@/assets/sketchbook/Digital_Design_-_Motorbike_Exploration.png.asset.json";
import ddShape from "@/assets/sketchbook/Digital_Design_-_Shape_Inspiration.png.asset.json";
import ddSports from "@/assets/sketchbook/Digital_Design_-_Sports_Car_Exploration.png.asset.json";
import ddTexture from "@/assets/sketchbook/Digital_Design_-_Texture_Exploration.png.asset.json";
import detailWheel from "@/assets/sketchbook/Exterior_Design_-_Wheel_Trim_Design.png.asset.json";
import detailSteering from "@/assets/sketchbook/Interior_Design_-_Steering_Wheel_Genesis.png.asset.json";
import detailHeadLight from "@/assets/sketchbook/Exterior_Design_-_Head_Light.png.asset.json";
import detailTailHead from "@/assets/sketchbook/Exterior_Design_-_Tail_and_Head_Lights.png.asset.json";
import spSeat1 from "@/assets/sketchbook/Short_project_SEAT_1.png.asset.json";
import spSeat2 from "@/assets/sketchbook/Short_project_SEAT_2.png.asset.json";
import spSeat3 from "@/assets/sketchbook/Short_project_SEAT_3.png.asset.json";
import spSeat4 from "@/assets/sketchbook/Short_project_SEAT_4.png.asset.json";
import spSeat5 from "@/assets/sketchbook/Short_Project_SEAT_5.png.asset.json";
import spVw1 from "@/assets/sketchbook/Short_project_VW_1.png.asset.json";
import spVw2 from "@/assets/sketchbook/Short_project_VW_2.png.asset.json";
import spVw3 from "@/assets/sketchbook/Short_project_VW_3.png.asset.json";
import spVw4 from "@/assets/sketchbook/Short_project_VW_4.jpg.asset.json";
import spVw5 from "@/assets/sketchbook/Short_project_VW_5.jpg.asset.json";
import spFerrari1 from "@/assets/sketchbook/Ferrari_Lucentenario_1.png.asset.json";
import spFerrari2 from "@/assets/sketchbook/Ferrari_Lucentenario_2.jpg.asset.json";
import spFerrari3 from "@/assets/sketchbook/Ferrari_Lucentenario_3.jpg.asset.json";
import spFerrariThumb from "@/assets/sketchbook/Ferrari_Lucentenario_thumbnail.jpg.asset.json";
import spSpiritRider from "@/assets/sketchbook/Spirit_Rider.png.asset.json";
import spAnimalInspiration from "@/assets/sketchbook/Animal_Inspiration.png.asset.json";
import intLifestream from "@/assets/sketchbook/Interior_Design_-_Lifestream_project.png.asset.json";
import intDashboard from "@/assets/sketchbook/Interior_Design_-_Genesis_Xtreme_Dashboard_idea.png.asset.json";
import intPreview from "@/assets/sketchbook/Interior_Design_-_Genesis_Xtreme_preview.png.asset.json";


export const Route = createFileRoute("/sketchbook")({
  head: () => ({
    meta: [
      { title: "Sketchbook — Guillermina Valdivia" },
      {
        name: "description",
        content:
          "A gallery of automotive sketches by Guillermina Valdivia — hand drawings, digital sketches and studies exploring proportion, surfacing and ideation.",
      },
      { property: "og:title", content: "Sketchbook — Guillermina Valdivia" },
      {
        property: "og:description",
        content:
          "Hand drawings, digital sketches and ideation studies across personal and collaborative projects.",
      },
      { property: "og:image", content: sketchCover },
    ],
  }),
  component: SketchbookPage,
});

type SketchItem = {
  category: string;
  title: string;
  src: string;
  youtube?: string;
};

type SketchGroup = {
  items: SketchItem[];
  cols: number;
};

type SketchGallery = {
  category: string;
  hideCategoryInCaption?: boolean;
  items?: SketchItem[];
  groups?: SketchGroup[];
};

const handDrawings: SketchItem[] = [
  { category: "Hand Drawing", title: "Efebo, Thesis Project Fine Arts", src: handEfebo.url },
  { category: "Hand Drawing", title: "Future F1 Project", src: handFutureF1.url },
  { category: "Hand Drawing", title: "KIA Glare Winner Contest", src: handKiaGlare.url },
  { category: "Hand Drawing", title: "Key Car Study", src: handKeyCarStudy.url },
  { category: "Hand Drawing", title: "Learning from other designers", src: handLearning.url },
  { category: "Hand Drawing", title: "Efebo development", src: handExterior4.url },
];

const digitalDesignPSD: SketchItem[] = [
  { category: "Digital Design, PSD", title: "Future F1 Project from past to future", src: ddF1Past.url },
  { category: "Digital Design, PSD", title: "Future F1 Project", src: ddF1.url },
  { category: "Digital Design, PSD", title: "Genesis Development", src: ddGenesisDev.url },
  { category: "Digital Design, PSD", title: "Genesis Exploration", src: ddGenesisExp.url },
  { category: "Digital Design, PSD", title: "Line Exploration", src: ddLine.url },
  { category: "Digital Design, PSD", title: "Motorbike Exploration", src: ddMoto.url },
  { category: "Digital Design, PSD", title: "Shape Inspiration", src: ddShape.url },
  { category: "Digital Design, PSD", title: "Sports Car Exploration", src: ddSports.url },
  { category: "Digital Design, PSD", title: "Texture Exploration", src: ddTexture.url },
];

const detailDesign: SketchItem[] = [
  { category: "Detail Design", title: "Wheel Trim Design", src: detailWheel.url },
  { category: "Detail Design", title: "Steering Wheel Genesis", src: detailSteering.url },
  { category: "Detail Design", title: "Head Light", src: detailHeadLight.url },
  { category: "Detail Design", title: "Tail and Head Lights", src: detailTailHead.url },
];

const shortSeat: SketchItem[] = [
  { category: "Short Projects", title: "Seat Atarfe - 1", src: spSeat1.url },
  { category: "Short Projects", title: "Seat Atarfe - 2", src: spSeat2.url },
  { category: "Short Projects", title: "Seat Atarfe - 3", src: spSeat3.url },
  { category: "Short Projects", title: "Seat Atarfe - 4", src: spSeat4.url },
  { category: "Short Projects", title: "Seat Atarfe - 5", src: spSeat5.url },
];

const shortVw: SketchItem[] = [
  { category: "Short Projects", title: "VW Kon-nect - 1", src: spVw1.url },
  { category: "Short Projects", title: "VW Kon-nect - 2", src: spVw2.url },
  { category: "Short Projects", title: "VW Kon-nect - 3", src: spVw3.url },
  { category: "Short Projects", title: "VW Kon-nect - 4", src: spVw4.url },
  { category: "Short Projects", title: "VW Kon-nect - 5", src: spVw5.url },
];

const YT_ID = "YYUo-d0sPi4";
const shortFerrari: SketchItem[] = [
  { category: "Short Projects", title: "Ferrari Lucentenario - 1", src: spFerrari1.url },
  { category: "Short Projects", title: "Ferrari Lucentenario - 2", src: spFerrari2.url },
  { category: "Short Projects", title: "Ferrari Lucentenario - 3", src: spFerrari3.url },
  {
    category: "Short Projects",
    title: "Ferrari Lucentenario - Video",
    src: `https://img.youtube.com/vi/${YT_ID}/hqdefault.jpg`,
    youtube: `https://youtu.be/${YT_ID}`,
  },
];

const galleries: SketchGallery[] = [
  { category: "Hand Drawing", items: handDrawings },
  { category: "Digital Design, PSD", items: digitalDesignPSD },
  { category: "Detail Design", items: detailDesign, groups: [{ items: detailDesign, cols: 4 }] },
  {
    category: "Short Projects",
    hideCategoryInCaption: true,
    groups: [
      { items: shortSeat, cols: 5 },
      { items: shortVw, cols: 5 },
      { items: shortFerrari, cols: 4 },
    ],
  },
];

function SketchbookPage() {
  const allImages = galleries.flatMap((g) => {
    const items = g.items ?? g.groups?.flatMap((gr) => gr.items) ?? [];
    return items
      .filter((i) => !i.youtube)
      .map((i) => ({ src: i.src, alt: `${i.category} — ${i.title}` }));
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openAt = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i === null ? i : (i - 1 + allImages.length) % allImages.length));
  const next = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % allImages.length));

  let globalIndex = 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-16 mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="eyebrow mb-8">Process Archive</p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
          Sketchbook.
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A selection of sketches, ideation studies and development work across
          different projects. Both hand drawings and digital studies, exploring
          proportion, surfacing and visual storytelling — from quick silhouettes
          to refined themes.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-40 space-y-24">
        {galleries.map((gallery) => {
          const groups: SketchGroup[] = gallery.groups ?? [
            { items: gallery.items ?? [], cols: 3 },
          ];
          const colsClass = (n: number) =>
            n === 5
              ? "md:grid-cols-5"
              : n === 4
                ? "md:grid-cols-4"
                : n === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-3";
          return (
            <div key={gallery.category}>
              <h2 className="font-display text-3xl md:text-5xl mb-10 tracking-tight">
                <span className="text-primary">{gallery.category}</span>
              </h2>
              <div className="space-y-16">
                {groups.map((group, gi) => (
                  <div
                    key={gi}
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${colsClass(group.cols)}`}
                  >
                    {group.items.map((item) => {
                      const isYoutube = !!item.youtube;
                      const imgIndex = isYoutube ? -1 : globalIndex++;
                      const caption = gallery.hideCategoryInCaption ? (
                        <p className="font-display text-sm md:text-base">
                          <span className="text-foreground">{item.title}</span>
                        </p>
                      ) : (
                        <p className="font-display text-sm md:text-base">
                          <span className="uppercase tracking-[0.2em] text-primary">
                            {item.category}
                          </span>
                          <span className="text-foreground"> — {item.title}</span>
                        </p>
                      );

                      const inner = (
                        <>
                          <img
                            src={item.src}
                            alt={`${item.category} — ${item.title}`}
                            loading="lazy"
                            className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          {isYoutube && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-foreground ml-1">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          )}
                          <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                            {caption}
                          </figcaption>
                        </>
                      );

                      if (isYoutube) {
                        return (
                          <a
                            key={`${item.category}-${item.title}`}
                            href={item.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-card border border-border overflow-hidden cursor-pointer block"
                          >
                            {inner}
                          </a>
                        );
                      }

                      return (
                        <figure
                          key={`${item.category}-${item.title}`}
                          className="group relative bg-card border border-border overflow-hidden cursor-zoom-in"
                          onClick={() => openAt(imgIndex)}
                        >
                          {inner}
                        </figure>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>


      {lightboxIndex !== null && (
        <ImageLightbox
          images={allImages}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}

      <SiteFooter />
    </div>
  );
}
