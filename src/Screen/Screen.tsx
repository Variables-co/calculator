import React, { useEffect, useState } from "react";
import classes from './Screen.module.css'
interface ScreenProps {
  character: number | string;
  setTypedChar: React.Dispatch<React.SetStateAction<string>>
}
export const Screen = ({ character, setTypedChar }: ScreenProps) => {
  const [displayValue, setDisplayValue] = useState("");
  const handleChanges = () => {
    if (character.toString().toLowerCase() === 'c')
      setDisplayValue('')
    else if (character.toString() === '=')
    {
      const result = eval(displayValue).toString()
      setDisplayValue(result)
    }
    else
      setDisplayValue(displayValue.concat('', character.toString()));
    setTypedChar('')
  };

  useEffect(() => {
    handleChanges();
  }, [character]);
  return (
    <>
      <input disabled className={classes.display} type={"text"} value={displayValue} />
    </>
  );
};
