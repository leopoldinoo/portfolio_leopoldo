import ParticleBackgrounds from "@/components/backgrounds/ParticleBackground.jsx";
import Image from "next/image";
import Header from "@/components/Header.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import AboutSection from "@/components/AboutSection.jsx";
import ProjectsSection from "@/components/ProjectsSection.jsx";
export default function Home() {
  return (
    <main className="relative overflow-hidden flex flex-col justify-center">
      <Header></Header>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <ParticleBackgrounds />
    </main>
  );
}