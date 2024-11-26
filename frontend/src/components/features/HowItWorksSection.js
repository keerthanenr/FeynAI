// src/components/features/HowItWorksSection.js
import StepCard from "./StepCard";

export default function HowItWorksSection() {
  const steps = [
    {
      imageSrc: "/images/explain.png",
      altText: "Step 1",
      title: "Explain",
      description: "You start by choosing a topic you want to talk about. FeynAI takes on the role of a curious 12-year-old, listening as you explain the concept in simple terms."
    },
    {
      imageSrc: "/images/question.png",
      altText: "Step 2",
      title: "Question",
      description: "The AI acts like a curious child, asking you follow-up questions to reveal gaps in your understanding or unclear points, pushing you to refine your explanation until the concept is fully understood."
    },
    {
      imageSrc: "/images/review.png",
      altText: "Step 3",
      title: "Review",
      description: "If you hesitate, struggle to explain clearly, or rely on jargon without clarification, the session ends—reinforcing the idea that simplicity and clarity show true understanding, as taught by the Feynman Technique: \"If you want to master something, teach it.\""
    }
  ];

  return (
    <div className="w-full max-w-[1440px] flex flex-col"> {/* Same max-width as hero */}
      <h1 className="text-5xl sm:text-4xl font-semibold mt-16 mb-12"> {/* Increased bottom margin */}
        How it works
      </h1>
      <div className="grid grid-cols-3 gap-8 w-full"> {/* Changed to grid for even spacing */}
        {steps.map((step, index) => (
          <StepCard
            key={index}
            imageSrc={step.imageSrc}
            altText={step.altText}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}