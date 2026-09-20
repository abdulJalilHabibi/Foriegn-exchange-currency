import { useState } from "react";

export default function DropDown({ setSelectedOption, selectedOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("HISTORY");

  const handleSelect = (option, title) => {
    setSelectedOption(option);
    setSelectedTitle(title);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-4 bg-black rounded-lg p-3 lg:w-[1036px] ">
      {/* Mobile */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full flex items-center justify-between text-white cursor-pointer"
      >
        <span className="flex items-center gap-2">
          {selectedTitle}

          {/* FAVORITES number */}
          {selectedTitle === "FAVORITES" && (
            <span className="flex justify-center bg-[#283300] text-[#cef739] items-center w-7 h-7 rounded-full">
              10
            </span>
          )}

          {/* LOG number */}
          {selectedTitle === "LOG" && (
            <span className="flex justify-center bg-[#283300] text-[#cef739] items-center w-7 h-7 rounded-full">
              8
            </span>
          )}
        </span>

        <img
          className={`w-3 h-3 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
          src="./dropdown1.png"
          alt="dropdown"
        />
      </button>

      {/* Mobile History Content */}

      {isOpen && (
        <div
          className="
            md:hidden
            flex
            flex-col
            gap-4
            tracking-wider
            absolute
            top-full
            left-0
            z-50
            w-full
            bg-[#232323]
            rounded-lg
            p-3
            mt-1
            text-white
            cursor-pointer
          "
        >
          <p onClick={() => handleSelect("history", "HISTORY")}>HISTORY</p>

          <p onClick={() => handleSelect("compare", "COMPARE")}>COMPARE</p>

          <p
            onClick={() => handleSelect("favroites", "FAVORITES")}
            className="flex justify-between items-center"
          >
            FAVORITES
            <span className="flex justify-center bg-[#283300] text-[#cef739] items-center w-7 h-7 rounded-full">
              10
            </span>
          </p>

          <p
            onClick={() => handleSelect("logs", "LOG")}
            className="flex justify-between items-center"
          >
            LOG
            <span className="flex justify-center bg-[#283300] text-[#cef739] items-center w-7 h-7 rounded-full">
              8
            </span>
          </p>
        </div>
      )}

      {/* Tablet + Desktop History Content */}

      <div className="hidden md:flex md:gap-10 border-b-2 border-[#202022] tracking-wider text-white mt-2">
        <p
          onClick={() => setSelectedOption("history")}
          className={`text-white cursor-pointer pb-3 mb-[-2px] px-5 ${
            selectedOption === "history"
              ? "border-b border-[#CEF739]"
              : "border-b border-transparent"
          }`}
        >
          HISTORY
        </p>

        <p
          onClick={() => setSelectedOption("compare")}
          className={`text-white cursor-pointer pb-3 mb-[-2px] px-4 ${
            selectedOption === "compare"
              ? "border-b border-[#CEF739]"
              : "border-b border-transparent"
          }`}
        >
          COMPARE
        </p>

        <p
          onClick={() => setSelectedOption("favroites")}
          className={`flex gap-2 items-center cursor-pointer pb-3 mb-[-2px] px-4 ${
            selectedOption === "favroites"
              ? "border-b border-[#CEF739]"
              : "border-b border-transparent"
          }`}
        >
          FAVORITES
          <span className="flex items-center justify-center bg-[#283300] text-[#cef739] items-center w-7 h-7 rounded-full">
            10
          </span>
        </p>

        <p
          onClick={() => setSelectedOption("logs")}
          className={`flex gap-2 items-center cursor-pointer pb-3 mb-[-2px] px-4 ${
            selectedOption === "logs"
              ? "border-b border-[#CEF739]"
              : "border-b border-transparent"
          }`}
        >
          LOG
          <span className="flex justify-center bg-[#283300] text-[#cef739] items-center w-7 h-7 rounded-full">
            8
          </span>
        </p>
      </div>
    </div>
  );
}
