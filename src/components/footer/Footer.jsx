import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logos">
          <img src="./social-logo/facebook.png" alt="" />
          <img src="./social-logo/instagram.png" alt="" />
          <img src="./social-logo/twitter.png" alt="" />
        </div>
        <div className="footer-contact">
          <div>
            <p>Privacy policy </p>
            <p>General conditions </p>
          </div>
          <div>
            <p>Need help? </p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Who we are</p>
            <p>Careers </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
