import CurrencyItem from "./CurrencyItem";
export default function CurrencyDropdown({
  selectedCurrency,
  setSelectedCurrency,
  isOpen,
  setIsOpen,
  search,
  setSearch,
  countries,
  popularCurrencies,
  position = "receiver",
  handleOpen,
  filterdCountries,
  onFavorited,
}) {
  const popular = countries.filter((country) =>
    popularCurrencies.includes(country.currency),
  );

  const otherCurrencies = countries.filter(
    (country) => !popularCurrencies.includes(country.currency),
  );

  return (
    <div className="relative">
      {/* Button */}
      <button
        type="button"
        onClick={handleOpen}
        className="relative flex h-8 w-[72px] shrink-0 cursor-pointer items-center rounded-lg bg-[#2e2e2e] px-2 hover:bg-[#3d3d3d]"
      >
        <img
          src={
            countries.find((country) => country.currency === selectedCurrency)
              ?.flag
          }
          alt={selectedCurrency}
          className="h-5 w-5 shrink-0"
        />

        <span className="min-w-0 flex-1 pl-1 pr-3 text-left text-[12px] tracking-wider text-white">
          {selectedCurrency}
        </span>

        <img
          src="/dropdown.png"
          alt=""
          className="pointer-events-none absolute right-1.5 h-[3px] w-[6px]"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={`absolute top-[45px] -left-53 md:-left-48 md:-right-6 lg:-left-70 lg:w-[360px] z-50 flex max-h-[380px] w-[300px] max-w-[calc(100vw-48px)] flex-col rounded-[10px] border border-[#383838] bg-[#202022] p-3 shadow-2xl}`}
        >
          {/* Search */}
          <div className="flex h-[46px] shrink-0 items-center gap-4 rounded-[9px] border border-[#999] px-4">
            <svg
              className="h-6 w-6 shrink-0 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input
              value={search}
              type="text"
              placeholder="Search currencies..."
              className="w-full bg-transparent text-[16px] tracking-wider text-white outline-none placeholder:text-[#999]"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* List */}
          <div className="mt-2 flex-1 overflow-y-auto pr-1 scrollbar-hide">
            {/* Popular */}

            {filterdCountries.length > 0 ? (
              <>
                <div>
                  <div className="flex h-[36px] items-center justify-between border-b border-[#303030] px-3 text-[14px] tracking-wider text-[#a3a3a3]">
                    <span>POPULAR</span>
                    <span>{popular.length}</span>
                  </div>

                  <div className="mt-1">
                    {popular.map((country) => (
                      <CurrencyItem
                      onFavorited={onFavorited}
                        key={country.code}
                        country={country}
                        selectedCurrency={selectedCurrency}
                        setSelectedCurrency={setSelectedCurrency}
                        setIsOpen={setIsOpen}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex h-[36px] items-center justify-between border-b border-[#303030] px-3 text-[14px] tracking-wider text-[#a3a3a3]">
                    <span>OTHER CURRENCIES</span>
                    <span>{otherCurrencies.length}</span>
                  </div>

                  <div className="mt-1">
                    {filterdCountries.map((country) => (
                      <CurrencyItem
                        key={country.code}
                        country={country}
                        selectedCurrency={selectedCurrency}
                        setSelectedCurrency={setSelectedCurrency}
                        setIsOpen={setIsOpen}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <p className="text-[#9d9d9d] mt-2">No Currency Result</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
