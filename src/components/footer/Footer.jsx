import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { sq, eng, it, de } from "./FooterData";
import { useContext } from "react";
import Lang from "../../Context";

function Footer() {
  const { data } = useContext(Lang);
  let text;

  if (data === "ita") {
    text = it;
  } else if (data === "sq") {
    text = sq;
  } else if (data === "de") {
    text = de;
  } else {
    text = eng;
  }

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogos}>
          <div>
            <img id={styles.fb} src="./social-logo/facebook.png" alt="" />
          </div>
          <div>
            <img src="./social-logo/instagram.png" alt="" />
          </div>
          <div>
            <img src="./social-logo/twitter.png" alt="" />
          </div>
        </div>
        <div className={styles.footerContact}>
          <div>
            <Link to="privacy">
              <p>{text.privacy}</p>
            </Link>

            <Link to="termsandconditions">
              <p>{text.terms}</p>
            </Link>
          </div>
          <div>
            <Link to="needhelp">
              <p>{text.help}</p>
            </Link>
            <p>{text.contact}</p>
          </div>
          <div>
            <Link to="whoarewe">
              <p>{text.about}</p>
            </Link>
            <Link to="workwithus">
              <p>{text.work}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
