import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col">
      <div className="relative">
        <Image
          src="/images/stargaze.png"
          alt="Stargaze"
          width={1440}
          height={400}
          className="object-contain rounded-lg"
          priority
        />
        <div className="absolute left-36 top-2/3 transform -translate-y-1/3 text-white sm:text-xl font-semibold">
          <h1 className="text-4xl sm:text-5xl mb-2">If you know, you know.</h1>
          <p className="text-lg sm:text-xl">
            Simulate conversations with a curious 12-year-old to help you master topics through teaching.
          </p>
        </div>
      </div>
    </div>
  );
}