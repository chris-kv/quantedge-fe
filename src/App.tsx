import "./App.css";
import ChatTest from "./component/ChatTest";
import { SocketProvider } from "./context/SocketContext";
import Stratergy from "./page/Stratergy/Stratergy";

function App() {
  return (
    <>
      <SocketProvider>
        <section className="bg-[#090909]">
          <ChatTest />
          <div>
            <Stratergy />
          </div>
        </section>
      </SocketProvider>
    </>
  );
}

export default App;
