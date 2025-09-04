import { useState } from "react";
import arrowdown from "/assets/arrowdown.svg";
import opennew from "/assets/opennew.svg";
import { useCompare } from "../context/CompareProvider";

export default function TextOptions() {
  const [chosenLanguage, setChosenLanguage] = useState<string>("ქართული");
  const [languageModal, setLanguageModal] = useState<boolean>(false);

  const { setLeftText, setRightText, setDiffHtml, counter } = useCompare();
  const handleNew = () => {
    setLeftText("");
    setRightText("");
    setDiffHtml("");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb:flex mb:flex-col mb:items-center tb:flex-row tb:items-center tb:justify-between lp:flex lp:items-center lp:justify-between mb:gap-[17px] tb:px-[28px] lp:pl-[24px] dk:pl-[24px] tb:gap-0 mb:mt-[24px]">
        <div className="choose-language-format mb:flex mb:flex-col tb:flex tb:flex-row mb:gap-[17px] tb:gap-[24px]">
          <div
            onClick={() => setLanguageModal(!languageModal)}
            className="choose-language cursor-pointer mb:w-[288px] tb:w-[155px] mb:rounded-[8px] border-[1px] border-[#E0E0E0] px-[14px] py-[9px] flex items-center justify-between"
          >
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
        <div
          onClick={() => handleNew()}
          className="open-new mb:w-[288px] tb:w-[150px] flex items-center justify-center py-[9px] gap-[4px] rounded-[6px] cursor-pointer"
          style={{
            backgroundColor:
              counter === 0 ? "rgba(56, 58, 72, 0.60)" : "#4571E4",
          }}
        >
          <img src={opennew} alt="add new" />
          <p className="text-white text-[14px] font-normal leading-[22px]">
            ახლის გახსნა
          </p>
        </div>
      </div>
      <div className="divider mb:w-[80%] mt-[16px] tb:w-[80%] lp:w-[80%] dk:w-[80%] h-[1px] bg-[#EDEDED]"></div>
      {languageModal && (
        <div className="absolute flex flex-col gap-[14px] mb:top-48 mb:w-[288px] tb:w-[155px] tb:left-7 tb:top-50 lp:left-66 lp:top-18 py-[16px] px-[12px] bg-[#FFF] rounded-[8px] border-[1px] border-[#4571E4]">
          <div
            onClick={() => {
              setChosenLanguage("ქართული");
              setLanguageModal(false);
            }}
            className="fist-option flex flex-row items-center gap-[4px] cursor-pointer"
          >
            <div className="circle w-[16px] h-[16px] rounded-full border-[1px] border-[#E0E0E0]"></div>
            <p className="text-[12px] text-[#383A48] font-normal leading-[20px]">
              ქართული
            </p>
          </div>
          <div
            onClick={() => {
              setChosenLanguage("ქართული");
              setLanguageModal(false);
            }}
            className="second-option flex flex-row items-center gap-[4px] cursor-pointer"
          >
            <div className="circle w-[16px] h-[16px] rounded-full border-[1px] border-[#E0E0E0]"></div>
            <p className="text-[12px] text-[#383A48] font-normal leading-[20px]">
              ქართული
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
