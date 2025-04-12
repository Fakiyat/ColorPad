import React, { useState } from "react";
import padsData from "./padsData";
import PadButton from "./padButton";

function App() {
  const [pads, setPads] = useState(padsData);
  const [allOn, setAllOn] = useState(false);

  console.log(pads);

  function handleClick(id) {
    setPads((prevPads) =>
      prevPads.map((items) => {
        return items.id === id ? { ...items, on: !items.on } : items;
      })
    );
  }
  function turnAllPads() {
    setPads((prevPads) =>
      prevPads.map((pad) => ({
        ...pad,
        on: !allOn, // toggle based on current value
      }))
    );
    setAllOn((prev) => !prev);
  }

  const buttonElements = pads.map((pad) => (
    <PadButton
      key={pad.id}
      color={pad.color}
      on={pad.on}
      id={pad.id}
      handleClick={handleClick}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
      <button className="all-toggle" onClick={turnAllPads}>
        {allOn ? "Turn all off" : "Turn All On"}
      </button>
    </main>
  );
}

export default App;
