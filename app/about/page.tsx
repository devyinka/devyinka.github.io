import Link from "next/link";
import { educationList } from "@/utils/educationList";
import { languageList } from "@/utils/languageData";

const principles = [
  ["Understand the problem", "I start by understanding the people, constraints and real-world workflow behind a feature—not just the screen that needs to be built."],
  ["Think across the system", "I consider how interfaces, APIs, data models, integrations and infrastructure work together as one product."],
  ["Build for change", "I value clear structure, maintainable code and practical decisions that make a product easier to improve."],
];

export default function About() {
  return (
    <div className="site-shell py-16 sm:py-24">
      <header className="max-w-3xl pb-16 sm:pb-20">
        <p className="eyebrow">About me</p>
        <h1 className="display-heading mt-5 max-w-[12ch] text-5xl font-semibold text-[#17231c] sm:text-7xl">An engineer&apos;s<br/><span className="text-[#176b43]">way of thinking.</span></h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-[#657168]">
          <p>I&apos;m Salam Sodiq, a software engineer focused on building web applications, mobile products and the backend systems that power them. I enjoy taking an idea from an early requirement to a working product—planning how its parts fit together, implementing the experience and solving the engineering challenges along the way.</p>
          <p>My background is in Telecommunication Engineering. It shaped how I think about networks, connected devices and the movement of information across systems. I bring that systems-level perspective into software development, particularly when working across application architecture, APIs, data and integrations.</p>
          <p>I&apos;m self-taught in software development, with a foundation in C and C++ and practical experience across JavaScript, TypeScript, React, Next.js, Node.js, Express, databases and React Native. I value learning unfamiliar technologies by understanding how they work and applying them to real problems.</p>
        </div>
      </header>

      <section className="section-rule grid gap-8 py-14 md:grid-cols-[.7fr_1.3fr]">
        <div><p className="eyebrow">How I approach engineering</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17231c]">The work behind<br/>the work.</h2></div>
        <div className="space-y-7">{principles.map(([title, detail], i) => <div key={title} className="grid gap-3 sm:grid-cols-[48px_1fr]"><span className="text-xs font-bold text-[#176b43]">0{i + 1}</span><div><h3 className="text-lg font-semibold text-[#17231c]">{title}</h3><p className="mt-2 text-sm leading-7 text-[#657168]">{detail}</p></div></div>)}</div>
      </section>

      <section className="section-rule grid gap-8 py-14 md:grid-cols-[.7fr_1.3fr]">
        <div><p className="eyebrow">Education</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17231c]">Academic journey.</h2></div>
        <div className="space-y-7 border-l border-[#dce5dd] pl-6">{educationList.map((item, i) => <div key={`${item.title}-${i}`} className="relative"><span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#176b43] ring-1 ring-[#176b43]" /><h3 className="text-lg font-semibold text-[#17231c]">{item.title}</h3>{item.subtitle && <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#176b43]">{item.subtitle}</p>}<p className="mt-2 text-sm leading-7 text-[#657168]">{item.description}</p></div>)}</div>
      </section>

      <section className="section-rule grid gap-8 py-14 md:grid-cols-[.7fr_1.3fr]">
        <div><p className="eyebrow">Beyond software</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17231c]">Curiosity outside<br/>the code.</h2></div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div><h3 className="text-base font-semibold text-[#17231c]">Languages</h3><div className="mt-4 space-y-4">{languageList.map((lang, i) => <div key={`${lang.title}-${i}`}><p className="text-sm font-semibold text-[#26372b]">{lang.title}</p><p className="mt-1 text-xs leading-6 text-[#657168]">{lang.description}</p></div>)}</div></div>
          <div><h3 className="text-base font-semibold text-[#17231c]">A wider perspective</h3><p className="mt-4 text-sm leading-7 text-[#657168]">I enjoy learning, exploring how complex systems work and finding clear ways to explain them. My interests also include agriculture, connected technology and stories built around strategy and investigation.</p></div>
        </div>
      </section>

      <section className="mt-12 rounded-[22px] bg-[#173e2a] px-7 py-12 text-white sm:px-12">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a9d5b5]">Explore the work</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">The best way to understand how I work is to see what I&apos;ve built.</h2><Link href="/projects" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#173e2a]">View projects ↗</Link>
      </section>
    </div>
  );
}
