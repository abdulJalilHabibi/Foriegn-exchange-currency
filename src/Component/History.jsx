import { useState } from "react";

export default function History() {
  return (
    <div className="pb-4 lg:w-[1036px] ">
      <div className="lg:flex items-center justify-between">
        <div className="grid grid-cols-2 gap-3 mt-4 md:flex md:gap-5">
          <div className="flex flex-col gap-2 font-jetbrains bg-[black] md:bg-[#171719] w-41.5 h-20.25 md:w-[140px]  px-5 py-2 rounded-2xl">
            <span className="text-[#b2b2b2] tracking-wider">OPEN</span>

            <p className="text-white tracking-[1px] text-[20px]">0.8516</p>
          </div>

          <div className="flex flex-col gap-2 font-jetbrains bg-[black] md:bg-[#171719] w-41.5 h-20.25 md:w-[140px] px-5 py-2 rounded-2xl">
            <span className="text-[#b2b2b2] tracking-wider">LAST</span>

            <p className="text-white tracking-[1px] text-[20px]">0.8516</p>
          </div>

          <div className="flex flex-col gap-2 font-jetbrains md:bg-[#171719] bg-[black] w-41.5 h-20.25 md:w-[140px] px-5 py-2 rounded-2xl">
            <span className="text-[#b2b2b2] tracking-wider">CHANGE</span>

            <p className="text-[#42eb05] tracking-[1px] text-[20px]">+0.0014</p>
          </div>

          <div className="flex flex-col gap-2 font-jetbrains bg-[black] md:bg-[#171719] w-41.5 h-20.25 md:w-[140px] px-5 py-2 rounded-2xl">
            <span className="text-[#b2b2b2] tracking-wider">% CHANGE</span>

            <p className="text-[#42eb05] tracking-[1px] text-[20px]">
              ▲ 0.8516
            </p>
          </div>
        </div>

        {/* ================= TIME RANGE ================= */}

        <div className="flex items-center justify-around rounded-lg mt-6 w-71.5 h-10.25 p-2 text-[14px] text-[#b2b2b2] bg-[black] md:bg-[#171719] ">
          <span>1D</span>
          <span>1W</span>
          <span>1M</span>
          <span>3M</span>
          <span>1Y</span>
          <span>5Y</span>
        </div>
      </div>
      {/* ================= CHART ================= */}

      <div className="bg-[black] lg:bg-[#171719]  w-85.75 h-92.25 p-3  rounded-2xl mt-4 md:w-[680px] lg:w-[1036px]">
        <div className="flex items-center justify-between mb-2 md:w-[680px] lg:w-[996px]">
          <p className="text-white md:text-[20px] ">USD/EUR</p>

          <p className="flex items-center gap-3 text-[#b2b2b2] text-[14px] md:text-[16px]">
            <span>0.8530</span>
            <span>· May 14</span>
            <span>16:00</span>
            <span>CET</span>
          </p>
        </div>

        <img
          className="w-79.5 h-74.5  md:w-[680px] md:h-[272px]  lg:w-[996px]"
          src="./chart.png"
          alt="chart"
        />
      </div>

      {/* ================= TEST ================= */}
    </div>
  );
}
