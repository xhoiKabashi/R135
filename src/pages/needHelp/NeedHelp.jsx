import { useContext } from "react";
import TextComponents from "../../components/textcomponents/TextComponents";
import Img from "../../components/imgComponents/Img";
import { v4 as uuidv4 } from "uuid";
import Lang from "../../Context";
import { ita, sq, eng, de, itImg, deImg, sqImg, engImg } from "./NeedHelpData";

function NeedHelp() {
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
    imgData = engImg;
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

export default NeedHelp;
