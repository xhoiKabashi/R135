import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import your CSS module
import Icon from "@mdi/react";
import { mdiHomeExportOutline } from "@mdi/js";
import { mdiClipboardListOutline } from "@mdi/js";
import { mdiInformationOutline } from "@mdi/js";
import { mdiLogin } from "@mdi/js";
import { mdiWindowClose } from "@mdi/js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  function menuHandler() {
    setMenuOpen(!menuOpen);
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return (
    <>
      <nav className={styles.nav}>
        <svg
          onClick={menuHandler}
          className={styles.hamb}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
        <div className={styles.mainLogo}>
          <Link to="/">
            <img src="./bus-logo.png" alt="" />
          </Link>
        </div>
        <ul>
          <NavLink to="/">
            <p className={styles.para}>Home</p>
          </NavLink>
          <NavLink to="mybookings">
            <p className="para">My Bookings</p>
          </NavLink>
          <NavLink to="about">
            <p>About Us</p>
          </NavLink>
          <Link to="login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.login}
            >
              <title>login</title>
              <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7M20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" />
            </svg>
          </Link>
        </ul>
      </nav>
      {menuOpen && (
        <div className={styles.hambContainer} onClick={menuHandler}>
          <div className={styles.mobileNav} onClick={stopPropagation}>
            <div className={styles.title}>
              <h5 className={styles.noDisplay}>.</h5>
              <h4>Menu</h4>
              <Icon path={mdiWindowClose} size={1} onClick={menuHandler} />
            </div>

            <div className={styles.listContainer}>
              <ul>
                <NavLink
                  to="/"
                  activeClassName={styles.activeLink}
                  onClick={menuHandler}
                >
                  <li>
                    <div>
                      <Icon path={mdiHomeExportOutline} size={1} />
                    </div>
                    <p>Home</p>
                  </li>
                </NavLink>
                <NavLink to="mybookings" onClick={menuHandler}>
                  <li>
                    <div>
                      <Icon path={mdiClipboardListOutline} size={1} />
                    </div>
                    <p>My Bookings</p>
                  </li>
                </NavLink>
                <NavLink to="about" onClick={menuHandler}>
                  <li>
                    <div>
                      <Icon path={mdiInformationOutline} size={1} />
                    </div>
                    <p>About Us</p>
                  </li>
                </NavLink>
                <NavLink to="login" onClick={menuHandler}>
                  <li>
                    <div>
                      <Icon path={mdiLogin} size={1} />
                    </div>
                    <p>Login</p>
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className={styles.lang}>Lang</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
