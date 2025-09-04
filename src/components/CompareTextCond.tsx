import compareTextIcon from "/assets/comparetext.svg";
import arrowdown from "/assets/arrowdown.svg";

export default function CompareTextCond() {
  return (
    <div className="flex flex-col mb:block tb:block lp:hidden dk:hidden">
      <div className="mb:flex mb:items-center mb:gap-[4px] mb:mt-[20px] tb:flex tb:items-center tb:gap-[4px] tb:mt-[24px] mb:pl-[16px] tb:pl-[30px]">
        <img src={compareTextIcon} alt="compare text icon" />
        <p className="mb:text-[12px] tb:text-[16px] text-[#132450] font-bold leading-[20px]">
          ტექსტის შედარება
        </p>
        <img src={arrowdown} alt="arrow down" />
      </div>
      <div className="divider mb:mt-[18px] tb:mt-[24px] w-full h-[1px] bg-[#EDEDED]"></div>
    </div>
  );
}
