import Github from "../../assets/icons/Github.svg";
import InstagramWhite from "../../assets/icons/InstagramWhite.svg";
import Youtube from "../../assets/icons/Youtube.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import FooterIcon from "../atoms/footer-icon";

function Footer() {
  return (
    <div className="flex h-14 w-full py-12 px-14 bg-[#2D2D2D] text-white flex-row justify-between items-center">
      <p>© 2023 Anima’s Landing Page Ui Kit. </p>
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
