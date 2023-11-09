/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./CreateAcc.module.css";

function CreateAcc() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:3000/register",
      data: {
        email,
        password,
        name,
        lastName,
      },
    };

    axios(configuration)
      .then((ressult) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h3 className={styles.text}>Create account</h3>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.formGroup}>
            {/* <label>First Name</label> */}
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div className={styles.formGroup}>
            {/* <label>Last Name</label> */}
            <input
              type="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
            />
          </div>
          <div className={styles.formGroup}>
            {/* <label>Email address</label> */}
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
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
            />
          </div>
          <button>Create account</button>
          {register ? (
            <p className={styles.successText}>
              You Are Registered Successfully
            </p>
          ) : (
            <p className={styles.errorText}>You Are Not Registered</p>
          )}
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </form>
      </div>
      <div className={styles.img}></div>
    </div>
  );
}

export default CreateAcc;
