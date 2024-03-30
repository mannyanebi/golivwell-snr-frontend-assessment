import Button from "../atoms/button";
import RocketLaunch from "../../assets/icons/RocketLaunch.svg";
import HeroImage from "../../assets/images/hero-image.png";

function Hero() {
  return (
    <div className="h-[690px] py-12 flex flex-col xl:flex-row justify-center items-center space-y-6 xl:space-x-6 xl:space-y-0">
      <div className="flex flex-col w-full xl:w-8/12 space-y-4 items-center xl:items-start justify-center">
        <h1 className="font-display text-6xl text-center xl:text-left leading-[5rem] w-full xl:w-1/2 font-bold">
          Create Engaging Landing Pages
        </h1>
        <p className="text-lg mt-4 w-4/5">
          Build beautiful landing pages in record time with Anima’s Landing Page
          UI kit for Figma. No code required!
        </p>
        <div className="flex flex-row items-center space-x-8">
          <Button
            variant="primary"
            size="2xl"
            roundedSize="2xl"
            leftSection={<img className="pr-2" src={RocketLaunch} />}
          >
            Get Started
          </Button>
          <Button variant="outline" size="2xl" roundedSize="2xl">
            How it works
          </Button>
        </div>
      </div>
      <div className="w-1/2 xl:w-4/12">
        <img src={HeroImage} />
      </div>
    </div>
  );
}

export default Hero;
