import SectionContainer from "../molecules/section-container";
import VisualsRounded from "../../assets/images/VisualsRounded.png";
import ArrowLeftWhite from "../../assets/icons/ArrowLeftWhite.svg";
import Button from "../atoms/button";

function FirstCTASection() {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
        <img src={VisualsRounded} className="w-full md:w-1/2" alt="Visuals" loading="lazy" />
        <div className="flex flex-col space-y-4 w-full md:w-1/2 pl-0 md:pl-6 xl:pl-12 justify-center items-center md:items-start">
          <h1 className="text-3xl xl:text-5xl text-center md:text-left font-display font-bold">
            Get Landing Page UI Kit Today!
          </h1>
          <p className="text-md text-center md:text-left xl:text-lg">
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
      </div>
    </SectionContainer>
  );
}

export default FirstCTASection;
