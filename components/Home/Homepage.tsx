"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectList } from "@/utils/projectList";

const capabilities = [
  { number: "01", title: "Web applications", detail: "Thoughtful interfaces backed by dependable application logic, APIs and data models." },
  { number: "02", title: "Mobile products", detail: "Cross-platform experiences designed around real user workflows and connected services." },
  { number: "03", title: "Backend systems", detail: "Structured services, authentication, integrations and data flows that hold products together." },
  { number: "04", title: "Connected solutions", detail: "Software that works with devices, sensors and intelligent processing beyond the browser." },
];

export default function Homepage() {
  const featured = [ProjectList[0], ProjectList[4], ProjectList[2], ProjectList[1]].filter(Boolean);
  const introduction = "I turn product ideas and real-world requirements into useful web and mobile applications. I work across the interface, backend services, APIs and data layer to make the whole product work as one system.";

  return (
    <div className="overflow-hidden">
      <section className="site-shell relative pb-16 pt-12 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="hero-orb pointer-events-none absolute -right-24 top-16 -z-10 h-80 w-80 rounded-full bg-[#eaf3eb] blur-3xl" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div className="min-w-0">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="h-2 w-2 rounded-full bg-[#27945b]" />
              <span className="eyebrow">Software engineer · Nigeria</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }} className="display-heading max-w-[12ch] text-[clamp(2.8rem,8vw,6.8rem)] font-semibold text-[#17231c]">
              I build software that <span className="text-[#176b43]">moves ideas forward.</span>
            </motion.h1>

            {/* On small screens the portrait sits beside the introduction instead of being pushed below the hero. */}
            <div className="mt-6 flex items-center gap-4 sm:mt-8 sm:gap-6 lg:hidden">
              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .18 }} className="min-w-0 flex-1 text-sm leading-7 text-[#657168] sm:text-base sm:leading-8">
                {introduction}
              </motion.p>
              <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }} className="relative h-[108px] w-[108px] shrink-0 overflow-hidden rounded-full border-[5px] border-white bg-[#e4f0e6] shadow-[0_12px_34px_rgba(28,58,38,.16)] sm:h-[138px] sm:w-[138px]">
                <Image src="/salam.jpg" alt="Portrait of Salam Sodiq" fill priority sizes="(max-width: 640px) 108px, 138px" className="object-cover object-[center_24%]" />
              </motion.div>
            </div>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .18 }} className="mt-8 hidden max-w-[610px] text-base leading-8 text-[#657168] lg:block lg:text-lg">
              {introduction}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .26 }} className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-9">
              <Link href="/projects" className="green-button">Explore selected work <span>↗</span></Link>
              <Link href="/Contact" className="outline-button">Get in touch <span>↗</span></Link>
            </motion.div>
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#e5eae5] pt-5 text-[11px] text-[#7a857d] sm:mt-12 sm:gap-x-7 sm:pt-6 sm:text-xs">
              <span>Full-stack development</span><span>Mobile applications</span><span>Systems integration</span>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }} className="relative mx-auto hidden w-full max-w-[390px] lg:mt-4 lg:block">
            <div className="absolute -inset-5 -rotate-3 rounded-[28px] bg-[#e4f0e6]" />
            <div className="relative overflow-hidden rounded-[24px] border border-[#dce5dd] bg-white p-3 shadow-[0_24px_70px_rgba(28,58,38,.12)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[17px] bg-[#dfe9e1]">
                <Image src="/salam.jpg" alt="Portrait of Salam Sodiq" fill priority sizes="390px" className="object-cover object-[center_24%] saturate-[.88] contrast-[1.04]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,55,34,.04)_25%,rgba(18,55,34,.22)_100%)]" />
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-4">
                <div><p className="text-sm font-bold text-[#17231c]">Salam Sodiq</p><p className="mt-1 text-xs text-[#778279]">Engineer by training. Builder by practice.</p></div>
                <span className="shrink-0 rounded-full bg-[#edf5ef] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#176b43]">Software / 01</span>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-8 hidden rounded-2xl border border-[#e1e9e1] bg-white px-5 py-4 shadow-lg xl:block">
              <p className="eyebrow">Approach</p><p className="mt-1 text-sm font-semibold text-[#26372b]">Think in systems.</p><p className="text-sm text-[#657168]">Build for people.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#e5eae5] bg-white">
        <div className="site-shell grid gap-8 py-14 sm:py-16 md:grid-cols-[.65fr_1.35fr] md:py-20">
          <div><p className="eyebrow">What I work on</p><h2 className="mt-4 max-w-xs text-3xl font-semibold leading-[1.08] tracking-[-.045em] text-[#17231c] sm:text-4xl">From the first screen to the systems behind it.</h2></div>
          <div className="grid gap-0 sm:grid-cols-2">
            {capabilities.map((item, i) => <div key={item.number} className={`border-[#e5eae5] py-5 ${i < 2 ? "border-b" : ""} ${i % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"}`}>
              <span className="text-xs font-bold text-[#176b43]">{item.number}</span><h3 className="mt-3 text-lg font-semibold text-[#17231c]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#69756d]">{item.detail}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="site-shell py-16 sm:py-20 lg:py-28">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
          <div><p className="eyebrow">Selected work</p><h2 className="display-heading mt-4 text-4xl font-semibold text-[#17231c] sm:text-5xl">Built to solve<br/>something real.</h2></div>
          <Link href="/projects" className="text-link text-sm">View all projects <span>↗</span></Link>
        </div>
        <div className="grid gap-7 sm:gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <Link href="/projects" key={project.title} className="group min-w-0">
              <div className={`project-media relative ${project.mediaType === "mobile" ? "aspect-[4/5] bg-[#e8f0e9] p-4 sm:p-6" : "aspect-[16/10]"}`}>
                <Image src={project.imgUrl} alt={`${project.title} interface preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className={`${project.mediaType === "mobile" ? "object-contain drop-shadow-[0_16px_18px_rgba(23,62,42,.16)]" : "object-cover"} transition-transform duration-700 group-hover:scale-[1.035]`} />
                <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#176b43]">0{index + 1}</span>
              </div>
              <div className="flex items-start justify-between gap-4 pt-4">
                <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-[.12em] text-[#176b43]">{project.subtitle}</p><h3 className="mt-2 text-xl font-semibold tracking-tight text-[#17231c] group-hover:text-[#176b43]">{project.title}</h3></div>
                <span className="mt-1 shrink-0 text-xl text-[#176b43] transition-transform group-hover:translate-x-1">↗</span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#69756d]">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f0f5f0]">
        <div className="site-shell grid gap-8 py-14 sm:py-16 md:grid-cols-[1fr_auto] md:items-center md:py-20">
          <div><p className="eyebrow">A little about my approach</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-.045em] text-[#17231c] sm:text-4xl">Good software is more than code that runs.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#657168]">I care about understanding the problem, making sound technical decisions and building products that are clear to use, dependable in practice and straightforward to evolve.</p></div>
          <Link href="/about" className="outline-button w-fit">More about me <span>↗</span></Link>
        </div>
      </section>

      <section className="site-shell py-16 sm:py-20 lg:py-28">
        <div className="rounded-[24px] bg-[#173e2a] px-6 py-10 text-white sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a9d5b5]">Have a product in mind?</p>
          <div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-.055em] sm:text-5xl">Let&apos;s make something useful.</h2>
            <Link href="/Contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#173e2a] transition hover:bg-[#eaf3eb]">Start a conversation <span>↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
