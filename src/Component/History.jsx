import { useState } from "react";

import useHistoryRate from "../hooks/useHistoryRate";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import HistoryLoading from "./HistoryLoading";
import CustomTooltip from "./CustomToolTip";

export default function History({ currency }) {
  const [historyDate, setHistoryDate] = useState("1D");

  const today = new Date();

  switch (historyDate) {
    case "1D":
      today.setDate(today.getDate() - 1);
      break;

    case "1W":
      today.setDate(today.getDate() - 7);
      break;

    case "1M":
      today.setMonth(today.getMonth() - 1);
      break;

    case "3M":
      today.setMonth(today.getMonth() - 3);
      break;

    case "1Y":
      today.setFullYear(today.getFullYear() - 1);
      break;

    case "5Y":
      today.setFullYear(today.getFullYear() - 5);
      break;

    default:
      break;
  }

  const startDate = today.toISOString().split("T")[0];

  const { historyRate, isLoading, error } = useHistoryRate(
    currency.fromSelectedCurrency,
    currency.toSelectedCurrency,
    startDate,
  );

  const open = historyRate[0]?.rate;
  const last = historyRate[historyRate.length - 1]?.rate;

  const change = last - open;
  const percentageChange = (change / open) * 100;

  return (
    <div className="pb-4 lg:w-[1036px]">
      {isLoading ? (
        <HistoryLoading />
      ) : error ? (
        <Error />
      ) : (
        <>
          {/* ================= TOP SECTION ================= */}

          <div className="lg:flex items-center justify-between">
            {/* ================= CARDS ================= */}

            <div className="grid grid-cols-2 gap-3 mt-4 md:flex md:gap-5">
              {/* OPEN */}
              <div className="flex flex-col gap-2 font-jetbrains bg-[black] md:bg-[#171719] w-41.5 h-20.25 md:w-[145px] px-5 py-2 rounded-2xl">
                <span className="text-[#b2b2b2] tracking-wider">OPEN</span>

                <p className="text-white tracking-[1px] text-[20px]">{open}</p>
              </div>

              {/* LAST */}
              <div className="flex flex-col gap-2 font-jetbrains bg-[black] md:bg-[#171719] w-41.5 h-20.25 md:w-[145px] px-5 py-2 rounded-2xl">
                <span className="text-[#b2b2b2] tracking-wider">LAST</span>

                <p className="text-white tracking-[1px] text-[20px]">{last}</p>
              </div>

              {/* CHANGE */}
              <div className="flex flex-col gap-2 font-jetbrains md:bg-[#171719] bg-[black] w-41.5 h-20.25 md:w-[145px] px-5 py-2 rounded-2xl">
                <span className="text-[#b2b2b2] tracking-wider">CHANGE</span>

                <p className="text-[#42eb05] tracking-[1px] text-[18px]">
                  {change.toFixed(5)}
                </p>
              </div>

              {/* % CHANGE */}
              <div className="flex flex-col gap-2 font-jetbrains bg-[black] md:bg-[#171719] w-41.5 h-20.25 md:w-[145px] px-5 py-2 rounded-2xl">
                <span className="text-[#b2b2b2] tracking-wider">% CHANGE</span>

                <p
                  className={` w-100 ${
                    percentageChange > 0 ? "text-[#42eb05]" : "text-[#ff4141]"
                  } tracking-wide text-[16px]`}
                >
                  {percentageChange > 0 ? "▲" : "▼"}{" "}
                  {percentageChange.toFixed(5)}%
                </p>
              </div>
            </div>

            {/* ================= TIME RANGE ================= */}

            <div className="flex items-center justify-around rounded-lg mt-6 w-71.5 h-10.25 p-2 text-[14px] text-[#b2b2b2] bg-[black] md:bg-[#171719]">
              <span
                className={
                  historyDate === "1D"
                    ? "bg-[#3d3d3d] py-2 px-3 text-white rounded-lg"
                    : "cursor-pointer"
                }
                onClick={() => setHistoryDate("1D")}
              >
                1D
              </span>

              <span
                className={
                  historyDate === "1W"
                    ? "bg-[#3d3d3d] py-2 px-3 text-white rounded-lg"
                    : "cursor-pointer"
                }
                onClick={() => setHistoryDate("1W")}
              >
                1W
              </span>

              <span
                className={
                  historyDate === "1M"
                    ? "bg-[#3d3d3d] py-2 px-3 text-white rounded-lg"
                    : "cursor-pointer"
                }
                onClick={() => setHistoryDate("1M")}
              >
                1M
              </span>

              <span
                className={
                  historyDate === "3M"
                    ? "bg-[#3d3d3d] py-2 px-3 text-white rounded-lg"
                    : "cursor-pointer"
                }
                onClick={() => setHistoryDate("3M")}
              >
                3M
              </span>

              <span
                className={
                  historyDate === "1Y"
                    ? "bg-[#3d3d3d] py-2 px-3 text-white rounded-lg"
                    : "cursor-pointer"
                }
                onClick={() => setHistoryDate("1Y")}
              >
                1Y
              </span>

              <span
                className={
                  historyDate === "5Y"
                    ? "bg-[#3d3d3d] py-2 px-3 text-white rounded-lg"
                    : "cursor-pointer"
                }
                onClick={() => setHistoryDate("5Y")}
              >
                5Y
              </span>
            </div>
          </div>

          {/* ================= CHART ================= */}

          <div className="bg-[black] lg:bg-[#171719] w-85.75 h-92.25 p-3 rounded-2xl mt-4 md:w-[680px] lg:w-[1036px]">
            <div className="flex items-center justify-between mb-2 md:w-[680px] lg:w-[996px]">
              <p className="text-white md:text-[18px]">
                {currency.fromSelectedCurrency}/{currency.toSelectedCurrency}
              </p>

              <p className="flex items-center gap-3 text-[#b2b2b2] text-[14px] md:text-[16px]">
                <span>{last}</span>

                <span>
                  ·{" "}
                  {new Date(
                    historyRate[historyRate.length - 1]?.date,
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>

                <span>16:00</span>

                <span>CET</span>
              </p>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historyRate}>
                <XAxis
                  tick={{ fill: "#777", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  dataKey="date"
                  tickFormatter={(date) =>
                    new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />

                <YAxis
                  tick={{ fill: "#777", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <CartesianGrid stroke="#2A2A2C" strokeDasharray="3 3" />

                <Tooltip content={<CustomTooltip />} />

                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#CEF739"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}
