import FilledStarIcon from "../../assets/icons/FilledStarIcon.svg";
import EmptyStarIcon from "../../assets/icons/EmptyStarIcon.svg";

export type CustomerReviewCardProps = {
  photo: string;
  name: string;
  role: string;
  review: string;
  rating: number;
};

function CustomerReviewCard({
  name,
  photo,
  rating,
  review,
  role,
}: CustomerReviewCardProps) {
  return (
    <div className="w-[370px] h-[380px] bg-white shadow-sm rounded-[20px] text-center p-7 flex flex-col space-y-7 items-center justify-center">
      <div className="flex flex-col space-y-1 justify-center items-center">
        <div className="h-[3rem] w-[3rem] flex items-center justify-center">
          <img src={photo} alt="customer" />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="font-light">{role}</p>
      </div>
      <p className="text-sm font-light w-10/12">{review}</p>
      <div className="flex flex-row space-x-1 items-center justify-center">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={index < rating ? FilledStarIcon : EmptyStarIcon}
            alt="star"
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerReviewCard;
