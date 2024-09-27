import { useState } from "react";
import "./App.css";
import Header from "./component/Header/header";
import ChatMain from "./page/ChatMain/ChatMain";
import Stratergy from "./page/Stratergy/Stratergy";
import { RecoilRoot } from "recoil";

function App() {
  const [isStratergy, setIsStratergy] = useState(true);

  const handleOnClick = () => {
    setIsStratergy(false);
  };
  return (
    <>
    <RecoilRoot>
      <section className="bg-[#090909] h-screen">
        <div>
          <Header />
          <div className="bg-[#0f0f11] ">
            {isStratergy ? (
              <Stratergy oncClick={handleOnClick} />
            ) : (
              <ChatMain />
            )}
          </div>
        </div>
      </section>
    </RecoilRoot>
    </>
  );
}

export default App;
