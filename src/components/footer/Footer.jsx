import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
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
              <p>Privacy policy</p>
            </Link>

            <Link to="termsandconditions">
              <p>General conditions</p>
            </Link>
          </div>
          <div>
            <Link to="needhelp">
              <p>Need help?</p>
            </Link>
            <p>Contact Us</p>
          </div>
          <div>
            <Link to="whoarewe">
              <p>Who are we</p>
            </Link>
            <Link to="workwithus">
              <p>Careers</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
