/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import CircularProgress from "@mui/joy/CircularProgress";

import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import styles from "./LoginPage.module.css"; // Import your new CSS module
// import { AuthContext } from "../../Context";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// import { acctualToken } from "../../tokenService";
import { apiURL } from "../../api";

// Inside your login function

function LoginPage() {
  // const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  localStorage.setItem("TOKEN", token);

  useEffect(() => {
    if (token) {
      setLogin(true);
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWaiting(true);
    const configuration = {
      method: "post",
      url: `${apiURL}login`,
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        setToken(result.data.token);
        setLogin(true);
      })
      .catch((error) => {
        setError(true);
      });
  };

  if (login) {
    return (
      <>
        <Navigate to={"/home"} />
      </>
    );
  }

  if (!login) {
    return (
      <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles.loginContainer}>
          <h5 className={styles.text}>Have an account?</h5>
          <h2 className={styles.text}>Login</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.formGroup}>
              {/* <label>Email address</label> */}
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              {/* <label>Password</label> */}
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </div>
            <button type="submit">
              {waiting ? "Please wait..." : "Login"}
            </button>
          </form>
          {/* Navigate to Create Account page */}
          <Link to="/register" className={styles.link}>
            No Account? Create one
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
