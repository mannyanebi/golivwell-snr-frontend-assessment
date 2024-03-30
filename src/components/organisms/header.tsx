import Logo from "../../assets/icons/logo.svg";
import RocketLaunch from "../../assets/icons/RocketLaunch.svg";
import Button from "../atoms/button";

function Header() {
  return (
    <div>
      <div className="flex justify-center md:justify-between items-center py-4">
        <div className="flex flex-row text-xl items-center space-x-2">
          <img src={Logo} alt="Logo" />
          <p className="text-center md:text-left font-bold">
            Landing<span className="font-normal">Page</span>
          </p>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <Button
            className="hidden xl:flex"
            variant="link"
            size="2xl"
            roundedSize="2xl"
          >
            Contact
          </Button>
          <Button
            className="hidden md:flex"
            variant="light"
            size="2xl"
            roundedSize="2xl"
          >
            How it works
          </Button>
          <Button
            className="hidden xl:flex"
            variant="primary"
            size="2xl"
            roundedSize="2xl"
            leftSection={<img className="pr-2" src={RocketLaunch} />}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
