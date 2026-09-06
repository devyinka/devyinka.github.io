"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import Home from "@/app/page";
import Projects from "@/app/projects/page";
import Contact from "@/app/Contact/page";
import About from "@/app/about/page";
export default function TabMenu() {
  return (
    <>
      <Tabs className="flex justify-center mt-4 mb-8">
        <Tab key="home" title="Home">
          <Home />
        </Tab>
        <Tab key="about" title="About">
          <About />
        </Tab>

        <Tab key="projects" title="Projects">
          <Projects />
        </Tab>

        <Tab key="contact" title="Contact">
          <Contact />
        </Tab>
      </Tabs>
    </>
  );
}
