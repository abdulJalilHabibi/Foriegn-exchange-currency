import useLiveMarket from "../hooks/useLiveMarket";
import CurrencyItem from "./CurrencyItem";

export default function LiveMarket() {
  const marketPairs = [
    ["USD", "JPY"],
    ["GBP", "USD"],
    ["USD", "CHF"],
    ["EUR", "GBP"],
    ["AUD", "USD"],
  ];

  const currencyLiveMarket = useLiveMarket(marketPairs);

  const result = currencyLiveMarket.map((currency) => {
    return (
      <div className="flex h-full shrink-0 items-center border-l-2  border-[#434141] text-[11px] md:text-[15px]">
        <p className="whitespace-nowrap">
          <span className="ml-2 text-[#9d9d9d]">
            {currency.base}/{currency.quote}{" "}
          </span>
          <span className="text-white">{currency.rate}</span>
          <span className="mr-2 text-[#42eb05]"> ▲ +0.04%</span>
        </p>
      </div>
    );
  });

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

      {result}
    </div>
  );
}
