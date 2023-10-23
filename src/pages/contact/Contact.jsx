import { useState } from "react"
import styles from "./contactstyle.module.css"

function Contact() { 

    return (
        <>
        <div className={styles.container}>
           <div className={styles.header}><h1 className={styles.h1}>Contact Us</h1>
            <img src="./flags/al.png" alt="image" /></div>
        <form>

        <label htmlFor="name">Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter first name.."/>
          
          <label htmlFor="Email">Email</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter your email.."/>

          <label htmlFor="name">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Enter last name.."/>
          <div class="col-75">
        <select id="country" name="country">
          <option value="Albania">Albania</option>
          <option value="Italy">Italy</option>
          <option value="Greece">Greece</option>
          <option value="Germany">Germany</option>
          <option value="USA">United States of America</option>
        </select>
      </div>
          <label htmlFor="name">Message</label>
          <input type="text" id="lname" name="lastname" placeholder="Write Your Message.."/>
           
           <button type="Submit" value="Submit">Submit</button>
        </form>
      </div>
      </>
    )
  }


 

  export default Contact;
  