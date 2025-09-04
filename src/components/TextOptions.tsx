import { useState } from "react";
import arrowdown from "/assets/arrowdown.svg";
import opennew from "/assets/opennew.svg";

export default function TextOptions() {
  const [chosenLanguage, setChosenLanguage] = useState<string>("ქართული");
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb:flex mb:flex-col mb:items-center tb:flex-row tb:items-center tb:justify-between lp:flex lp:items-center lp:justify-between mb:gap-[17px] tb:px-[28px] lp:pl-[24px] dk:pl-[24px] tb:gap-0 mb:mt-[24px]">
        <div className="choose-language-format mb:flex mb:flex-col tb:flex tb:flex-row mb:gap-[17px] tb:gap-[24px]">
          <div className="choose-language mb:w-[288px] tb:w-[155px] mb:rounded-[8px] border-[1px] border-[#E0E0E0] px-[14px] py-[9px] flex items-center justify-between">
            <p className="text-[#383A48] text-[14px] font-normal leading-[22px]">
              {chosenLanguage}
            </p>
            <img src={arrowdown} alt="arrow down icon" />
          </div>
          <div className="format flex items-center gap-[8px]">
            <input
              type="checkbox"
              className="appearance-none w-[20px] h-[20px] rounded-[4px] border-[#E0E0E0] border-[1px]"
            />
            <p className="text-[14px] text-[#383A48] font-normal leading-[22px] tracking-[0.14px]">
              ფორმატის შენარჩუნება
            </p>
          </div>
        </div>
        <div className="open-new mb:w-[288px] tb:w-[150px] flex items-center justify-center py-[9px] gap-[4px] rounded-[6px] bg-addnew">
          <img src={opennew} alt="add new" />
          <p className="text-white text-[14px] font-normal leading-[22px]">
            ახლის გახსნა{" "}
          </p>
        </div>
      </div>
      <div className="divider mb:w-[80%] mt-[16px] tb:w-[80%] lp:w-[80%] dk:w-[80%] h-[1px] bg-[#EDEDED]"></div>
    </div>
  );
}
