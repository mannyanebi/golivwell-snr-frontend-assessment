import Instagram from "../../assets/icons/Instagram.svg";
import TwitterBird from "../../assets/icons/TwitterBird.svg";
import Dribble from "../../assets/icons/Dribble.svg";
import SectionFooterIcon from "../atoms/section-footer-icon";

export type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
};

function TeamMember({ name, image, role }: TeamMemberProps) {
  return (
    <div className="md:w-[213px] xl:w-[370px] md:min-h-[345px] xl:min-h-[380px] bg-white group-hover:bg-primary drop-shadow-sm group-hover:text-white shadow-sm rounded-[20px] text-center flex flex-col space-y-3 items-start justify-center">
      <img src={image} alt="SarahKFaceCard" />
      <div className="flex flex-col w-full space-y-3 py-2 border-b border-b-gray-300 items-center justify-center">
        <h4 className="text-xl text-center font-semibold">{name}</h4>
        <h3 className="text-lg text-center font-light">{role}</h3>
      </div>
      <div className="flex flex-row w-full text-center py-5 space-x-4 items-center justify-center">
        <SectionFooterIcon icon={TwitterBird} />
        <SectionFooterIcon icon={Dribble} />
        <SectionFooterIcon icon={Instagram} />
      </div>
    </div>
  );
}

export default TeamMember;
