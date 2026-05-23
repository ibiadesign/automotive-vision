import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import sketchCover from "@/assets/project-5.jpg";

export const Route = createFileRoute("/sketchbook")({
  head: () => ({
    meta: [
      { title: "Sketchbook — Guillermina Valdivia" },
      {
        name: "description",
        content:
          "A gallery of automotive sketches by Guillermina Valdivia — Photoshop studies and hand drawings exploring proportion, surfacing and ideation.",
      },
      { property: "og:title", content: "Sketchbook — Guillermina Valdivia" },
      {
        property: "og:description",
        content:
          "Photoshop studies and hand-drawn ideation sketches across personal and collaborative projects.",
      },
      { property: "og:image", content: sketchCover },
    ],
  }),
  component: SketchbookPage,
});

type Sketch = {
  id: number;
  type: "Photoshop" | "Hand drawing";
  title: string;
};

const sketches: Sketch[] = [
  { id: 1, type: "Hand drawing", title: "Silhouette study — GT" },
  { id: 2, type: "Photoshop", title: "Front fascia exploration" },
  { id: 3, type: "Hand drawing", title: "Rear haunch — CUV" },
  { id: 4, type: "Photoshop", title: "Lighting graphic studies" },
  { id: 5, type: "Hand drawing", title: "Wheel arch detail" },
  { id: 6, type: "Photoshop", title: "Saloon proportion sketch" },
  { id: 7, type: "Hand drawing", title: "Hypercar lean study" },
  { id: 8, type: "Photoshop", title: "Surface tension render" },
  { id: 9, type: "Hand drawing", title: "Interior package thumbnail" },
  { id: 10, type: "Photoshop", title: "Emergency vehicle livery" },
  { id: 11, type: "Hand drawing", title: "Side profile ideation" },
  { id: 12, type: "Photoshop", title: "Greenhouse exploration" },
];

function SketchbookPage() {
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
          different projects. Both Photoshop studies and hand drawings,
          exploring proportion, surfacing and visual storytelling — from quick
          silhouettes to refined themes.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-40">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {sketches.map((s) => (
            <figure
              key={s.id}
              className="group relative aspect-[4/5] bg-card border border-border overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {String(s.id).padStart(2, "0")}
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <p className="eyebrow text-[0.6rem]">{s.type}</p>
                <p className="font-display text-base mt-1">{s.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
