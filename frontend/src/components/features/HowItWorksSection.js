// src/components/features/HowItWorksSection.js
import StepCard from "./StepCard";

export default function HowItWorksSection() {
  const steps = [
    {
      imageSrc: "/images/explain.png",
      altText: "Step 1",
      title: "Explain",
      description: "You start by choosing a topic you want to talk about. Feyn the curious 12-year-old intriqued will listen attentively as you explain the concept in simple terms."
    },
    {
      imageSrc: "/images/question.png",
      altText: "Step 2",
      title: "Question",
      description: "Being the curious 12-year-old he is, Feyn will ask follow-up questions that might reveal gaps in your understanding, pushing you to refine your explanation until the concept is fully understood."
    },
    {
      imageSrc: "/images/review.png",
      altText: "Step 3",
      title: "Review",
      description: "If you hesitate, use unclear explanations, or rely on jargon, the conversation ends, review and try again. The goal is to explain your topic simply and clearly to Feyn, without being tripped up by his follow-up questions."
    }
  ];

  return (
    <div className="w-full max-w-[1440px] flex flex-col mb-24"> {/* Matched hero section width */}
      <h1 className="text-5xl sm:text-4xl font-semibold mt-16 mb-12">
        How it works
      </h1>
      <div className="grid grid-cols-3 gap-12 w-full"> {/* Increased gap for better spacing */}
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