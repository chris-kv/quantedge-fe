import "./App.css";
import Header from "./component/Header/header";
import ChatMain from "./page/ChatMain/ChatMain";
import Stratergy from "./page/Stratergy/Stratergy";

function App() {
  return (
    <>
      <section className="bg-[#090909]">
        <div>
          <Header />
          <div className="bg-[#0f0f11] h-screen">
            {/* <Stratergy /> */}
            <ChatMain />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
