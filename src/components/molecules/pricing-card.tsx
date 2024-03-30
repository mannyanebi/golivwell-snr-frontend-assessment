import Check from "../../assets/icons/Check.svg";
import CheckWhite from "../../assets/icons/CheckWhite.svg";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import Button from "../atoms/button";

export type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
};

function PricingCardFeature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row space-x-3 items-center justify-start">
      <img src={Check} className="block group-hover:hidden" alt="check-green" />
      <img
        src={CheckWhite}
        className="hidden group-hover:block"
        alt="check-white"
      />
      <p>{children}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
  description,
}: PricingCardProps) {
  return (
    <div className="group">
      <div className="w-[370px] h-[380px] bg-white group-hover:bg-primary drop-shadow-sm group-hover:text-white shadow-sm rounded-[20px] text-center p-7 flex flex-col space-y-3 items-start justify-center">
        <h4 className="text-lg font-light">{title}</h4>
        <h3 className="text-5xl font-extrabold">
          {price} <span className="text-sm font-semibold">/ month</span>
        </h3>
        <p className="text-sm">{description}</p>
        {
          <div className="flex flex-col space-y-3 items-start justify-start">
            {features.map((feature, index) => (
              <PricingCardFeature key={index}>{feature}</PricingCardFeature>
            ))}
          </div>
        }
        <Button
          className="group-hover:bg-white group-hover:text-primary"
          variant="light"
          size="full"
          roundedSize="2xl"
          rightSection={
            <img
              src={ArrowRight}
              width="22px"
              className="pl-2 invisible group-hover:visible"
              alt="button-icon"
            />
          }
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default PricingCard;
