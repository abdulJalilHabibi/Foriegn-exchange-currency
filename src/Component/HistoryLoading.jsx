export default function HistoryLoading() {
  return (
    <div className="pb-4 lg:w-[1036px] animate-pulse">
      {/* Cards */}
      <div className="grid grid-cols-2 gap-3 mt-4 md:flex md:gap-5">
        <div className="w-41.5 h-20.25 md:w-[145px] bg-[#2a2a2c] rounded-2xl" />

        <div className="w-41.5 h-20.25 md:w-[145px] bg-[#2a2a2c] rounded-2xl" />

        <div className="w-41.5 h-20.25 md:w-[145px] bg-[#2a2a2c] rounded-2xl" />

        <div className="w-41.5 h-20.25 md:w-[145px] bg-[#2a2a2c] rounded-2xl" />
      </div>

      {/* Chart */}
      <div className="bg-[#2a2a2c] w-85.75 h-92.25 rounded-2xl mt-4 md:w-[680px] lg:w-[1036px]" />
    </div>
  );
}
