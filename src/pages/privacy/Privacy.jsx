// import styles from "./Privacy.module.css";
import TextComponents from "../../components/textcomponents/TextComponents";
import Img from "../../components/imgComponents/Img";

const datas = [
  {
    title: "1. Information We Collect",
    secondTitle: "1.1 Personal Information",
    para: "When you use our online bus ticket booking service, we may collect certain personal information to facilitate your bookings and improve our services. This may include, but is not limited to:",
    secondPara: "1.1.1 Contact Information:",
    thirdPara:
      "Name, email address, phone number, and billing address for communication and ticket delivery purposes.",
  },
  {
    title: "2. How We Use Your Information",
    secondTitle: "2.1 Ticket Bookings",
    para: "We use the information collected to provide the bus ticket booking services you request. This includes:",
    secondPara: "2.1.1 Processing Payments:",
    thirdPara:
      "We may use your payment information to complete your ticket bookings and transactions.",
  },
  {
    title: "3. Information Sharing and Disclosure",
    secondTitle: "3.1 Service Providers",
    para: "We may share your personal information with trusted third-party service providers who assist us in providing our services. These service providers are required to protect your information and only use it for the specific purposes we outline.",
  },
  {
    title: "4. Data Security",
    secondTitle: "4.1 Security Measures",
    para: "We take reasonable and appropriate measures to protect your personal information from unauthorized access or disclosure. However, no data transmission over the internet can be guaranteed to be completely secure.",
  },
  {
    title: "5. Your Rights",
    secondTitle: "5.1 Access, Correction, and Deletion",
    para: "You have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us using the information provided at the end of this policy.",
  },
  {
    title: "6. Changes to this Privacy Policy",
    para: "We may update our Privacy Policy to reflect changes to our practices or for legal, regulatory, or operational reasons. We will post any revised Privacy Policy on our website, and the changes will take effect when posted.",
  },
  {
    title: "7. Contact Us",
    para: "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:",
    secondPara: "Email: info@yourtravelagency.com",
    thirdPara: "Address: [Your Travel Agency Address, City, Albania]",
  },
];

function Privacy() {
  return (
    <>
      <Img src={"./banner/banner-privacy.jpg"} />

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

export default Privacy;
