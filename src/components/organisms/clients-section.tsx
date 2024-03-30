import Fedex from "../../assets/images/fedex.png";
import Amazon from "../../assets/images/amazon.png";
import Airbnb from "../../assets/images/airbnb.png";
import Hubspot from "../../assets/images/hubspot.png";
import Microsoft from "../../assets/images/microsoft.png";
import Google from "../../assets/images/google.png";

const clients = [
  {
    name: "Airbnb",
    image: Airbnb,
    alt: "Airbnb",
  },
  {
    name: "Google",
    image: Google,
    alt: "Google",
  },
  {
    name: "Amazon",
    image: Amazon,
    alt: "Amazon",
  },
  {
    name: "Microsoft",
    image: Microsoft,
    alt: "Microsoft",
  },
  {
    name: "Fedex",
    image: Fedex,
    alt: "Fedex",
  },
  {
    name: "Hubspot",
    image: Hubspot,
    alt: "Hubspot",
  },
];

function ClientsSection() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center px-6 py-12">
      {clients.map((client) => (
        <img className="mx-auto" key={client.name} src={client.image} alt={client.alt} />
      ))}
    </div>
  );
}

export default ClientsSection;
