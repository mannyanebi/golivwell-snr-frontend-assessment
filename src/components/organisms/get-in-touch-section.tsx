import PhoneCall from "../../assets/icons/PhoneCall.svg";
import User from "../../assets/icons/User.svg";
import EnvelopeSimple from "../../assets/icons/EnvelopeSimple.svg";
import TextInput, { TextInputProps } from "../atoms/text-input";
import Button from "../atoms/button";
import Instagram from "../../assets/icons/Instagram.svg";
import TwitterBird from "../../assets/icons/TwitterBird.svg";
import Dribble from "../../assets/icons/Dribble.svg";
import Behance from "../../assets/icons/Behance.svg";
import SectionFooterIcon from "../atoms/section-footer-icon";

const textInputs: TextInputProps[] = [
  {
    placeholder: "Full name",
    type: "text",
    icon: User,
  },
  {
    placeholder: "Email",
    type: "email",
    icon: EnvelopeSimple,
  },
];

function GetInTouchSection() {
  return (
    <div className="flex flex-col space-y-6 p-16 my-24 rounded-2xl bg-white">
      <h1 className="text-3xl font-display font-bold">Let’s get in touch!</h1>
      <p className="font-light">
        Got questions about the Landing Page UI Kit? Our team is here to help.
        Contact us for quick and friendly support.
      </p>

      <div className="flex flex-row space-x-4 items-center justify-center">
        <div className="w-1/2">
          <div className="flex flex-col space-y-4 items-start justify-start">
            <div className="flex flex-row space-x-4 items-center justify-center">
              <img src={PhoneCall} alt="phone-call" />
              <p className="font-light">+012 345 6789</p>
            </div>
            <div className="flex flex-row space-x-4 items-center justify-center">
              <img src={EnvelopeSimple} alt="phone-call" />
              <p className="font-light">hello@animaapp.com</p>
            </div>
            <div className="flex flex-col space-y-4 pt-8 items-start justify-center">
              <h4 className="text-xl font-bold">Connect with us</h4>
              <div className="flex flex-row space-x-4 items-center justify-center">
                <SectionFooterIcon icon={Instagram} />
                <SectionFooterIcon icon={Dribble} />
                <SectionFooterIcon icon={Behance} />
                <SectionFooterIcon icon={TwitterBird} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col space-y-4 items-start justify-start">
            {textInputs.map((input, index) => (
              <TextInput key={index} {...input} />
            ))}
            <Button variant="primary" size="xl" roundedSize="2xl">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouchSection;
