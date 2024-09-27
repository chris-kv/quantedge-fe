import "./App.css";
import Header from "./component/Header/header";
import ChatMain from "./page/ChatMain/ChatMain";
import Stratergy from "./page/Stratergy/Stratergy";

function App() {
  return (
    <>
      <section className="bg-[#090909] h-screen">
        <div>
          <Header />
          <div className="bg-[#0f0f11] ">
            {/* <Stratergy /> */}
            <ChatMain />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
