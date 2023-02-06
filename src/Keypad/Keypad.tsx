import React from "react";
import { Digit } from "../Digit";
import classes from "./Keypad.module.css";
import {KeypadAnimation} from "./KeypadAnimation";

interface KeypadProps {
  typedChar: string
  setTypedChar: React.Dispatch<React.SetStateAction<string>>;
}
export const Keypad = ({ typedChar, setTypedChar }: KeypadProps) => {
  const buttons = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  const getDigits = buttons.flat().map((button) => {
    return <Digit key={button} setTypedChar={setTypedChar} number={button} />;
  });
  return (<div className={classes.keypadContainer}>
    <KeypadAnimation typedChar={typedChar} />
    <div className={classes.keypad}>{getDigits}</div>
  </div>)
};
