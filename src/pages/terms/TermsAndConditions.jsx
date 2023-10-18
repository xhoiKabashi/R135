// TermsAndConditions.js

import styles from "./TermsAndConditions.module.css";

const TermsAndConditions = () => {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.termsHeader}>Terms and Conditions</h1>

      <p className={styles.termsText}>
        Welcome to the Bus Travel Agency app. These terms and conditions outline
        the rules and regulations for the use of our app.
      </p>

      <h2 className={styles.sectionHeader}>1. Acceptance of Terms</h2>
      <p className={styles.termsText}>
        By accessing this app, we assume you accept these terms and conditions.
        Do not continue to use Bus Travel Agency app if you do not agree to take
        all of the terms and conditions stated on this page.
      </p>

      {/* Add more sections and content as needed. */}
    </div>
  );
};

export default TermsAndConditions;
