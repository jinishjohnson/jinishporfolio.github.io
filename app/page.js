"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] dark:bg-[var(--background)] text-black dark:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
