import CTAMockupMd from "../../assets/images/CTAMockupMd.png";
import CTAMockupXl from "../../assets/images/CTAMockupXl.png";
import CTAMockupSm from "../../assets/images/CTAMockupSm.png";
import ArrowLeftWhite from "../../assets/icons/ArrowLeftWhite.svg";
import Button from "../atoms/button";

function LastCTASection() {
  return (
    <div className="flex md:h-[400px] xl:h-[430px] bg-[#f2bfaf] rounded-2xl pt-8 md:py-16 flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex flex-col space-y-4 w-full md:w-1/2 p-5 md:pl-12 justify-center items-center md:items-start">
        <h1 className="text-2xl md:text-4xl text-center md:text-left xl:text-5xl font-display font-bold">
          Get Landing Page UI Kit Today!
        </h1>
        <p className="text-sm text-center md:text-left md:text-base xl:text-lg">
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
      <div className="w-full md:w-1/2 flex items-end justify-end">
        <img src={CTAMockupXl} className="hidden xl:block" width="578px" alt="CTA Mockup" />
        <img src={CTAMockupMd} className="hidden md:block xl:hidden" width="578px" alt="CTA Mockup" />
        <img src={CTAMockupSm} className="block md:hidden" width="578px" alt="CTA Mockup" />
      </div>
    </div>
  );
}

export default LastCTASection;
