"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import { ProjectList } from "@/utils/projectList";
import { ProjectType, TechnologyType } from "@/types";
import { GithubSVG, LinkSVG } from "@/components/ui/icons";

export default function Projects() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Page Header */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-200 tracking-tight">
            Featured Architecture
          </h1>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl">
            A selection of backend systems, robust APIs, and cross-platform
            applications I have engineered, focusing on secure pipelines and
            scalable data structures.
          </p>
        </div>

        {/* Using project.title as the unique key */}
        {ProjectList.map((project, index) => (
          <ProjectCard
            key={`project-${project.title.replace(/\s+/g, "-")}`}
            project={project}
            index={index}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-slate-400 mb-6">
          Interested in working together on secure architectures?
        </p>
        <Link
          href="/Contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors shadow-lg"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}

// Individual Project Card Component
const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  const {
    description,
    title,
    subtitle,
    icon,
    imgUrl,
    videoUrl,
    technologies,
    githubUrl,
    websiteUrl,
  } = project;

  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // Ref for controlling the video
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Alternate the layout based on whether the index is even or odd
  const isEven = index % 2 === 0;

  // Handle the delayed video playback
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isInView && videoRef.current) {
      // 6000ms = 6 seconds. Change to 10000 for 10 seconds.
      timeout = setTimeout(() => {
        videoRef.current?.play().catch((err) => {
          console.log("Playback failed:", err);
        });
      }, 6000);
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col gap-8 lg:items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      {/* Video/Image Section */}
      <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 aspect-video shadow-[0_0_40px_-15px_rgba(6,182,212,0.15)]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          loop
          muted
          playsInline
          poster={imgUrl}
          onCanPlay={() => setIsVideoLoaded(true)}
          src={isInView ? videoUrl : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <div className="flex items-center gap-3 text-cyan-400">
          <span className="p-2 bg-cyan-950/30 rounded-lg border border-cyan-900/50">
            {icon}
          </span>
          <span className="text-sm font-semibold tracking-widest uppercase text-cyan-500">
            {subtitle}
          </span>
        </div>

        <h2 className="text-3xl font-bold text-slate-100">{title}</h2>

        <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
          <p className="text-slate-300 leading-relaxed text-md lg:text-lg">
            {description}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-3 mt-2">
          {technologies.map(({ name, icon }: TechnologyType, idx: number) => (
            <div
              key={`${title}-tech-${idx}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/50 border border-slate-700 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-700 transition-colors"
            >
              {icon}
              <span>{name}</span>
            </div>
          ))}
        </div>

        {/* Links / Action Buttons */}
        <div className="flex gap-4 mt-4">
          {websiteUrl !== "NONE" && websiteUrl && (
            <Link
              href={websiteUrl}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors"
            >
              <LinkSVG />
              Live Deployment
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-medium transition-colors"
            >
              <GithubSVG color="#ffffff" size={20} />
              Source Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};
