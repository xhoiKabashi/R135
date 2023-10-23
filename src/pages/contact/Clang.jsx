// import Contact from "./Contact";
// import { v4 as uuidv4 } from "uuid";
// import Img from "../../components/imgComponents/Img";
// import { useContext } from "react";
// import Lang from "../../Context";
// import { ita, sq, eng, de, itImg, deImg, sqImg, engImg } from "./ContactData";

// function Contactlang() {
//   const { data } = useContext(Lang);
//   let languageData;
//   let imgData;

//   if (data === "ita") {
//     languageData = ita;
//     imgData = itImg;
//   } else if (data === "sq") {
//     languageData = sq;
//     imgData = sqImg;
//   } else if (data === "de") {
//     languageData = de;
//     imgData = deImg;
//   } else {
//     languageData = eng;
//     imgData = engImg;
//   }
//   return (
//     <>
//       <Img src={imgData} />

//       {languageData.map((item) => (
//         <Contact
//           key={uuidv4(item)}
//           contact={item.contact}
//           firstnamename={item.firstname}
//           lastname={item.lastname}
//           message={item.message}
//           submit={item.submit}
//         />
//       ))}
//     </>
//   );
// }

// export default Contactlang;