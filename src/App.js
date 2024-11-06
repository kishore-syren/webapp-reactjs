import React from "react";
import Photo from "./Assets - kishore/IMG-20210520-WA0003.jpg";
import SingAudio from "./Assets - kishore/sing.aac";
import SoundAudio from "./Assets - kishore/sound.mp3";
import "./App.css";

function App() {
  // Create audio instances for each sound file
  const singAudio = new Audio(SingAudio);
  const soundAudio = new Audio(SoundAudio);

  // Play the audio from the start
  const playAudio = (audio) => {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="App">
      <div className="story">
        <div className="name">Kishore</div>
        <img src={Photo} alt="kishore" />
        <div className="buttons">
          <button onClick={() => playAudio(singAudio)}>Sing</button>
          <button onClick={() => playAudio(soundAudio)}>Sound</button>
        </div>
      </div>
    </div>
  );
}

export default App;
