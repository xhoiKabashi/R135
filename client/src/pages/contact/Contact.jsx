import styles from "./contact.module.css";
import Img from "../../components/imgComponents/Img";
import TextComponents from "../../components/textcomponents/TextComponents";
import { useContext } from "react";
import Lang from "../../Context";
import { itImg, deImg, sqImg, engImg } from "./ContactData";
import Icon from "@mdi/react";
import { mdiEmailArrowRightOutline, mdiPhoneForwardOutline } from "@mdi/js";

// import { v4 as uuidv4 } from "uuid";

// import styles from "./WorkWithUs.module.css";

function Contact() {
  const { data } = useContext(Lang);
  //   let languageData;
  let imgData;

  const email = "Reach us by Email at:";
  const tel = "Reach us by Phone at:";

  //   const tel = <a href={`tel:${tel}`}>{tel}</a>;

  if (data === "ita") {
    // languageData = ita;
    imgData = itImg;
  } else if (data === "sq") {
    // languageData = sq;
    imgData = sqImg;
  } else if (data === "de") {
    // languageData = de;
    imgData = deImg;
  } else {
    // languageData = eng;
    imgData = engImg;
  }
  return (
    <>
      <Img src={imgData} />
      <TextComponents title={email} />

      <a
        className={styles.contactText}
        href="https://us21.list-manage.com/contact-form?u=fbf0428fa6d1eba9fea1c252c&form_id=8b9e0444ca531a5225e6354791f4cff4"
        target="https://us21.list-manage.com/contact-form?u=fbf0428fa6d1eba9fea1c252c&form_id=8b9e0444ca531a5225e6354791f4cff4"
      >
        <Icon path={mdiEmailArrowRightOutline} size={2} />
      </a>
      <TextComponents title={tel} />
      <a href="https://wa.me/+355694490932" className={styles.contactText}>
        <Icon path={mdiPhoneForwardOutline} size={2} />
      </a>
    </>
  );
}

export default Contact;
