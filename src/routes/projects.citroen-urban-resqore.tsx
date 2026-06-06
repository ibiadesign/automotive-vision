import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/lib/projects";
import layout01 from "@/assets/urban-resqore/layout-01.jpg.asset.json";
import layout02 from "@/assets/urban-resqore/layout-02.jpg.asset.json";
import layout03 from "@/assets/urban-resqore/layout-03.jpg.asset.json";
import layout04 from "@/assets/urban-resqore/layout-04.jpg.asset.json";
import layout05 from "@/assets/urban-resqore/layout-05.jpg.asset.json";
import layout06 from "@/assets/urban-resqore/layout-06.jpg.asset.json";
import layout07 from "@/assets/urban-resqore/layout-07.jpg.asset.json";
import layout08 from "@/assets/urban-resqore/layout-08.gif.asset.json";
import finalRender01 from "@/assets/urban-resqore/final-render-01.jpg.asset.json";
import finalRender02 from "@/assets/urban-resqore/final-render-02.jpg.asset.json";
import finalRender03 from "@/assets/urban-resqore/final-render-03.jpg.asset.json";
import finalRender04 from "@/assets/urban-resqore/final-render-04.jpg.asset.json";


export const Route = createFileRoute("/projects/citroen-urban-resqore")({
  head: () => {
    const p = getProject("citroen-urban-resqore");
    const title = "Urban ResQore — Citroën · Master Studio Project";
    const desc =
      "Emergency veterinary response reimagined for future cities. A Master Studio transportation design project in collaboration with Citroën.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  component: UrbanResQorePage,
});

type GalleryImage = { src: string; alt: string };

const developmentImages: GalleryImage[] = [
  { src: layout01.url, alt: "Development layout 01" },
  { src: layout02.url, alt: "Development layout 02" },
  { src: layout03.url, alt: "Development layout 03" },
  { src: layout04.url, alt: "Development layout 04" },
  { src: layout05.url, alt: "Development layout 05" },
  { src: layout06.url, alt: "Development layout 06" },
  { src: layout07.url, alt: "Development layout 07" },
  { src: layout08.url, alt: "Development layout 08" },
];

const finalRenders: GalleryImage[] = [
  { src: finalRender01.url, alt: "Final render 01" },
  { src: finalRender02.url, alt: "Final render 02" },
  { src: finalRender03.url, alt: "Final render 03" },
  { src: finalRender04.url, alt: "Final render 04" },
];

function UrbanResQorePage() {
  const project = getProject("citroen-urban-resqore")!;
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const [lightbox, setLightbox] = useState<{
    images: GalleryImage[];
    index: number;
  } | null>(null);

  const openLightbox = (images: GalleryImage[], index: number) => {
    setLightbox({ images, index });
  };
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => {
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : lb,
    );
  }, []);
  const nextImg = useCallback(() => {
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb,
    );
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") nextImg();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, closeLightbox, prev, nextImg]);

  const playVideo = () => {
    const v = videoRef.current;
    if (!v) {
      setPlaying(true);
      return;
    }
    v.play().catch(() => {});
    setPlaying(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={project.cover}
          alt="Urban ResQore — cover render placeholder"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
        <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col justify-end pb-24">
          <p className="eyebrow mb-6">Master Studio Project · 2024</p>
          <h1
            className="font-display leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2.25rem, 5.2vw, 4.5rem)" }}
          >
            Urban ResQore
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/80">
            Emergency veterinary response reimagined for future cities.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10 border-b border-border">
        <div className="md:col-span-7 max-w-2xl space-y-6">
          <p className="eyebrow">Overview</p>
          <p className="font-display text-2xl md:text-3xl leading-snug">
            Urban ResQore reimagines emergency animal care through an
            autonomous electric ambulance designed for urban environments.
            Compact, accessible and equipped for veterinary intervention, it
            offers a calmer and faster response for pets in need.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Developed as a Master Studio project for Citroën, Urban ResQore
            rethinks emergency mobility through autonomy, electrification and
            animal-centred design. The project investigates how future urban
            services could provide specialised veterinary assistance with the
            same efficiency and availability expected from human emergency
            systems.
          </p>
        </div>

        <aside className="md:col-span-5 md:pl-10 md:border-l border-border">
          <p className="eyebrow mb-8">Project Information</p>
          <dl className="space-y-6">
            {[
              ["Brand", "Citroën"],
              ["Project Type", "Master Studio Project"],
              ["Discipline", "Transportation Design"],
              ["Duration", "2 months · 2024"],
              ["Software Used", "Photoshop · Vizcom"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-4">
                <dt className="col-span-5 eyebrow self-start pt-1">{k}</dt>
                <dd className="col-span-7 text-base md:text-lg">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      {/* DEVELOPMENT GALLERY */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-12 items-end">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Process</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Development &amp; Packaging
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 max-w-xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Early ideation, package studies and proportion work that defined
              the vehicle's footprint, sight lines and interior architecture.
            </p>
          </div>
        </div>

        <Gallery
          images={developmentImages}
          onOpen={(i) => openLightbox(developmentImages, i)}
        />
      </section>

      {/* FINAL RENDERS GALLERY */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 mb-12 items-end">
            <div className="md:col-span-4">
              <p className="eyebrow mb-4">Showcase</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Final Design
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 max-w-xl">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Final renders presenting the resolved exterior and the calm,
                clinical interior environment designed for animal care.
              </p>
            </div>
          </div>

          <Gallery
            images={finalRenders}
            onOpen={(i) => openLightbox(finalRenders, i)}
          />
        </div>
      </section>

      {/* ANIMATION */}
      <section className="border-t border-border mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-12 items-end">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Motion</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Animation
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 max-w-xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              A short film capturing the Urban ResQore in motion through the
              city — light, sound and presence.
            </p>
          </div>
        </div>

        <div className="relative aspect-video w-full bg-card border border-border overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            controls={playing}
            playsInline
            preload="metadata"
            poster={project.cover}
          />
          {!playing && (
            <button
              type="button"
              onClick={playVideo}
              className="absolute inset-0 flex items-center justify-center bg-background/40 hover:bg-background/30 transition-colors group"
              aria-label="Play Urban ResQore animation"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-copper flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-copper ml-1" />
                </div>
                <p className="eyebrow">Urban ResQore Animation</p>
              </div>
            </button>
          )}
        </div>
      </section>

      {/* NEXT */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 border-t border-border">
        <p className="eyebrow mb-6">Next Project</p>
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block"
        >
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl md:text-7xl group-hover:text-copper transition-colors duration-500">
              {next.title}
            </h2>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {next.category} · {next.year}
            </span>
          </div>
          <div className="hairline mt-8" />
        </Link>
      </section>

      <SiteFooter />

      {lightbox && (
        <Lightbox
          image={lightbox.images[lightbox.index]}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={nextImg}
          index={lightbox.index}
          total={lightbox.images.length}
        />
      )}
    </div>
  );
}

function Gallery({
  images,
  onOpen,
}: {
  images: GalleryImage[];
  onOpen: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {images.map((img, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onOpen(i)}
          className="group relative aspect-[4/3] overflow-hidden bg-card border border-border focus:outline-none focus:ring-2 focus:ring-copper"
          aria-label={`Open ${img.alt}`}
        >
          {img.src ? (
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.25_0.02_60/0.4),transparent_60%)]" />
              <span className="absolute inset-0 flex items-center justify-center eyebrow text-muted-foreground">
                {img.alt}
              </span>
            </>
          )}
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
        </button>
      ))}
    </div>
  );
}

function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
  index,
  total,
}: {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  index: number;
  total: number;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-border bg-card/60 hover:bg-card text-foreground transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-border bg-card/60 hover:bg-card transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-border bg-card/60 hover:bg-card transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div
        key={index}
        className="relative max-w-[92vw] max-h-[88vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {image.src ? (
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain"
          />
        ) : (
          <div className="w-[80vw] h-[60vh] flex items-center justify-center bg-card border border-border">
            <span className="eyebrow text-muted-foreground">{image.alt}</span>
          </div>
        )}
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {index + 1} / {total}
      </div>
    </div>
  );
}
