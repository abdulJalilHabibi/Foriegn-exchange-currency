import { useEffect, useState } from "react";

import { data } from "../data/data.js";

import { useExchageRate } from "../hooks/useExchangeRate.js";
import useAmountInput from "../hooks/useAmountInput.js";
import useSearch from "../hooks/useSearch.js";
import DropDown from "./DropDown.jsx";
import CurrencyDropdown from "./CurrencyDropDown.jsx";
import useCurrency from "../hooks/useCurrency.js";

const popularCurrencies = ["AFN", "USD"];

export default function CheckRate({
  className,
  favorited,
  setFavorited,
  selectedCountry,
  handleFavorite,
  logged,
  setLogged,
  handleLogged,
  currency,
  sendField,
  receiveField,
}) {
  const filterdCountriesSender = useSearch(currency.searchFrom);
  const filterdCountriesReciver = useSearch(currency.searchTo);

  const [isLogged, setIsLogged] = useState(false);

  const { result, rate, changePercent } = useExchageRate(
    currency.fromSelectedCurrency,
    currency.toSelectedCurrency,
    sendField.value,
  );

  // sync درست با useEffect به‌جای setState داخل render
  useEffect(() => {
    receiveField.setValue(result || "");
  }, [result]);

  function handleLogClick() {
    handleLogged(currency.fromSelectedCurrency, currency.toSelectedCurrency);

    setIsLogged(true);

    setTimeout(() => {
      setIsLogged(false);
    }, 500);
  }

  function handleReverse() {
    currency.setFromSelectedCurrency(currency.toSelectedCurrency);
    currency.setToSelectedCurrency(currency.fromSelectedCurrency);
  }

  const alreadyFavroite = favorited.some(
    (favorite) =>
      favorite.senderCurrency === currency.fromSelectedCurrency &&
      favorite.receiverCurrency === currency.toSelectedCurrency,
  );

  return (
    <div className="pt-8 font-jetbrains">
      <h1 className="mb-6 tracking-wider text-white">CHECK THE RATE</h1>

      <div>
        <div className="min-h-[460px] w-[343px] rounded-[20px] bg-black pb-6 md:min-h-[222px] md:w-[720px] md:bg-[#171719] lg:w-[1036px]">
          <div className="flex flex-col items-center gap-5 pt-6 md:flex-row md:gap-2 md:px-8 lg:justify-center lg:gap-6">
            {/* ================= SENDER ================= */}
            <div className="h-[109px] w-[311px] rounded-[20px] bg-[#202022] px-6 py-3 md:h-[117px] md:w-[292px] lg:w-[450px]">
              <div className="flex flex-col gap-5">
                <h3 className="text-[#c6c6c6]">SEND</h3>

                <div className="flex w-full min-w-0 items-center justify-between gap-3">
                  {/* Amount + Hover border-bottom */}
                  <div
                    className="relative flex min-w-0 flex-1 items-center"
                    onMouseEnter={() => sendField.setIsHovered(true)}
                    onMouseLeave={() => sendField.setIsHovered(false)}
                  >
                    <input
                      className="min-w-0 flex-1 bg-transparent text-[20px] font-bold tracking-[1.4px] text-white outline-none lg:text-3xl"
                      value={sendField.value}
                      onChange={sendField.handleChange}
                      placeholder="0"
                    />

                    {/* span نامرئی برای اندازه‌گیری عرض عدد */}
                    <span
                      ref={sendField.textRef}
                      className="pointer-events-none absolute left-0 top-0 -z-10 whitespace-pre text-[20px] font-bold tracking-[1.4px] opacity-0 lg:text-3xl"
                    >
                      {sendField.value || "0"}
                    </span>

                    {/* border-bottom فقط زیر عدد، فقط موقع hover */}
                    {sendField.isHovered && (
                      <span
                        className="pointer-events-none absolute bottom-0 left-0 border-b border-[#9d9d9d]"
                        style={{ width: `${sendField.inputWidth}px` }}
                      />
                    )}
                  </div>

                  {/* ================= CURRENCY ================= */}
                  <CurrencyDropdown
                    onFavorited={setFavorited}
                    filterdCountries={filterdCountriesSender}
                    selectedCurrency={currency.fromSelectedCurrency}
                    setSelectedCurrency={currency.setFromSelectedCurrency}
                    handleOpen={currency.handleSenderOpen}
                    isOpen={currency.isOpen}
                    setIsOpen={currency.setIsOpen}
                    search={currency.searchFrom}
                    setSearch={currency.setSearchFrom}
                    countries={selectedCountry}
                    popularCurrencies={popularCurrencies}
                    position="sender"
                  />
                </div>
              </div>
            </div>

            {/* ================= REVERSE ================= */}
            <div
              onClick={handleReverse}
              className="flex h-[48px] w-[48px] shrink-0 cursor-pointer items-center justify-center rounded-lg bg-[#202022] hover:bg-[#3d3d3d]"
            >
              <img
                className="h-[18px] w-[16px] md:hidden"
                src="./reverse.png"
                alt=""
              />
              <img
                className="hidden h-[20px] w-[20px] md:block"
                src="./horizentallyReverse.png"
                alt=""
              />
            </div>

            {/* ================= RECEIVER ================= */}
            <div className="h-[109px] w-[311px] rounded-[20px] bg-[#202022] px-6 py-3 md:h-[117px] md:w-[292px] lg:w-[450px]">
              <div className="flex flex-col gap-5">
                <h3 className="text-[#c6c6c6]">RECEIVE</h3>

                <div className="flex w-full min-w-0 items-center justify-between gap-3">
                  {/* Amount + Hover border-bottom */}
                  <div
                    className="relative flex min-w-0 flex-1 items-center"
                    onMouseEnter={() => receiveField.setIsHovered(true)}
                    onMouseLeave={() => receiveField.setIsHovered(false)}
                  >
                    <input
                      className="min-w-0 flex-1 bg-transparent text-[20px] font-bold tracking-[1.4px] text-[#CEF739] outline-none placeholder:text-[#9d9d9d] lg:text-3xl"
                      value={receiveField.value}
                      readOnly
                      placeholder="0"
                    />

                    <span
                      ref={receiveField.textRef}
                      className="pointer-events-none absolute left-0 top-0 -z-10 whitespace-pre text-[20px] font-bold tracking-[1.4px] opacity-0 lg:text-3xl"
                    >
                      {receiveField.value || "0"}
                    </span>

                    {receiveField.isHovered && (
                      <span
                        className="pointer-events-none absolute bottom-0 left-0 border-b border-[#9d9d9d]"
                        style={{ width: `${receiveField.inputWidth}px` }}
                      />
                    )}
                  </div>

                  {/* Currency */}
                  <CurrencyDropdown
                    onFavorited={setFavorited}
                    filterdCountries={filterdCountriesReciver}
                    selectedCurrency={currency.toSelectedCurrency}
                    setSelectedCurrency={currency.setToSelectedCurrency}
                    handleOpen={currency.handleReceiverOpen}
                    isOpen={currency.isReceiveOpen}
                    setIsOpen={currency.setIsReceiveOpen}
                    search={currency.searchTo}
                    setSearch={currency.setSearchTo}
                    countries={selectedCountry}
                    popularCurrencies={popularCurrencies}
                    position="receiver"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 w-full border-t-2 border-dotted border-[#2e2e2e]" />

          <div className="mt-5 flex flex-col items-center justify-center gap-4 text-white md:flex-row md:gap-49 lg:justify-between lg:px-6">
            <div>
              <p className="text-white">
                1 {currency.fromSelectedCurrency} = {rate}{" "}
                {currency.toSelectedCurrency}
              </p>
            </div>

            <div className="flex gap-3">
              <div
                onClick={() =>
                  handleFavorite(
                    currency.fromSelectedCurrency,
                    currency.toSelectedCurrency,
                    rate,
                    changePercent,
                  )
                }
                className={`flex cursor-pointer items-center gap-2 rounded-lg px-2 ${
                  alreadyFavroite
                    ? "bg-[#CEF739] text-black hover:bg-[#a7c830]"
                    : "bg-[#2e2e2e] hover:bg-[#3D3D3D] text-white"
                }`}
              >
                {alreadyFavroite ? (
                  <img className="w-4" src="./star.svg" alt="star" />
                ) : (
                  <img className="h-4 w-4" src="./star1.png" alt="star" />
                )}
                <button className="cursor-pointer">
                  {alreadyFavroite ? "FAVORITED" : "FAVORITE"}
                </button>
              </div>

              <div
                className={`flex cursor-pointer items-center gap-2 rounded-lg border border-[#CEF739] px-2 py-1 ${
                  isLogged ? "bg-[#CEF739] text-black" : "hover:bg-[#283300]"
                }`}
              >
                {isLogged && (
                  <img className="w-3" src="./mark.png" alt="mark" />
                )}
                <button
                  onClick={() => handleLogClick()}
                  className="cursor-pointer"
                >
                  {isLogged ? "Logged" : "LOG CONVERSION"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
