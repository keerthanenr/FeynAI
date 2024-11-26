import Image from "next/image";
import Header from "@/components/layout/Header";
import HowItWorksSection from "@/components/features/HowItWorksSection";
import HeroSection from "@/components/features/HeroSection";
import Button from "@/components/ui/Button";
import ConversationStarterScreen from "@/components/features/ConversationStarterScreen";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <div className="min-h-screen flex flex-col snap-start">
        <header className="flex justify-center items-center py-4 border-b">
          <Header />
        </header>
        <main className="flex flex-col flex-grow items-center justify-start p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <HeroSection />
          <HowItWorksSection />
          <Button>Meet Feyn</Button>
        </main>
      </div>
      <div className="min-h-screen snap-start">
        <ConversationStarterScreen />
      </div>
    </div>
  );
}