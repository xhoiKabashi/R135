import styles from "./Radio.module.css";
import { useContext, useRef, useState } from "react";
import Lang from "../../Context";
import { en, al, it, de, radio } from "./RadioData.js";

function MyRadioPlayer() {
  const [volume, setVolume] = useState(1);
  const audioRef = useRef();

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const { data } = useContext(Lang);
  let languageData;

  if (data === "ita") {
    languageData = it;
  } else if (data === "sq") {
    languageData = al;
  } else if (data === "de") {
    languageData = de;
  } else {
    languageData = en;
  }

  return (
    <div>
      <div className={styles.container}>
        <h1>{languageData.title}</h1>
        <p>{languageData.para}</p>
        <audio ref={audioRef} controls>
          <source src={radio.channel} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default MyRadioPlayer;
