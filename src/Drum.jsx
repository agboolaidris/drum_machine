import React, { useEffect, useState } from "react";

function Drum({ text, id, keyCode }) {
  const [click, setclick] = useState(false);
  useEffect(() => {}, []);

  const Click = (e) => {
    if (click) {
      setclick(false);
    } else {
      setclick(true);
    }
  };
  return (
    <div
      className={click ? "drum-pad-click" : "drum-pad"}
      id={id}
      onClick={Click}
    >
      <h4>{text}</h4>
      <audio src="" id={text} className="clip" />
    </div>
  );
}

export default Drum;
