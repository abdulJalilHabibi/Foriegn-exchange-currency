export default function Favroite({ favorited, handleDeleteFavorite }) {
  return (
    <div className="pb-2">
      <div className="w-[343px] bg-[#171719] mt-4 rounded-2xl p-4 md:w-[720px] lg:w-[1036px]">
        {/* Header */}
        <div className="flex flex-col gap-1 md:flex-row md:justify-between">
          <div className="flex justify-between items-center gap-3">
            <span className="text-white text-[20px]"> PINNED PAIRS </span>
            <span className="text-[#9d9d9d] tracking-wider text-[20px]">
              {favorited.length} FAVORITES
            </span>
          </div>
        </div>
        {/* Favorites */}
        {favorited.map((item) => {
          return (
            <div
              key={`${item.senderCurrency}-${item.receiverCurrency}`}
              className="flex items-center justify-between w-[311px] md:w-[680px] lg:w-[996px] border border-[#303031] h-[70px] mt-4 p-[12px] rounded-[10px] bg-[#202022] text-white"
            >
              {/* Currency Pair */}
              <div className="flex items-center gap-3 md:gap-5">
                <div className="flex items-center gap-2">
                  <span className="text-white">{item.senderCurrency}</span>
                  <img className="w-3" src="./row.png" alt="row" />
                  <span> {item.receiverCurrency} </span>
                </div>
              </div>
              {/* Rate + Star */}
              <div className="flex items-center gap-2 md:gap-6">
                {/* Rate */}
                <div>
                  <p className="text-white text-[20px] font-bold">
                    {item.rate}
                  </p>
                  {item.changePercent > 0 ? (
                    <p className="text-[#39b80c] tracking-wider">
                      ▲ {item.changePercent?.toFixed(2)} %
                    </p>
                  ) : item.changePercent < 0 ? (
                    <p className="text-[#ff4d4d] tracking-wider">
                      ▼ {Math.abs(item.changePercent)?.toFixed(2)} %
                    </p>
                  ) : null}
                </div>
                {/* Star */}
                <div
                  onClick={() =>
                    handleDeleteFavorite(
                      item.senderCurrency,
                      item.receiverCurrency,
                    )
                  }
                  className="flex justify-center cursor-pointer items-center rounded-lg bg-[#2e2e2e] w-[32px] h-[32px] border-2 border-[#CEF739]"
                >
                  <img className="w-3 h-3" src="./starfil.png" alt="favorite" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
