"use client";
import Link from "next/link";
import { ProjectList } from "@/utils/projectList";
import type { ProjectType } from "@/types";
import { ProjectMedia } from "@/components/ProjectMedia";

export default function Projects() {
  return (
    <div className="site-shell py-16 sm:py-24">
      <header className="max-w-3xl pb-14 sm:pb-20">
        <p className="eyebrow">Selected work · 2024—2026</p>
        <h1 className="display-heading mt-5 max-w-[12ch] text-5xl font-semibold text-[#17231c] sm:text-7xl">Projects with<br/><span className="text-[#176b43]">a purpose.</span></h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-[#657168] sm:text-lg">
          A collection of products and engineering projects across web, mobile, backend systems, machine learning and hardware integration. Each one represents a problem explored and a solution built.
        </p>
      </header>
      <div className="space-y-20 sm:space-y-28">
        {ProjectList.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
      <section className="mt-24 rounded-[22px] bg-[#f0f5f0] px-7 py-12 text-center sm:px-12">
        <p className="eyebrow">Have a challenge?</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#17231c] sm:text-4xl">Let&apos;s talk about what you&apos;re building.</h2>
        <Link href="/Contact" className="green-button mt-7">Get in touch <span>↗</span></Link>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <article className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div className="min-w-0">
        <ProjectMedia title={project.title} imageUrl={project.imgUrl} videoUrl={project.videoUrl} mobile={project.mediaType === "mobile"} index={index} />
      </div>
      <div className="flex flex-col items-start">
        <p className="eyebrow">{project.subtitle}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.045em] text-[#17231c] sm:text-4xl">{project.title}</h2>
        <p className="mt-5 text-sm leading-7 text-[#657168] sm:text-base">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => <span key={`${tech.name}-${i}`} className="inline-flex items-center gap-2 rounded-full border border-[#e2e9e2] bg-white px-3 py-2 text-xs font-medium text-[#536157]">{tech.icon}{tech.name}</span>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.websiteUrl ? <a href={project.websiteUrl} target="_blank" rel="noreferrer" className="green-button">View project <span>↗</span></a> : <span className="rounded-full bg-[#f0f5f0] px-5 py-3 text-xs font-semibold text-[#657168]">In development</span>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="outline-button">Source code <span>↗</span></a>}
        </div>
      </div>
    </article>
  );
}
