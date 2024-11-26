// src/components/features/StepCard.js
import Image from "next/image"; // Switch to Next.js Image for better control

export default function StepCard({ imageSrc, altText, title, description }) {
  return (
    <div className="flex flex-col w-full max-w-[400px]"> {/* Increased max-width */}
      <div className="relative w-full h-[250px]"> {/* Fixed aspect ratio container */}
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <h3 className="text-xl font-semibold mt-6">{title}</h3> {/* Larger title, more spacing */}
      <p className="mt-4 text-base text-gray-600 leading-relaxed"> {/* Larger text, better spacing */}
        {description}
      </p>
    </div>
  );
}