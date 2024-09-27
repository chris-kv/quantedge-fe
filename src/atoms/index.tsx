import { atom } from "recoil";
import { sampleData } from "../constants/mockData";

const chatHistoryAtom = atom({
  key: "chatHistory", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
  // default: sampleData, // default value (aka initial value)
});

const summaryAtom = atom({
  key: "tradeSummary", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
  // default: sampleData, // default value (aka initial value)
});

const loadingAtom = atom({
  key: "isLoading", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
  // default: sampleData, // default value (aka initial value)
});

export { chatHistoryAtom, summaryAtom, loadingAtom };
