import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import FullStack from "@/components/sections/FullStack";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import ExtraCurriculars from "@/components/sections/ExtraCurriculars";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <FullStack />
      <Skills />
      <Achievements />
      <ExtraCurriculars />
      <Contact />
      <Footer />
    </main>
  );
}
