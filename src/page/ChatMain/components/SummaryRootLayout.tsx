import React, { useState, useMemo } from "react";
import SummaryCard from "../../../component/SummaryCard/SummaryCard";
import Button from "../../../component/Button/Button";
import cx from "classnames";
import { backTestData, summarySampleData } from "./sampleData";

const summary = backTestData?.results?.summary;

const fotmatValue = (value: number) => {
  if (value > 0) {
    return <span className="text-green-500">{value}</span>;
  } else {
    return <span className="text-red-500">{value}</span>;
  }
  return "--";
};

const BackTestSampleData = [
  {
    iconPath: "src/assets/icons/QuantEdge Keycode (1).png",
    title: "Overview",
    values: [
      {
        title: "Overall Profit",
        value: fotmatValue(summary?.OverallProfit),
      },
      {
        title: "Average ProfitPerLosing Trade",
        value: fotmatValue(summary?.AverageProfitPerLosingTrade),
      },
      {
        title: "Average ProfitPer Trade",
        value: fotmatValue(summary?.AverageProfitPerTrade),
      },
      {
        title: "AverageProfit PerWinning Trade ",
        value: fotmatValue(summary?.AverageProfitPerWinningTrade),
      },
      {
        title: "Expectancy",
        value: fotmatValue(summary?.Expectancy),
      },
      {
        title: "Losing Ratio",
        value: fotmatValue(summary?.LosingRatio),
      },
      {
        title: "Maximum Drawdown",
        value: fotmatValue(summary?.MaximumDrawdown),
      },
      {
        title: "Maximum Losing Streak",
        value: fotmatValue(summary?.MaximumLosingStreak),
      },
      {
        title: "Maximum Profit InSingle Trade",
        value: fotmatValue(summary?.MaximumProfitInSingleTrade),
      },
      {
        title: "Maximum Winning Streak",
        value: fotmatValue(summary?.MaximumWinningStreak),
      },
      {
        title: "Minimum Profit InSingle Trade",
        value: fotmatValue(summary?.MinimumProfitInSingleTrade),
      },
      {
        title: "Number Of Trades",
        value: fotmatValue(summary?.NumberOfTrades),
      },

      {
        title: "Return Over Maximum Drawdown",
        value: fotmatValue(summary?.ReturnOverMaximumDrawdown),
      },
      {
        title: "Reward To Risk Ratio",
        value: fotmatValue(summary?.RewardToRiskRatio),
      },
      {
        title: "Winning Ratio",
        value: fotmatValue(summary?.WinningRatio),
      },
    ],
  },
];

const formatSummaryData = (data: any) => {
  return data || "--";
};
const SummaryRootLayout = () => {
  const summaryData = useMemo(() => {
    return [
      {
        iconPath: "src/assets/icons/QuantEdge Keycode (1).png",
        title: "Asset",
        values: [
          { title: "Segment", value: "Options" },
          {
            title: "Index",
            value: formatSummaryData(summarySampleData?.asset?.symbol),
          },
          {
            title: "Option type",
            value: formatSummaryData(
              summarySampleData?.asset?.type?.join(" , ")
            ),
          },
          {
            title: "Frequency",
            value: formatSummaryData(
              summarySampleData?.asset?.expiry?.frequency
            ),
          },
          {
            title: "Cycle",
            value: formatSummaryData(summarySampleData?.asset?.expiry?.cycle),
          },
        ],
      },
      {
        iconPath: "src/assets/icons/QuantEdge Keycode Login.png",
        title: "Entry condition",
        values: [
          {
            title: "Time",
            value: formatSummaryData(summarySampleData?.entry_trigger?.value),
          },
          {
            title: "Value",
            value: formatSummaryData(
              summarySampleData?.contract_value?.value?.join(
                ` ${summarySampleData?.contract_value?.type} `
              )
            ),
          },
          {
            title: "Lot size",
            value: formatSummaryData(summarySampleData?.lot_size),
          },
        ],
      },
      {
        iconPath: "src/assets/icons/QuantEdge Keycode logout.png",
        title: "Exit condition",
        values: [
          {
            title: "Universal exit time",
            value: formatSummaryData(summarySampleData?.exit_time),
          },
          {
            title: "Stop loss",
            value: formatSummaryData(
              `${summarySampleData?.risk_management?.stop_loss?.value} ${
                summarySampleData?.risk_management?.stop_loss?.type ===
                "percentage"
                  ? "%"
                  : "INR"
              }`
            ),
          },
          {
            title: "Target",
            value: formatSummaryData(
              `${summarySampleData?.risk_management?.take_profit?.value} ${
                summarySampleData?.risk_management?.take_profit?.type ===
                "percentage"
                  ? "%"
                  : "INR"
              }`
            ),
          },
        ],
      },
    ];
  }, [summarySampleData]);
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
          {summaryData.map((data, index) => {
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
        <div>
          {BackTestSampleData.map((data, index) => {
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
      )}
    </div>
  );
};

export default SummaryRootLayout;
