import mainLogo from "/assets/mainLogo.png";
import enagram from "/assets/ENAGRAM.svg";
import menuIcon from "/assets/menu.svg";
import chevronsLeft from "/assets/chevrons-left.svg";
import doneIcon from "/assets/firstMenuIcon.svg";
import compareText from "/assets/comparetext.svg";
import backgroundImage from "/assets/background.svg";

export default function HeaderMenu() {
  return (
    <div className="responsive">
      <div className="mobile mb:block tb:block lp:hidden dk:hidden mb:flex mb:items-center mb:justify-between tb:flex tb:items-center tb:justify-between w-full py-[12px] mb:px-[20px] tb:px-[30px] bg-[#132450]">
        <div className="logos mb:flex mb:items-center gap-[9.05px]">
          <img
            src={mainLogo}
            alt="main logo"
            className="w-[34.89px] h-[36px]"
          />
          <img src={enagram} alt="enagram" className="w-[46.05px] h-[6.1px]" />
        </div>
        <div className="menu">
          <img src={menuIcon} alt="menu icon" />
        </div>
      </div>
      <div className="desktop mb:hidden tb:hidden lp:block dk:block lp:flex lp:flex-col min-h-[100vh] w-[240px] bg-[#132450] pt-[12px] pb-[18px]">
        <img src={chevronsLeft} alt="chevrons left" className="ml-[193px]" />
        <div className="logos flex flex-row items-center gap-[11.06px] ml-[24px] mt-[13px]">
          <img src={mainLogo} alt="mainLogo" className="w-[42.6px] h-[44px]" />
          <img src={enagram} alt="enagram" className="w-[56.28px] h-[7.47px]" />
        </div>
        <div className="menu-options mt-[51px] flex flex-col ml-[12.8px] pl-[11.2px]">
          <div className="martlwera flex flex-row items-center gap-[9px] ml-[11.2px]">
            <div className="icons relative">
              <p className="text-[6px] text-white font-semibold absolute top-[-6px] right-[6px]">
                ABC
              </p>
              <img
                src={doneIcon}
                alt="doneicon"
                className="w-[16px] h-[11px]"
              />
            </div>
            <p className="text-[14px] text-white font-normal leading-[20px]">
              მართლმწერი
            </p>
          </div>
          <div className="compare-text mt-[18px] relative ">
            <img
              src={backgroundImage}
              alt="background image"
              className="w-full h-auto"
            />
            <div className="content flex absolute w-full h-full top-0 left-0 items-center gap-[9px] pl-[11.2px]">
              <img
                src={compareText}
                alt="compare text icon"
                className="w-[24px] h-[24px]"
              />
              <p className="text-[14px] font-bold leading-[20px] text-[#132450]">
                ტექსტის შედარება
              </p>
            </div>
          </div>
          <div className="other-options mt-[14px] flex flex-col gap-[28px]">
            <div className="sount-text"></div>
            <div className="text-sound"></div>
            <div className="pdf-converter"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
