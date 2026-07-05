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
};

type SketchGallery = {
  category: string;
  items: SketchItem[];
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

const galleries: SketchGallery[] = [
  { category: "Hand Drawing", items: handDrawings },
  { category: "Digital Design, PSD", items: digitalDesignPSD },
];

function SketchbookPage() {
  const allImages = galleries.flatMap((g) =>
    g.items.map((i) => ({ src: i.src, alt: `${i.category} — ${i.title}` })),
  );
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
        {galleries.map((gallery) => (
          <div key={gallery.category}>
            <h2 className="font-display text-3xl md:text-5xl mb-10 uppercase tracking-tight">
              <span className="text-primary">{gallery.category}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gallery.items.map((item) => {
                const idx = globalIndex++;
                return (
                  <figure
                    key={`${item.category}-${item.title}`}
                    className="group relative bg-card border border-border overflow-hidden cursor-zoom-in"
                    onClick={() => openAt(idx)}
                  >
                    <img
                      src={item.src}
                      alt={`${item.category} — ${item.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                      <p className="font-display text-sm md:text-base">
                        <span className="uppercase tracking-[0.2em] text-primary">
                          {item.category}
                        </span>
                        <span className="text-foreground"> — {item.title}</span>
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        ))}
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
