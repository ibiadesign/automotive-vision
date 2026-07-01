import { useState } from "react";

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export function YouTubeEmbed({ url, poster }: { url: string; poster?: string }) {
  const [playing, setPlaying] = useState(false);
  const id = getYouTubeId(url);

  if (!id) {
    return (
      <div className="relative aspect-video w-full bg-card border border-border overflow-hidden flex items-center justify-center">
        <p className="eyebrow">Invalid YouTube URL</p>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full bg-card border border-border overflow-hidden">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative w-full h-full cursor-pointer"
          aria-label="Play video"
        >
          <img
            src={poster ?? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt="Video thumbnail"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-copper bg-background/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-copper ml-1" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
