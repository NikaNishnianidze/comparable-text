import mainLogo from "/assets/mainLogo.png";
import enagram from "/assets/ENAGRAM.svg";
import menuIcon from "/assets/menu.svg";
import chevronsLeft from "/assets/chevrons-left.svg";
import doneIcon from "/assets/firstMenuIcon.svg";
import compareText from "/assets/comparetext.svg";
import backgroundImage from "/assets/background.svg";
import micIcon from "/assets/mic.svg";
import aligncenterIcon from "/assets/align-center.svg";
import pdfIcon from "/assets/pdf.svg";
import arrowRight from "/assets/arrow-right.svg";
import profileBackground from "/assets/profileBackground.svg";
import threeDots from "/assets/threedots.svg";

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
      <div className="desktop mb:hidden tb:hidden lp:block dk:block lp:flex lp:flex-col lp:justify-between dk:flex dk:flex-col dk:justtify-between min-h-[100vh] w-[240px] bg-[#132450] pt-[12px]">
        <div className="top">
          <img
            src={chevronsLeft}
            alt="chevrons left"
            className="ml-[193px] w-[20px] h-[20px]"
          />
          <div className="logos flex flex-row items-center gap-[11.06px] ml-[24px] mt-[13px]">
            <img
              src={mainLogo}
              alt="mainLogo"
              className="w-[42.6px] h-[44px]"
            />
            <img
              src={enagram}
              alt="enagram"
              className="w-[56.28px] h-[7.47px]"
            />
          </div>
          <div className="menu-options mt-[51px] flex flex-col ml-[12.8px]">
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
            <div className="other-options mt-[14px] flex flex-col gap-[28px] ml-[5.5px]">
              <div className="sount-text flex items-center gap-[9px]">
                <img src={micIcon} alt="mic icon" />
                <div className="text flex items-center gap-[4px] text-[14px] text-white font-normal leading-[20px]">
                  <p>ხმა</p>
                  <img src={arrowRight} alt="arrow right icon" />
                  <p>ტექსტი</p>
                </div>
              </div>
              <div className="text-sound flex items-center gap-[9px]">
                <img src={aligncenterIcon} alt="align-center icon" />
                <div className="text flex items-center gap-[4px] text-[14px] text-white font-normal leading-[20px]">
                  <p>ტექსტი</p>
                  <img src={arrowRight} alt="arrow right icon" />
                  <p>ხმა</p>
                </div>
              </div>
              <div className="pdf-converter flex items-center gap-[9px]">
                <img src={pdfIcon} alt="pdf converter icon" />
                <div className="text flex items-center gap-[4px] text-[14px] text-white font-normal leading-[20px]">
                  <p>PDF კონვერტაცია</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="divider w-[240px] h-[1px] bg-[#9EB9FF33]/20"></div>
          <div className="mainc-content py-[20px] px-[14px] flex items-center justify-between">
            <div className="profile flex items-center gap-[5px] justify-center">
              <div className="profileimage relative w-[20px] h-[20px]">
                <img
                  src={profileBackground}
                  alt="profile background image"
                  className="w-full h-full object-cover"
                />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] text-[#132450] font-bold leading-[24px] tracking-[0.1px]">
                  თ
                </p>
              </div>
              <p className="text-[14px] font-normal text-white leading-[20px]">
                თამარ ონიანი
              </p>
            </div>
            <div className="dots">
              <img src={threeDots} alt="three dots icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
