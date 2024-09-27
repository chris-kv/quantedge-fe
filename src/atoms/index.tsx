import { atom } from "recoil";

const chatHistoryAtom = atom({
  key: "chatHistory", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export { chatHistoryAtom };
