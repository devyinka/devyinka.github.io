"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectMediaProps = {
  title: string;
  imageUrl: string;
  videoUrl?: string;
  mobile?: boolean;
  index: number;
};

export function ProjectMedia({ title, imageUrl, videoUrl, mobile, index }: ProjectMediaProps) {
  const [watching, setWatching] = useState(false);

  return (
    <div className={`project-media relative ${mobile ? "aspect-[4/5] bg-[#e8f0e9] p-4 sm:p-6" : "aspect-[16/10]"}`}>
      {watching && videoUrl ? (
        <video
          className="absolute inset-0 h-full w-full bg-[#17231c] object-contain"
          controls
          autoPlay
          playsInline
          poster={imageUrl}
          onEnded={() => setWatching(false)}
        >
          <source src={videoUrl} />
          Your browser does not support embedded video.
        </video>
      ) : (
        <Image
          src={imageUrl}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={mobile ? "object-contain drop-shadow-[0_18px_20px_rgba(23,62,42,.16)]" : "object-cover"}
        />
      )}
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-widest text-[#176b43]">
        PROJECT / 0{index + 1}
      </span>
      {videoUrl && (
        <button
          type="button"
          onClick={() => setWatching((current) => !current)}
          className="absolute bottom-4 right-4 rounded-full border border-white/80 bg-[#173e2a]/90 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-[#105234]"
          aria-label={`${watching ? "Show image" : "Watch"} ${title}`}
        >
          {watching ? "View image" : "Watch walkthrough"} <span aria-hidden="true">{watching ? "↺" : "▶"}</span>
        </button>
      )}
    </div>
  );
}
