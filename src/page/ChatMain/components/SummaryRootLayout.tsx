import React, { useState } from "react";
import SummaryCard from "../../../component/SummaryCard/SummaryCard";
import Button from "../../../component/Button/Button";
import cx from "classnames";

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
  const [selectedOption, setSelectedOption] = useState("SUMMARY");
  return (
    <div>
      <div className="mb-6">
        <Button
          text={"Summary"}
          onClick={() => setSelectedOption("SUMMARY")}
          className={cx("text-white px-3 py-2", {
            " bg-[#303239]  font-semibold": selectedOption === "SUMMARY",
            " py-2 font-normal": selectedOption !== "SUMMARY",
          })}
        ></Button>
        <Button
          text={"Back test result"}
          onClick={() => setSelectedOption("BACK_TEST")}
          className={cx("ml-4 px-3 py-2", {
            "text-white bg-[#303239]  font-semibold":
              selectedOption !== "SUMMARY",
            "text-white py-2 font-normal": selectedOption === "SUMMARY",
          })}
        ></Button>
      </div>
      {selectedOption === "SUMMARY" ? (
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default SummaryRootLayout;
