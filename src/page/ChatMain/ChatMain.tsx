import Chat from "./components/Chat";
import SummaryRootLayout from "./components/SummaryRootLayout";

const ChatMain = () => {
  return (
    <section className="grid grid-cols-2 gap-12 pt-4 px-16 bg-[#090909] ">
      <div className=" bg-[#101011] text-white">
        <Chat />
      </div>
      <div className="">
        <SummaryRootLayout />
      </div>
    </section>
  );
};

export default ChatMain;
