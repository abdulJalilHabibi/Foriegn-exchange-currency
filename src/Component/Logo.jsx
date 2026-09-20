export default function Logo() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-1  ">
        <img className="w-5.5 md:w-6.5" src="./logo.png" alt="logo" />

        <p className="text-white font-bold font-jetbrains md:text-[18px]  tracking-[0.77px]">
          FX_CHECKER
        </p>
      </div>

      <div className="flex items-center gap-1 text-[#9d9d9d] text-[12px] md:text-[18px]">
        <span>55 CURRENCIES</span>
        <span> · EOD</span>
        <span> · ECB DATA</span>
      </div>
    </nav>
  );
}
