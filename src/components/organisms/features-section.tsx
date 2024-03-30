import FeatureCard, { FeatureCardProps } from "../molecules/features-card";
import SectionContainer from "../molecules/section-container";
import BoundingBox from "../../assets/icons/BoundingBox.svg";
import MagicWand from "../../assets/icons/MagicWand.svg";
import Confetti from "../../assets/icons/Confetti.svg";

const features: FeatureCardProps[] = [
  {
    iconImg: MagicWand,
    iconBgColor: "bg-[#FF6250]/20",
    title: "Fast Building",
    description:
      "Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!",
  },
  {
    iconImg: BoundingBox,
    iconBgColor: "bg-[#009379]/20",
    title: "Responsive Design",
    description:
      "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
  },
  {
    iconImg: Confetti,
    iconBgColor: "bg-[#F8D57E]/20",
    title: "No Code Needed",
    description:
      "Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.",
  },
];

function FeaturesSection() {
  return (
    <SectionContainer>
      <SectionContainer.Header>Features</SectionContainer.Header>
      <SectionContainer.HeaderDesc>
        These are just a few features you’ll get using Anima Landing Page Ui
        Kit.
      </SectionContainer.HeaderDesc>
      <div className="grid grid-cols-3 gap-20 items-center justify-center p-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default FeaturesSection;
