// import styles from "./WorkWithUs.module.css";
import Img from "../../components/imgComponents/Img";
import TextComponents from "../../components/textcomponents/TextComponents";
import { useContext } from "react";
import Lang from "../../Context";
import { ita, sq, eng, de } from "./WorkWithUsData";
import { v4 as uuidv4 } from "uuid";

// import styles from "./WorkWithUs.module.css";

function WorkWithUs() {
  const { data } = useContext(Lang);
  let languageData;

  if (data === "ita") {
    languageData = ita;
  } else if (data === "sq") {
    languageData = sq;
  } else if (data === "de") {
    languageData = de;
  } else {
    languageData = eng; // Default to English or any other fallback language
  }
  return (
    <>
      <Img src={"./banner/banner-terms.jpg"} />

      {languageData.map((item) => (
        <TextComponents
          key={uuidv4()}
          title={item.title}
          secondTitle={item.secondTitle}
          para={item.para}
          secondPara={item.secondPara}
          thirdPara={item.thirdPara}
        />
      ))}
    </>
  );
}

export default WorkWithUs;
