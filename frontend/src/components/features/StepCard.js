import Image from "next/image";

// Reusable card component for displaying each step in the learning process with image, title, and descriptio.
export default function StepCard({ imageSrc, altText, title, description }) {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-[250px]">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 450px"
        />
      </div>
      <h3 className="text-xl font-semibold mt-6">{title}</h3>
      <p className="mt-4 text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}