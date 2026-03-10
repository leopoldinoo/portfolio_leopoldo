import Image from "next/image";

export default function Header() {
  return (
    <header className="relative flex items-center justify-around backdrop-blur-md p-6 bg-transparent">
      <div className="text-2xl font-bold opacity-100 transition:opacity text-white">
      <Image src={"/logo.png"}  alt="Logo" width={150} height={40} className="inline-block mr-2 opacity-80"/>
      </div>
      <nav className="space-x-6">
        <a href="#about" className="text-white hover:text-gray-300 transition">Sobre</a>
        <a href="#projects" className="text-white hover:text-gray-300 transition">Projetos</a>
        <a href="#contact" className="text-white hover:text-gray-300 transition">Contato</a>
        <a href="#skills" className="text-white hover:text-gray-300 transition">Habilidades</a>
      </nav>
    </header>
  )};
