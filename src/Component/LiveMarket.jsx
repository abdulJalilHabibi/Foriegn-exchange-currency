export default function LiveMarket() {
  return (
    <div className="flex h-[30px] w-full items-center overflow-hidden bg-[#171719] gap-2">
      {/* LIVE MARKETS */}
      <div className="flex h-full w-27 shrink-0 items-center gap-2 md:w-34.25 bg-[#cef739] p-2">
        <img className="ml-1 w-1.5" src="./dot.png" alt="dot" />

        <p className="text-[#0a0a0a] text-[11px] md:text-[15px] whitespace-nowrap">
          LIVE MARKETS
        </p>
      </div>

      {/* CHANGE */}
      <div className="shrink-0">
        <p className="text-[#ff4141] text-[11px] whitespace-nowrap md:text-[15px]">
          ▼ −0.14%
        </p>
      </div>

      {/* USD/JPY */}
      <div className="flex h-full shrink-0 items-center border-l-2 border-r-2 border-[#434141] text-[11px] md:text-[15px]">
        <p className="whitespace-nowrap">
          <span className="ml-2 text-[#9d9d9d]">USD/JPY</span>
          <span className="text-white"> 157.91</span>
          <span className="mr-2 text-[#42eb05]"> ▲ +0.04%</span>
        </p>
      </div>

      {/* GBP/USD */}
      <div className="flex md:flex items-center text-[11px] md:text-[15px] gap-2 shrink-0 h-full border-r-2 border-[#434141]">
        <p className="text-[#9d9d9d] whitespace-nowrap">GBP/USD</p>
        <span className="text-white">1.3575</span>
        <span className="text-[#ff4141] mr-2">▼ -0.22%</span>
      </div>

      {/* USD/CHF */}
      <div className="hidden md:flex items-center text-[11px] md:text-[15px] gap-2 shrink-0 h-full border-r-2 border-[#434141]">
        <p className="text-[#9d9d9d] whitespace-nowrap">USD/CHF</p>
        <span className="text-white">1.9098</span>
        <span className="text-[#42eb05] mr-2">▲ +0.22%</span>
      </div>

      {/* EUR/GBP */}
      <div className="hidden lg:flex items-center text-[11px] lg:text-[15px] gap-2 shrink-0 h-full border-r-2 border-[#434141]">
        <p className="text-[#9d9d9d] whitespace-nowrap">EUR/GBP</p>
        <span className="text-white">0.8633</span>
        <span className="text-[#42eb05] mr-2">▲ +0.11%</span>
      </div>

      {/* AUD/USD */}
      <div className="hidden lg:flex items-center text-[11px] lg:text-[15px] gap-2 shrink-0 h-full  ">
        <p className="text-[#9d9d9d] whitespace-nowrap">AUD/USD</p>
        <span className="text-white">0.7208</span>
        <span className="text-[#42eb05] mr-2">▲ +0.08%</span>
      </div>

      {/* USD/CAD */}
      <div className="hidden xl:flex items-center text-[11px] xl:text-[15px] gap-2 shrink-0 h-full border-r-2 border-[#434141]">
        <p className="text-[#9d9d9d] whitespace-nowrap">USD/CAD</p>
        <span className="text-white">1.3815</span>
        <span className="text-[#42eb05] mr-2">▲ +0.04%</span>
      </div>
    </div>
  );
}
