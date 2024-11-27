import Image from "next/image";
import Button from "@/components/ui/Button";

// Initial introduction screen featuring Feyn's character and invitation to start explaining.
export default function ConversationStarterScreen() {
  return (
    <div 
      id="conversation-starter" 
      className="min-h-screen flex items-center justify-center"
    >
      <div className="flex items-start gap-16">
        <div className="relative w-[600px] h-[600px]">
          <Image
            src="/images/feyn1.png"
            alt="Feyn character"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="flex flex-col justify-between h-[600px]">
          <h1 className="text-7xl font-semibold w-[600px] text-center">
            Hi, I'm Feyn. I'm 12 years old and I love learning. I'm here to help you learn too!
          </h1>
          
          <div className="w-[600px]">
            <Button className="w-full mt-0" action="chat">
              Teach me something
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}