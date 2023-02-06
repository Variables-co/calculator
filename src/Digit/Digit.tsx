import classes from "./Digit.module.css";
import React, { useCallback, useEffect } from "react";
interface DigitProps {
  number: number|string;
  setTypedChar: React.Dispatch<React.SetStateAction<string>>
}
export const Digit = ({ number, setTypedChar }: DigitProps) => {
  const handleClick = useCallback(() => {
    setTypedChar(number.toString())
  }, [number, setTypedChar])

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === number.toString().toLowerCase()) {
      handleClick();
    }
  }, [number, handleClick]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div onClick={handleClick} className={classes.digit}>
      {number}
    </div>
  );
};
