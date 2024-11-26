// src/components/layout/Header.js
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full max-w-[1440px] relative">
      {/* Center text container */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <h1 className="text-4xl font-bold flex items-baseline gap-2">
          Feyn
        </h1>
        <p className="text-lg text-gray-600">"If you want to master something, teach it."</p>
      </div>
      
      {/* Empty div for spacing on left */}
      <div></div>
      
      <Button className="bg-[#e5e2df] hover:bg-[#d8d5d2] text-black font-normal py-2 px-4 rounded-lg transition-colors duration-200">
        Meet Feyn
      </Button>
    </header>
  );
}