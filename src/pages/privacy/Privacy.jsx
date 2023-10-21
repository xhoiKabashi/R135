// import styles from "./Privacy.module.css";
import { useContext } from "react";
import TextComponents from "../../components/textcomponents/TextComponents";
import { v4 as uuidv4 } from "uuid";

import Img from "../../components/imgComponents/Img";
import Lang from "../../Context";
import { ita, sq, eng, de, itImg, deImg, sqImg, engImg } from "./PrivacyData";

function Privacy() {
  const { data } = useContext(Lang);
  let languageData;
  let imgData;

  if (data === "ita") {
    languageData = ita;
    imgData = itImg;
  } else if (data === "sq") {
    languageData = sq;
    imgData = sqImg;
  } else if (data === "de") {
    languageData = de;
    imgData = deImg;
  } else {
    languageData = eng;
    imgData = engImg; // Default to English or any other fallback language
  }
  return (
    <>
      <Img src={imgData} />

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
export default Privacy;
