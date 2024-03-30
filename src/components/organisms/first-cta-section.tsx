import SectionContainer from "../molecules/section-container";
import VisualsRounded from "../../assets/images/VisualsRounded.png";
import ArrowLeftWhite from "../../assets/icons/ArrowLeftWhite.svg";
import Button from "../atoms/button";

function FirstCTASection() {
  return (
    <SectionContainer>
      <div className="flex flex-row justify-between items-center space-x-8">
        <img src={VisualsRounded} className="w-1/2" alt="Visuals" />
        <div className="flex flex-col space-y-4 w-1/2 pl-6 xl:pl-12 justify-center items-start">
          <h1 className="text-3xl xl:text-5xl font-display font-bold">
            Get Landing Page UI Kit Today!
          </h1>
          <p className="text-md xl:text-lg">
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
