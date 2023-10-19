import TextComponents from "../../components/textcomponents/TextComponents";
import Img from "../../components/imgComponents/Img";
const datas = [
  {
    title: "",
    secondTitle: "1.1 Contact Information",
    para: "If you need assistance or have any questions, please feel free to contact us. Our dedicated support team is here to help you with any queries you may have.",
    secondPara: "1.1.1 Contact Details",
    thirdPara: "You can reach us through the following contact information:",
  },
  {
    title: "1.2 Customer Support",
    secondTitle: "1.2.1 Email Support",
    para: "For general inquiries, feedback, or assistance, you can send an email to our support team at support@travelagency.com. We aim to respond to your emails promptly and provide the help you need.",
    secondPara: "1.2.2 Phone Support",
    thirdPara:
      "You can also contact our customer support team via phone at +123-456-7890 during our business hours. Our agents are ready to assist you with your travel-related concerns.",
  },
  {
    title: "1.3 Physical Locations",
    secondTitle: "1.3.1 Ticketing Counters",
    para: "If you prefer in-person assistance, you can visit one of our ticketing counters located in various cities. Our staff will be happy to help you with ticket bookings, information, and support.",
    secondPara: "1.3.2 Head Office",
    thirdPara:
      "Our head office is located at 123 Travel Street, Cityville. You can visit us during office hours for detailed assistance and information regarding our services.",
  },
  {
    title: "1.4 Online Help Center",
    secondTitle: "1.4.1 FAQs and Guides",
    para: "Explore our online Help Center for a wealth of information, frequently asked questions, and step-by-step guides. You can find answers to common queries, ticket booking instructions, and travel tips to make your journey smooth.",
    secondPara: "1.4.2 Live Chat",
    thirdPara:
      "Our website offers a live chat feature for real-time assistance. You can chat with our support agents and get immediate help with your concerns while browsing our platform.",
  },
];

function NeedHelp() {
  return (
    <>
      <Img src={"./banner/banner-help.jpg"} />

      {datas.map((data) => (
        <TextComponents
          key={data.title}
          title={data.title}
          secondTitle={data.secondTitle}
          para={data.para}
          secondPara={data.secondPara}
          thirdPara={data.thirdPara}
        />
      ))}
    </>
  );
}

export default NeedHelp;
