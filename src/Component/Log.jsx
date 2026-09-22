import { useEffect, useState } from "react";

export default function Log({
  logged,
  setLogged,
  handleAllClearLogged,
  handleTimeLogged,
  handleDeleteLog,
}) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function handleTimeLogged(createdLogged) {
    const seconds = Math.floor((now - createdLogged) / 1000);
    if (seconds < 60) {
      return seconds + "S";
    }
    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
      return minutes + "M";
    }
    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return hours + "H";
    }

    const days = Math.floor(hours / 24);

    return days + "D";
  }

  return (
    <div className="pb-2">
      <div>
        <div className="w-[343px] border-2 border-[#252526] bg-[#171719] font-jetbrains mt-4 rounded-2xl p-4 md:w-[720px] lg:w-[1036px]">
          {/* Header */}
          <div className="md:flex md:justify-between">
            <h3 className="tracking-wider text-white md:text-[20px] text-[18px]">
              CONVERSION LOG
            </h3>
            <div className="flex justify-between items-center gap-4">
              <span className="text-[#9d9d9d] md:text-[18px] text-[16px]">
                {logged.length} LOGGED
              </span>
              <button
                onClick={() => handleAllClearLogged()}
                className="bg-[#202022] cursor-pointer font-jetbrains border border-[#393939] text-[#9d9d9d] px-3 py-2 rounded-lg"
              >
                CLEAR ALL
              </button>
            </div>
          </div>
          {/* Logs */}
          {logged.map((logg) => {
            return (
              <div
                key={`${logg.senderCurrency}-${logg.receiverCurrency}`}
                className="flex items-center border-2 border-[#252526] justify-between w-[311px] md:w-[680px] lg:w-[996px] h-[70px] mt-4 p-[12px] rounded-[10px] bg-[#202022] text-white"
              >
                {/* Time + Currency */}
                <div className="flex flex-col gap-1 md:gap-5 md:flex-row">
                  <div>
                    <span className="text-[#9d9d9d] text-[18px]">
                      {handleTimeLogged(logg.createdAt)}
                    </span>
                  </div>
                  <div className="flex items-center md:text-[18px] gap-2">
                    <span className="text-white">{logg.senderCurrency}</span>
                    <img className="w-3" src="./row.png" alt="row" />
                    <span>{logg.receiverCurrency}</span>
                  </div>
                </div>
                {/* Values + Trash */}
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="md:flex items-center">
                    <p className="text-[#9d9d9d] tracking-wider text-[20px] md:text-[23px] font-bold">
                      {logg.senderValue}
                    </p>
                    <p className="text-[#CEF739] sm:ml-5 md:text-[18px] tracking-wider">
                      {logg.receiveValue}
                    </p>
                  </div>
                  {/* Delete */}
                  <div
                    onClick={() =>
                      handleDeleteLog(
                        logg.senderCurrency,
                        logg.receiverCurrency,
                      )
                    }
                    className="group flex justify-center cursor-pointer border-2 border-[#2e2e2e] items-center rounded-lg bg-[#202022]  hover:bg-[#3d3d3d] w-[32px] h-[32px]"
                  >
                    {/* Normal Trash */}
                    <img
                      className="w-3 h-3 group-hover:hidden"
                      src="./trash.png"
                      alt="trash"
                    />
                    {/* Hover Trash */}
                    <img
                      className="hidden w-3.5 h-3.5 group-hover:block"
                      src="./fillTrash.png"
                      alt="fillTrash"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
