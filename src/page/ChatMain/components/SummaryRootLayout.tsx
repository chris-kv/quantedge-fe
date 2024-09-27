import React from "react";
import SummaryCard from "../../../component/SummaryCard/SummaryCard";

const summarySampleData = [
  {
    iconPath: "src/assets/icons/QuantEdge Keycode (1).png",
    title: "Asset",
    values: [
      { title: "Segment", value: "Options" },
      { title: "Index", value: "NIFTY50" },
      { title: "Option type", value: "PE&CE" },
      { title: "Frequency", value: "PE&CE" },
      { title: "Cycle", value: "---" },
    ],
  },
  {
    iconPath: "src/assets/icons/QuantEdge Keycode Login.png",
    title: "Entry condition",
    values: [
      { title: "Time", value: "10:45 AM" },
      { title: "Value", value: "Premium range BETWEEN 5 & 20" },
      { title: "Lot size", value: "1-10" },
    ],
  },
  {
    iconPath: "src/assets/icons/QuantEdge Keycode logout.png",
    title: "Exit condition",
    values: [
      { title: "Universal exit time", value: "10:45 AM" },
      { title: "Stop loss", value: "100%" },
      { title: "Target", value: "100%" },
    ],
  },
];
const SummaryRootLayout = () => {
  return (
    <div>
      {summarySampleData.map((data, index) => {
        return (
          <SummaryCard
            key={index}
            iconPath={data.iconPath}
            title={data.title}
            values={data.values}
          />
        );
      })}
    </div>
  );
};

export default SummaryRootLayout;
