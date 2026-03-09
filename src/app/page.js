import ParticleBackgrounds from "@/components/backgrounds/ParticleBackground.jsx";
import Image from "next/image";
import Header from "@/components/Header.jsx";
import HeroSection from "@/components/HeroSection.jsx";
export default function Home() {
  return (
    <main>
      <Header></Header>
      <HeroSection></HeroSection>
      <ParticleBackgrounds />
    </main>
  );
}