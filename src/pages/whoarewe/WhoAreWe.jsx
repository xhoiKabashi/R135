import TextComponents from "../../components/textcomponents/TextComponents";
import Img from "../../components/imgComponents/Img";

// import styles from "./WhoAreWe.module.css";

const datas = [
  {
    title: "",
    secondTitle: "Our Mission",
    para: "We are a dynamic team of web development enthusiasts who are deeply passionate about React.js and the world of web development. Our journey began with a shared vision to revolutionize the way people travel and book bus tickets. Today, we are proud to introduce ourselves and share our mission with you.",
    secondPara:
      "Our mission is to provide innovative and user-friendly solutions for your travel needs. We believe in the power of technology to simplify and enhance the travel experience, and our commitment to this vision drives us every day. By harnessing the capabilities of React.js and cutting-edge web development, we aim to make your journey seamless and enjoyable.",
    thirdPara: "",
  },
  {
    title: "Meet the Team",
    secondTitle: "Xhoi Kabashi",
    para: "Co-Founder & React.js Enthusiast",
    secondPara:
      "Xhoi is a passionate advocate for React.js and its capabilities. With years of experience in the field, he's dedicated to pushing the boundaries of what web development can achieve.",
    thirdPara: "",
  },
  {
    title: "Meet the Team",
    secondTitle: "Boris Mece",
    para: "Co-Founder & Web Development Guru",
    secondPara:
      "Boris is an accomplished web development expert. His love for coding and problem-solving makes him an invaluable asset to our team. With a keen eye for design and usability, Boris ensures that our solutions are not only functional but also visually appealing.",
    thirdPara:
      "We are more than just a web development team; we are dreamers, creators, and problem solvers. Our journey is a reflection of our dedication to making your travel experience better. We invite you to join us on this exciting ride, and together, we can redefine the way you travel.",
  },
  {
    title: "Thank You",
    secondTitle: "",
    para: "We are more than just a web development team; we are dreamers, creators, and problem solvers. Our journey is a reflection of our dedication to making your travel experience better. We invite you to join us on this exciting ride, and together, we can redefine the way you travel.",
    secondPara: "",
    thirdPara: "Thank you for choosing us as your travel partner.",
  },
];

function WhoAreWe() {
  return (
    <>
      <Img src={"./banner/banner-whoarewe.jpg"} />

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

export default WhoAreWe;
