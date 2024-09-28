import { atom } from "recoil";
// import { sampleData } from "../constants/mockData";

const chatHistoryAtom = atom<any>({
  key: "chatHistory", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
  // default: sampleData, // default value (aka initial value)
});

const summaryAtom = atom<any>({
  key: "tradeSummary", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
  // default: sampleData, // default value (aka initial value)
});

const loadingAtom = atom<any>({
  key: "isLoading", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
  // default: sampleData, // default value (aka initial value)
});

export { chatHistoryAtom, summaryAtom, loadingAtom };
