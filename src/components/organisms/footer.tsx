import Github from "../../assets/icons/Github.svg";
import InstagramWhite from "../../assets/icons/InstagramWhite.svg";
import Youtube from "../../assets/icons/Youtube.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import FooterIcon from "../atoms/footer-icon";

function Footer() {
  return (
    <div className="flex min-h-10 w-full py-4 md:py-12 px-14 bg-[#2D2D2D] text-white flex-col-reverse md:space-y-0 md:flex-row justify-center md:justify-between items-start md:items-center">
      <p className="font-extralight text-sm md:text-base md:font-normal">© 2023 Anima’s Landing Page Ui Kit. </p>
      <div className="flex flex-row space-x-4 items-center justify-center">
        <FooterIcon icon={Youtube} />
        <FooterIcon icon={InstagramWhite} />
        <FooterIcon icon={Github} />
        <FooterIcon icon={LinkedIn} />
      </div>
    </div>
  );
}

export default Footer;
