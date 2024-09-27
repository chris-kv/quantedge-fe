import { FC } from "react";
import Chat from "./components/Chat/chat.";

const Stratergy: FC = () => {
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-gray-200 p-4">
        <Chat />
      </div>
      <div className="bg-gray-200 p-4">Section 2</div>
    </section>
  );
};

export default Stratergy;
