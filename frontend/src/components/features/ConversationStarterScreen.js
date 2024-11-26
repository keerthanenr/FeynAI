import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ConversationStarterScreen() {
  return (
    <div 
      id="conversation-starter" 
      className="min-h-screen flex items-center justify-center"
    >
      <div className="flex items-start gap-16"> {/* Changed from items-center to items-start */}
        <div className="relative w-[600px] h-[600px]">
          <Image
            src="/images/feyn1.png"
            alt="Feyn character"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="flex flex-col justify-between h-[600px]"> {/* Added h-[600px] and justify-between */}
          <h1 className="text-7xl font-semibold w-[600px] text-center">  {/* Removed mb-8 */}
            Hi, I'm Feyn. I'm 12 years old and I love learning. I'm here to help you learn too!
          </h1>
          
          <div className="w-[600px]">
            <Button className="w-full mt-0"> {/* Added mt-0 to remove top margin */}
              Teach me something
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}