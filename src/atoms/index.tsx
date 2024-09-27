import { atom } from "recoil";
import { sampleData } from "../constants/mockData";

const chatHistoryAtom = atom({
  key: "chatHistory", // unique ID (with respect to other atoms/selectors)
  default: sampleData, // default value (aka initial value)
});

export { chatHistoryAtom };
