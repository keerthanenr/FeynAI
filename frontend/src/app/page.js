import Image from "next/image";
import Header from "@/components/layout/Header";
import HowItWorksSection from "@/components/features/HowItWorksSection";
import HeroSection from "@/components/features/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-center items-center py-4 border-b">
        <Header />
      </header>
      <main className="flex flex-col flex-grow items-center justify-start p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <HeroSection />
        <HowItWorksSection />      
      </main>
    </div>
  );
}