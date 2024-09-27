import Chat from "./components/Chat";

const ChatMain = () => {
  return (
    <section className="grid grid-cols-2 gap-4 pt-4 mx-12 bg-[#090909] ">
      <div className=" bg-[#101011] text-white">
        <Chat />
      </div>
      <div className="bg-[#101011] p-4">Section 2</div>
    </section>
  );
};

export default ChatMain;
