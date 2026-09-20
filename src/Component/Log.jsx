export default function Log({ logged, setLogged }) {
  return (
    <div className="md:h-[400px]">
      <div className="w-[343px] border-2 border-[#252526] bg-[#171719]  font-jetbrains  mt-4 rounded-2xl p-4  md:w-[720px] lg:w-[1036px]">
        <h3 className="tracking-wider text-white text-[20px]">
          CONVERSION LOG
        </h3>

        <div className="flex items-center justify-between">
          <span className=" text-[#9d9d9d] text-[18px]">
            {logged.length} LOGGED{" "}
          </span>
          <button className="bg-[#202022] cursor-pointer font-jetbrains border border-[#393939] text-[#9d9d9d] px-3 py-2 rounded-lg">
            CLEAR ALL
          </button>
        </div>

        {logged.map((logg) => {
          return (
            <div className="flex items-center border-2 border-[#252526] justify-between w-[311px] md:w-[680px] lg:w-[996px]  h-[70px] mt-4 p-[12px] rounded-[10px] bg-[#202022] text-white ">
              <div className="flex flex-col gap-1 md:gap-5 md:flex-row">
                <div>
                  <span className="text-[#9d9d9d] text-[18px]">20M</span>
                </div>
                <div className="flex items-center md:text-[18px] gap-2">
                  <span className="text-white ">{logg.senderCurrency} </span>
                  <img className="w-3" src="./row.png" alt="row" />
                  <span>{logg.receiverCurrency}</span>
                </div>
              </div>
              <div className="flex items-center gap-4  md:gap-6 ">
                <div className="md:flex items-center ">
                  <p className="text-[#9d9d9d] tracking-wider text-[20px] md:text-[23px] font-bold">
                    734.32
                  </p>
                  <p className="text-[#CEF739] sm:ml-5 md:text-[18px] tracking-wider">
                    {" "}
                    735.2
                  </p>
                </div>
                <div className=" flex justify-center cursor-pointer border-2 border-[#2e2e2e] items-center rounded-lg bg-[#202022] w-[32px] h-[32px]">
                  <img className="w-3 h-3 " src="./trash.png" alt="trash" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
