import { FC } from "react";

interface Props {
  text: string;
  className: string;
  onClick?: () => void;
}
const Button: FC<Props> = ({ text, className, onClick }) => {
  return (
    <button className={`rounded-xl ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
