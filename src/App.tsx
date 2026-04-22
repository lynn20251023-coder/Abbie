/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AiManifesto from "./components/AiManifesto";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { PROJECTS } from "./constants";
import { motion, useScroll, useSpring } from "motion/react";
import { lazy, Suspense } from "react";

const CaseStudyPage = lazy(() => import("./components/CaseStudyPage"));

export default function App() {
  const caseSlug =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("case")
      : null;
  const selectedProject = PROJECTS.find((project) => project.detailSlug === caseSlug) ?? null;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--canvas)] font-sans selection:bg-zinc-200 selection:text-black">
      {!selectedProject ? (
        <motion.div
          className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-zinc-800"
          style={{ scaleX }}
        />
      ) : null}

      {selectedProject ? (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <CaseStudyPage project={selectedProject} />
        </Suspense>
      ) : (
        <>
          <Navbar />

          <main>
            <Hero />
            <AiManifesto />
            <Works />
            <Experience />
            <Skills />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}
