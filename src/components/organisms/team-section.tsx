import SectionContainer from "../molecules/section-container";
import SarahKFaceCard from "../../assets/images/SarahKFaceCard.png";
import MichaelLFaceCard from "../../assets/images/MichaelLFaceCard.png";
import LaurenMFaceCard from "../../assets/images/LaurenMFaceCard.png";
import TeamMember, { TeamMemberProps } from "../molecules/team-member-card";

const teamMembers: TeamMemberProps[] = [
  {
    name: "Sarah K",
    role: "UX Designer",
    image: SarahKFaceCard,
  },
  {
    name: "Michael L",
    role: "Software Engineer",
    image: MichaelLFaceCard,
  },
  {
    name: "Lauren M",
    role: "Product Manager",
    image: LaurenMFaceCard,
  },
];

function TeamSection() {
  return (
    <SectionContainer>
      <SectionContainer.Header>Meet our team</SectionContainer.Header>
      <SectionContainer.HeaderDesc>
        Get to know the faces behind the scenes and learn about the values that
        drive us.
      </SectionContainer.HeaderDesc>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 xl:gap-20 items-center justify-center p-3 md:p-6">
        {teamMembers.map((teamMember) => (
          <TeamMember key={teamMember.name.toLowerCase()} {...teamMember} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default TeamSection;
