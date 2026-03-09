import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-blue-400 mb-5">Olá, Eu sou o Otávio Leopoldino</h1>
      <p className="text-2xl mb-50 w-1/3 text-white">Transformando ideias complexas em aplicações completas e escaláveis.</p>
    </section>
  );
}