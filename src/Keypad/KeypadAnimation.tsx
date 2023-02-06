import React, {useEffect, useState} from "react";
import classes from "./Keypad.module.css";

interface KeypadAnimationProps {
  typedChar: string;
}

export const KeypadAnimation = ({ typedChar }: KeypadAnimationProps) => {
  const [inputCharacter, setInputCharacter] = useState("");
  const isDigit = /^\d$/

  useEffect(() => {
    setInputCharacter("");
    setTimeout(() => {
      if (isDigit.test(typedChar)) {
        setInputCharacter(typedChar);
      }
    }, 10);
  }, [typedChar]);

  return (
      <div className={`${inputCharacter !== "" ? classes.fadeInOut : ""}`}>
        {inputCharacter}
      </div>
  );
};
