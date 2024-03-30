import PricingCard, { PricingCardProps } from "../molecules/pricing-card";
import SectionContainer from "../molecules/section-container";

const pricings: PricingCardProps[] = [
  {
    title: "Free",
    price: "$0",
    description: "Best for Small Teams or Individuals.",
    features: ["Unlimited Bandwidth", "Unlimited Disk Space", "24/7 Support"],
  },
  {
    title: "Professional",
    price: "$19",
    description: "Ideal for Growing Companies.",
    features: ["Unlimited Bandwidth", "24/7 Support", "Unlimited Domains"],
  },
  {
    title: "Enterprise",
    price: "$49",
    description: "Ultimate for Enterprise Solutions.",
    features: ["Unlimited Emails", "Unlimited Domains", "24/7 Support"],
  },
];

function PricingSection() {
  return (
    <SectionContainer>
      <SectionContainer.Header>Pick Your Perfect Plan</SectionContainer.Header>
      <SectionContainer.HeaderDesc>
        Find the perfect plan for your business with our flexible pricing
        options.
      </SectionContainer.HeaderDesc>
      <div className="grid grid-cols-3 gap-20 items-center justify-center p-6">
        {pricings.map((pricing) => (
          <PricingCard key={pricing.title.toLowerCase()} {...pricing} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default PricingSection;
