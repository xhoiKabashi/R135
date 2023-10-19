// import styles from "./WorkWithUs.module.css";
import Img from "../../components/imgComponents/Img";
import TextComponents from "../../components/textcomponents/TextComponents";
// import styles from "./WorkWithUs.module.css";

const datas = [
  {
    secondTitle: "Join Our Team",
    para: "Are you passionate about web development and excited about the possibilities of React.js? Do you want to be a part of a team that is redefining how people travel and book bus tickets? If so, you're in the right place.",
    secondPara:
      "We're always on the lookout for talented and enthusiastic individuals to join our mission. Our team is comprised of web development enthusiasts who are deeply committed to making travel simpler and more enjoyable.",
    thirdPara:
      "Whether you're an experienced full-stack developer or a junior developer looking to grow your skills, we welcome you to explore the opportunities with us.",
  },
  {
    title: "Our Mission",
    secondTitle: "",
    para: "Our mission is to provide innovative and user-friendly solutions for travelers. We believe in the power of technology to enhance the travel experience, and our commitment to this vision drives us every day.",
    secondPara:
      "By harnessing the capabilities of React.js and cutting-edge web development, we aim to make the journey seamless and enjoyable for our users. If you share our vision, we want to hear from you.",
    thirdPara: "",
  },
  {
    title: "What We Offer",
    secondTitle: "For Full-Stack Developers",
    para: "As a full-stack developer, you'll have the opportunity to work on the entire stack of our web applications, from the front-end user interfaces to the back-end server and database systems.",
    secondPara:
      "You'll collaborate with a talented team of developers to create cutting-edge solutions, and you'll have the chance to influence the direction of our technology stack.",
    thirdPara:
      "We value innovation, and we're committed to providing a supportive environment for your growth and professional development.",
  },
  {
    title: "What We Offer",
    secondTitle: "For Junior Developers",
    para: "If you're a junior developer, this is your chance to kickstart your career in web development. We provide mentorship and guidance to help you develop your skills and gain real-world experience.",
    secondPara:
      "You'll work closely with experienced developers and learn from the best in the field. We believe in nurturing talent and are excited to help you grow into a successful web developer.",
    thirdPara:
      "Your passion and dedication are what we value most. If you're eager to learn and ready to take on new challenges, we encourage you to apply.",
  },
  {
    title: "How to Apply",
    secondTitle: "",
    para: "To apply for a position with us, please send your resume and a cover letter to our HR department. In your cover letter, tell us why you're interested in joining our team and how your skills align with our mission.",
    secondPara:
      "We review applications on an ongoing basis and will reach out to schedule interviews with qualified candidates. If you have any questions or need further information, feel free to contact us.",
    thirdPara: "",
  },
];

function WorkWithUs() {
  return (
    <>
      <Img src={"./banner/banner-work.jpg"} />
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

export default WorkWithUs;
