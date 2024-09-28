import "./App.css";
import Header from "./component/Header/header";
import ChatMain from "./page/ChatMain/ChatMain";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <section className="bg-[#090909] h-screen">
          <div>
            <Header />
            <div className="bg-[#0f0f11] ">
              <ChatMain />
            </div>
          </div>
        </section>
      </RecoilRoot>
    </>
  );
}

export default App;
