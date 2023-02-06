import React, { useState } from "react";
import { Keypad } from "./Keypad";
import { Screen } from "./Screen";

function Calculator() {
  const [typedChar, setTypedChar] = useState("");

  return (
    <>
      <Screen setTypedChar={setTypedChar} character={typedChar} />
      <Keypad typedChar={typedChar} setTypedChar={setTypedChar} />
    </>
  );
}

export default Calculator;
