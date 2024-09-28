import { FC } from "react";
import ChatLanding from "../../component/ChatLanding/ChatLanding";

interface Props {
  oncClick: () => void;
}
const Stratergy: FC<Props> = ({ oncClick }) => {
  return (
    <div className="bg-[#0f0f11] ">
      <ChatLanding oncClick={oncClick} />
    </div>
  );
};

export default Stratergy;
