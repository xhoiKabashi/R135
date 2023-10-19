/* eslint-disable react/prop-types */
import styles from "./TextComponents.module.css";

function TextComponents({ title, secondTitle, para, secondPara, thirdPara }) {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.tittle}>{title}</h2>}
      {secondTitle && <h3 className={styles.tittle}>{secondTitle}</h3>}

      {para && (
        <ol id={styles.list}>
          {para && <li>{para}</li>}
          {secondPara && <li>{secondPara}</li>}
          {thirdPara && <li>{thirdPara}</li>}
        </ol>
      )}
    </div>
  );
}

export default TextComponents;
