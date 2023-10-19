import TextComponents from "../../components/textcomponents/TextComponents";
import Img from "../../components/imgComponents/Img";

const datas = [
  {
    title: "1. Introduction",
    secondTitle: "1.1 Acceptance of Terms",
    para: "By using our services, including purchasing and booking bus tickets, you agree to comply with and be bound by these terms and conditions.",
    secondPara: "",
    thirdPara: "",
  },
  {
    title: "2. Booking and Ticketing",
    secondTitle: "2.1 Ticket Purchase",
    para: "Customers may purchase bus tickets through our website, mobile app, or at physical ticketing counters.",
    secondPara:
      "Ticket availability is subject to change, and prices may vary based on factors such as demand and route.",
    thirdPara:
      "Payment options include credit/debit cards, electronic wallets, and cash at ticket counters.",
  },
  {
    title: "2.2 Reservation and Cancellation",
    secondTitle: "",
    para: "Reservations are available, allowing customers to secure their seats in advance.",
    secondPara:
      "Cancellation policies vary, and we may offer refunds or exchanges under certain circumstances.",
    thirdPara:
      "For detailed information on cancellation fees and policies, please refer to our Cancellation Policy.",
  },
  {
    title: "2.3 Ticket Delivery",
    secondTitle: "",
    para: "E-tickets are issued for online bookings and delivered to customers via email.",
    secondPara:
      "Physical tickets can be collected at designated ticketing counters.",
    thirdPara:
      "Customers must present a valid ID and booking reference when collecting tickets.",
  },
  {
    title: "3. Travel Policies",
    secondTitle: "3.1 Travel Itinerary",
    para: "We offer bus services along specified routes, and our website or app provides route details and schedules.",
    secondPara:
      "Please review your itinerary carefully, as routes, schedules, and stops may vary.",
    thirdPara: "",
  },
  {
    title: "3.2 Traveler Requirements",
    secondTitle: "",
    para: "Passengers are required to carry valid identification (e.g., ID card, passport) for security and verification purposes.",
    secondPara:
      "Travelers with special needs or infants should inform us in advance for assistance.",
    thirdPara: "",
  },
  {
    title: "3.3 Baggage and Luggage",
    secondTitle: "",
    para: "Passengers may carry a reasonable amount of baggage, which must be stored securely during the journey.",
    secondPara: "Oversized or excessive baggage may incur additional fees.",
    thirdPara: "We are not responsible for lost or damaged baggage.",
  },
  {
    title: "3.4 Boarding Process",
    secondTitle: "",
    para: "Passengers must arrive at the designated departure point at least 30 minutes before the scheduled departure time.",
    secondPara: "Boarding is on a first-come, first-served basis.",
    thirdPara: "",
  },
  {
    title: "4. Safety and Regulations",
    secondTitle: "4.1 Passenger Conduct",
    para: "Passengers must behave in a courteous and respectful manner toward fellow travelers, staff, and the driver.",
    secondPara: "Any disruptive or harmful behavior will not be tolerated.",
    thirdPara: "",
  },
  {
    title: "4.2 Security and Safety",
    secondTitle: "",
    para: "We prioritize passenger safety and comply with all Albanian safety regulations.",
    secondPara:
      "Passengers should follow safety instructions provided by our staff and posted on board.",
    thirdPara: "",
  },
  {
    title: "4.3 Compliance with Laws",
    secondTitle: "",
    para: "Passengers are expected to comply with all Albanian laws and regulations during their journey.",
    secondPara:
      "Any illegal activities on board will be reported to authorities.",
    thirdPara: "",
  },
  {
    title: "5. Changes and Cancellations",
    secondTitle: "5.1 Service Changes",
    para: "We reserve the right to modify schedules, routes, or services due to operational, safety, or other reasons.",
    secondPara: "Customers will be notified of significant changes.",
    thirdPara: "",
  },
  {
    title: "5.2 Agency's Responsibilities",
    secondTitle: "",
    para: "In case of service disruptions, we will make reasonable efforts to accommodate passengers on alternate routes or provide refunds as appropriate.",
    secondPara: "",
    thirdPara: "",
  },
  {
    title: "6. Liability and Insurance",
    secondTitle: "6.1 Liability Limitations",
    para: "We assume no liability for delays, loss, injury, or damage arising from factors beyond our control.",
    secondPara:
      "Passengers are advised to have appropriate travel insurance for their journey.",
    thirdPara:
      "6.2 Travel Insurance\n\nWe recommend that passengers obtain travel insurance that covers unexpected cancellations, medical emergencies, and baggage loss.",
  },
  {
    title: "7. Customer Support",
    secondTitle: "7.1 Contact Information",
    para: "For assistance, passengers may contact our customer support team through email, phone, or in-person at our ticketing counters.",
    secondPara:
      "7.2 Dispute Resolution\n\nIn case of disputes or complaints, we have a dedicated process for resolution. Please contact our customer support team for assistance.",
    thirdPara: "",
  },
  {
    title: "8. Privacy and Data",
    secondTitle: "8.1 Privacy Policy",
    para: "Our Privacy Policy outlines how we collect, use, and protect customer data. Please review it for detailed information.",
    secondPara: "",
    thirdPara: "",
  },
  {
    title: "9. Intellectual Property",
    secondTitle: "9.1 Copyright",
    para: "All content and intellectual property on our website, app, and promotional materials are protected by copyright laws. Use without permission is prohibited.",
    secondPara: "",
    thirdPara: "",
  },
  {
    title: "10. Miscellaneous",
    secondTitle: "10.1 Amendments",
    para: "We reserve the right to amend these terms and conditions. Any changes will be updated on our website or app.",
    secondPara:
      "10.2 Entire Agreement, These terms and conditions represent the entire agreement between the agency and passengers.",
    thirdPara:
      "10.3 Governing Law, Albanian laws govern these terms and conditions, and any disputes will be resolved in Albania.",
  },
];

function TermsAndConditions() {
  return (
    <>
      <Img src={"./banner/banner-terms.jpg"} />

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

export default TermsAndConditions;
