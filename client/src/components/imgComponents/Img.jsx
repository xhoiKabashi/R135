/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import styles from "./Img.module.css";

function Img({ src }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!isLoaded && (
        <div className={styles.container}>
          <Dna
            visible={true}
            height="90"
            width="90"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      {isLoaded && <img src={src} alt="Start working" loading="lazy" />}
    </>
  );
}

export default Img;
