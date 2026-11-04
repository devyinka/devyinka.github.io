import Link from "next/link";
import { contactData } from "@/utils/contactData";
import { Form } from "@/components/Form";

export default function Contact() {
  return (
    <div className="site-shell py-16 sm:py-24">
      <header className="max-w-3xl pb-14 sm:pb-20">
        <p className="eyebrow">Contact</p>
        <h1 className="display-heading mt-5 max-w-[12ch] text-5xl font-semibold text-[#17231c] sm:text-7xl">Good work starts<br/><span className="text-[#176b43]">with a conversation.</span></h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-[#657168] sm:text-lg">Whether you&apos;re hiring, exploring a collaboration or have a product idea to discuss, I&apos;d be glad to hear from you.</p>
      </header>
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <aside className="space-y-4">
          <div className="editorial-card p-5">
            <p className="eyebrow">Email</p>
            <Link href={`mailto:${contactData.email}`} className="mt-3 block break-all text-base font-semibold text-[#17231c] hover:text-[#176b43]">{contactData.email}</Link>
            <p className="mt-2 text-xs text-[#78837b]">Best for opportunities and detailed enquiries.</p>
          </div>
          <div className="editorial-card p-5">
            <p className="eyebrow">Professional network</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href={contactData.linkedIn} target="_blank" rel="noreferrer" className="text-link">LinkedIn ↗</Link>
              <Link href={contactData.github} target="_blank" rel="noreferrer" className="text-link">GitHub ↗</Link>
              <Link href={contactData.x} target="_blank" rel="noreferrer" className="text-link">X ↗</Link>
            </div>
          </div>
          <div className="soft-panel p-5">
            <p className="text-sm font-semibold text-[#24412e]">What I&apos;m interested in</p>
            <p className="mt-2 text-sm leading-6 text-[#657168]">Software engineering roles, web and mobile product development, meaningful technical collaborations and challenging product problems.</p>
          </div>
        </aside>
        <section className="editorial-card p-6 sm:p-8">
          <p className="eyebrow">Send a message</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#17231c]">Tell me what you&apos;re working on.</h2>
          <p className="mb-7 mt-2 text-sm leading-6 text-[#78837b]">Share a little context and I&apos;ll get back to you.</p>
          <Form />
        </section>
      </div>
    </div>
  );
}
