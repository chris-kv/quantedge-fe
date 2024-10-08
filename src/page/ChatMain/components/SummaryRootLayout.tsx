import { useState, useMemo, useEffect } from "react";
import SummaryCard from "../../../component/SummaryCard/SummaryCard";
import Button from "../../../component/Button/Button";
import cx from "classnames";
import {
  getBackTestData,
  getBackTestDataWithChart,
} from "../../../util/service";
import { useRecoilState } from "recoil";
import { summaryAtom } from "../../../atoms";

const fotmatValue = (value: number) => {
  if (value) {
    if (value > 0) {
      return <span className="text-green-500">{value}</span>;
    } else {
      return <span className="text-red-500">{value}</span>;
    }
  }
  return "--";
};

const formatSummaryData = (data: any) => {
  return data || "--";
};
const SummaryRootLayout = () => {
  const [selectedOption, setSelectedOption] = useState("SUMMARY");
  const [statergySummaryData, setsummaryData] = useState<any>();
  const [strategyDetails] = useRecoilState(summaryAtom);

  const summary = statergySummaryData?.results?.summary;
  const BackTestSampleData = [
    {
      iconPath: "icons/QuantEdge Keycode (3).png",
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

  const summaryData = useMemo(() => {
    const statergySummaryData: any = strategyDetails;
    return [
      {
        iconPath: "icons/QuantEdge Keycode (1).png",
        title: "Asset",
        values: [
          { title: "Segment", value: "Options" },
          {
            title: "Index",
            value: formatSummaryData(statergySummaryData?.asset?.symbol),
          },
          {
            title: "Option type",
            value: formatSummaryData(
              statergySummaryData?.asset?.type?.join(" , ")
            ),
          },
          {
            title: "Frequency",
            value: formatSummaryData(
              statergySummaryData?.asset?.expiry?.frequency
            ),
          },
          {
            title: "Cycle",
            value: formatSummaryData(statergySummaryData?.asset?.expiry?.cycle),
          },
        ],
      },
      {
        iconPath: "icons/QuantEdge Keycode Login.png",
        title: "Entry condition",
        values: [
          {
            title: "Time",
            value: formatSummaryData(statergySummaryData?.entry_trigger?.value),
          },
          {
            title: "Value",
            value:
              statergySummaryData?.contract_value?.type === "between"
                ? formatSummaryData(
                    statergySummaryData?.contract_value?.value?.join(
                      ` ${statergySummaryData?.contract_value?.type} `
                    )
                  )
                : formatSummaryData(statergySummaryData?.contract_value?.value),
          },
          {
            title: "Lot size",
            value: formatSummaryData(statergySummaryData?.lot_size),
          },
        ],
      },
      {
        iconPath: "icons/QuantEdge Keycode logout.png",
        title: "Exit condition",
        values: [
          {
            title: "Universal exit time",
            value: formatSummaryData(statergySummaryData?.exit_time),
          },
          {
            title: "Stop loss",
            value: statergySummaryData?.risk_management?.stop_loss?.type
              ? formatSummaryData(
                  `${statergySummaryData?.risk_management?.stop_loss?.value} ${
                    statergySummaryData?.risk_management?.stop_loss?.type?.toUpperCase() ===
                    "PERCENTAGE"
                      ? "%"
                      : "INR"
                  }`
                )
              : "--",
          },
          {
            title: "Target",
            value: statergySummaryData?.risk_management?.take_profit?.type
              ? formatSummaryData(
                  `${
                    statergySummaryData?.risk_management?.take_profit?.value
                  } ${
                    statergySummaryData?.risk_management?.take_profit?.type.toUpperCase() ===
                    "PERCENTAGE"
                      ? "%"
                      : "INR"
                  }`
                )
              : "--",
          },
        ],
      },
    ];
  }, [strategyDetails]);

  useEffect(() => {
    if (selectedOption !== "SUMMARY") {
      getBackTestData(statergySummaryData).then((data: any) => {
        setsummaryData(data.data);
        getBackTestDataWithChart(data.data.id).then((data: any) => {
          setsummaryData(data.data);
        });
      });
    }
  }, [selectedOption]);

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
          {summaryData.map((data) => {
            return (
              <SummaryCard
                key={data.title}
                iconPath={data.iconPath}
                title={data.title}
                values={data.values}
              />
            );
          })}
        </div>
      ) : (
        <div>
          {BackTestSampleData.map((data) => {
            return (
              <SummaryCard
                key={data.title}
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
