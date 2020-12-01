import React, { useEffect, useState } from "react";

function Drum({ text, id, keyCodes, sound, callback }) {
  const playSound = () => {
    const audio = document.getElementById(text);
    audio.play();
    callback(id);
  };

  const keyPlay = (e) => {
    if (e.keyCode === keyCodes) {
      const audio = document.getElementById(text);
      const drumPad = audio.parentNode;
      drumPad.classList.add("active");

      playSound();

      setTimeout(() => {
        drumPad.classList.remove("active");
      }, 200);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPlay);
  }, []);

  return (
    <div className="drum-pad" onClick={playSound}>
      <h4>{text}</h4>
      <audio src={sound} id={text} className="clip" />
    </div>
  );
}

export default Drum;
