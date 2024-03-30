import CTAMockup from "../../assets/images/CTAMockup.png";
import ArrowLeftWhite from "../../assets/icons/ArrowLeftWhite.svg";
import Button from "../atoms/button";

function LastCTASection() {
  return (
    <div className="flex h-[430px] bg-[#f2bfaf] rounded-2xl py-16 flex-row justify-between items-center space-x-8">
      <div className="flex flex-col space-y-4 w-1/2 pl-12 justify-center items-start">
        <h1 className="text-5xl font-display font-bold">
          Get Landing Page UI Kit Today!
        </h1>
        <p className="text-lg">
          Break the Figma limits and explore the endless possibilities with
          Anima.
        </p>
        <Button
          variant="primary"
          size="2xl"
          roundedSize="2xl"
          rightSection={
            <img
              src={ArrowLeftWhite}
              width="25px"
              className="pl-2"
              alt="button-icon"
            />
          }
        >
          Get Started
        </Button>
      </div>
      <div className="w-1/2 flex items-end justify-end">
        <img src={CTAMockup} width="578px" alt="CTA Mockup" />
      </div>
    </div>
  );
}

export default LastCTASection;
