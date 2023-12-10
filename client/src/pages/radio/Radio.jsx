import styles from "./Radio.module.css";
import { useContext } from "react";
import Lang from "../../Context";
import { en, al, it, de, radio } from "./RadioData.js";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function MyRadioPlayer() {
  const { dataa } = useContext(Lang);

  let languageData;

  if (dataa === "ita") {
    languageData = it;
  } else if (dataa === "sq") {
    languageData = al;
  } else if (dataa === "de") {
    languageData = de;
  } else {
    // eslint-disable-next-line no-unused-vars
    languageData = en;
  }

  return (
    <div className={styles.container}>
      <h2>Enhance your trip with the finest music!</h2>
      <div className={styles.audio}>
        <AudioPlayer autoPlay src={radio.channel} showJumpControls={false} />
      </div>
    </div>
  );
}

export default MyRadioPlayer;
