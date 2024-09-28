import { FC } from "react";

interface Props {
  user: string;
  message: string;
  type: string;
}
const Message: FC<Props> = ({ user, message }) => {
  return (
    <div className="flex mb-8">
      {user === "Bot" ? (
        <div>
          <img src="icons/QuantEdge Keycode Frame.png" className="w-8 h-8" />
        </div>
      ) : (
        <div>
          <img src="icons/QuantEdge Keycode.png" className="w-8 h-8" />
        </div>
      )}
      <div className="ml-6 text-base font-light">{message}</div>
    </div>
  );
};

export default Message;
