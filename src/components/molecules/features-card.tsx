import Button from "../atoms/button";
import ArrowRight from "../../assets/icons/ArrowRight.svg"

export type FeatureCardProps = {
  iconImg: string;
  iconBgColor: string;
  title: string;
  description: string;
};

function FeatureCard({
  title,
  iconImg,
  iconBgColor = "bg-red-300",
  description,
}: FeatureCardProps) {
  return (
    <div className="w-[370px] h-[380px] bg-white shadow-sm rounded-[20px] text-center p-7 flex flex-col space-y-7 items-center justify-center">
      <div
        className={`${iconBgColor} h-[4.5rem] w-[4.5rem] rounded-[20px] p-3 text-center flex items-center justify-center`}
      >
        <img src={iconImg} alt="icon" />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm font-light w-10/12">{description}</p>
      <Button variant="link" size="3xl" rightSection={<img src={ArrowRight} width="22px" className="pl-2" alt="button-icon" />}>Learn More</Button>
    </div>
  );
}

export default FeatureCard;
