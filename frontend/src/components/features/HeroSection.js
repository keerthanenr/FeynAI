// Hero section with background video and main value proposition of the application.
export default function HeroSection() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          width={1440}
          height={600}
          className="w-[1440px] h-[600px] object-cover rounded-lg"
        >
          <source src="/images/curious.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 rounded-lg" />
        <div className="absolute left-36 top-2/3 transform -translate-y-1/3 text-white sm:text-xl font-semibold z-10">
          <h1 className="text-4xl sm:text-5xl mb-2">If you know, you know.</h1>
          <p className="text-lg sm:text-xl">
            Explain topics through engaging conversations with a curious 12-year-old to help you master subjects through teaching.
          </p>
        </div>
      </div>
    </div>
  );
}