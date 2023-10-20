import { useContext } from "react";
import TextComponents from "../../components/textcomponents/TextComponents";
import Img from "../../components/imgComponents/Img";
import { v4 as uuidv4 } from "uuid";
import Lang from "../../Context";
import { ita, sq, eng, de } from "./NeedHelpData";

function NeedHelp() {
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

export default NeedHelp;
