import React, { FC } from "react";

interface Props {
  text: string;
  className: string;
}
const Button: FC<Props> = ({ text, className }) => {
  return <button className={`rounded-xl ${className}`}>{text}</button>;
};

export default Button;
