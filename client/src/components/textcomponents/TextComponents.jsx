/* eslint-disable react/prop-types */
import styles from "./TextComponents.module.css";

function TextComponents({ title, secondTitle, para, secondPara, thirdPara }) {
  return (
    <div className={styles.container}>
      {title && <h3 className={styles.tittle}>{title}</h3>}
      {secondTitle && <h4 className={styles.tittle}>{secondTitle}</h4>}

      {para && (
        <ol className={styles.list}>
          {para && <li>{para}</li>}
          {secondPara && <li>{secondPara}</li>}
          {thirdPara && <li>{thirdPara}</li>}
        </ol>
      )}
    </div>
  );
}

export default TextComponents;
