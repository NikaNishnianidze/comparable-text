import { useState } from "react";
import arrowdown from "/assets/arrowdown.svg";

export default function TextOptions() {
  const [chosenLanguage, setChosenLanguage] = useState<string>("ქართული");
  return (
    <div className="mb:flex mb:flex-col tb:flex-row tb:items-center tb:justify-between mb:gap-[17px] tb:gap-0 mt-[24px]">
      <div className="choose-language-format">
        <div className="choose-language mb:w-[288px] mb:rounded-[8px] border-[1px] border-[#E0E0E0] px-[14px] py-[9px] flex items-center justify-between">
          <p className="text-[#383A48] text-[14px] font-normal leading-[22px]">
            {chosenLanguage}
          </p>
        </div>
        <div className="format"></div>
      </div>
      <div className="open-new"></div>
    </div>
  );
}
