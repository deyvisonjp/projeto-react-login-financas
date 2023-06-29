import React from "react";
import { ButtonCustomizado } from "./style";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <ButtonCustomizado type={type} onClick={onClick}>
      {text}
    </ButtonCustomizado>
  );
};