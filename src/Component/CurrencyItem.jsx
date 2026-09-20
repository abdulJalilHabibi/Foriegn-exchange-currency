export default function CurrencyItem({
  country,
  selectedCurrency,
  setSelectedCurrency,
  setIsOpen,
  onFavorited,
}) {
  function handleSelect() {
    setSelectedCurrency(country.currency);
    setIsOpen(false);
    onFavorited([]);
  }

  return (
    <div
      onClick={handleSelect}
      className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 hover:border hover:border-[#9d9d9d]"
    >
      <img src={country.flag} alt={country.name} className="h-6 w-6 shrink-0" />

      <span className="text-white">{country.currency}</span>

      <span className="truncate text-[#999]">{country.name}</span>

      {selectedCurrency === country.currency && (
        <img
          src="/mark1.png"
          alt="selected"
          className="ml-auto h-4 w-4 shrink-0"
        />
      )}
    </div>
  );
}
