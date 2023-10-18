import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogos}>
          <div>
            <img src="./social-logo/facebook.png" alt="" />
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
            <p>Privacy policy</p>
            <p>General conditions</p>
          </div>
          <div>
            <p>Need help?</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Who we are</p>
            <p>Careers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
