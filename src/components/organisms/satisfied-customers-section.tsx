import SectionContainer from "../molecules/section-container";
import CustomerReviewCard, {
  CustomerReviewCardProps,
} from "../molecules/customer-review-card";
import SarahK from "../../assets/images/sarah-k-rounded-photo.png";
import MichaelL from "../../assets/images/michael-l-rounded-photo.png";
import LaurenM from "../../assets/images/lauren-m-rounded-photo.png";

const reviews: CustomerReviewCardProps[] = [
  {
    name: "Sarah K.",
    photo: SarahK,
    role: "UX Designer @Brello",
    review: `"I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"`,
    rating: 5,
  },
  {
    name: "Michael L.",
    photo: MichaelL,
    role: "Creative Director @Yo",
    review: `“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"`,
    rating: 4,
  },
  {
    name: "Lauren M.",
    photo: LaurenM,
    role: "UI Designer @Boo",
    review: `"Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."`,
    rating: 5,
  },
];

function SatisfiedCustomersSection() {
  return (
    <SectionContainer>
      <SectionContainer.Header>
        Real Stories from Satisfied Customers
      </SectionContainer.Header>
      <SectionContainer.HeaderDesc>
        See how our landing page ui kit is making an impact.
      </SectionContainer.HeaderDesc>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 md:gap-10 xl:gap-20 items-center justify-center p-3 md:p-6">
        {reviews.map((review) => (
          <CustomerReviewCard key={review.name.toLowerCase()} {...review} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default SatisfiedCustomersSection;
