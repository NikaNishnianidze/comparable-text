import { useState } from "react";
import { diff_match_patch } from "diff-match-patch";
import { useCompare } from "../context/CompareProvider";
import dotanimation from "/assets/dotanimation.svg";
import arrows from "/assets/arrows.svg";
import horizontalArrow from "/assets/horizontalarrow.svg";

export default function Compare() {
  const {
    leftText,
    setLeftText,
    rightText,
    setRightText,
    diffHtml,
    setDiffHtml,
    setCounter,
    counter,
  } = useCompare();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const realignWithLCS = (
    delStr: string,
    insStr: string
  ): [number, string][] => {
    const n = delStr.length;
    const m = insStr.length;
    const dp: number[][] = Array.from({ length: n + 1 }, () =>
      Array(m + 1).fill(0)
    );

    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        dp[i][j] =
          delStr[i] === insStr[j]
            ? dp[i + 1][j + 1] + 1
            : Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }

    let i = 0,
      j = 0;
    const ops: [number, string][] = [];

    while (i < n || j < m) {
      if (i < n && j < m && delStr[i] === insStr[j]) {
        ops.push([0, delStr[i]]);
        i++;
        j++;
      } else if (j < m && (i === n || dp[i][j + 1] >= dp[i + 1][j])) {
        ops.push([1, insStr[j]]);
        j++;
      } else {
        ops.push([-1, delStr[i]]);
        i++;
      }
    }

    const compressed: [number, string][] = [];
    for (const [op, ch] of ops) {
      if (compressed.length && compressed[compressed.length - 1][0] === op) {
        compressed[compressed.length - 1][1] += ch;
      } else {
        compressed.push([op, ch]);
      }
    }

    return compressed;
  };

  const handleCompare = () => {
    setLoading(true);
    setDiffHtml(null);
    setProgress(0);
    setCounter(counter + 1);

    const totalTime = 3000;
    const intervalTime = 50;
    const increment = (intervalTime / totalTime) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setProgress(100);
        }
        return next >= 100 ? 100 : next;
      });
    }, intervalTime);

    setTimeout(() => {
      const dmp = new diff_match_patch();
      let diffs = dmp.diff_main(leftText, rightText);

      dmp.diff_cleanupSemantic(diffs);
      dmp.diff_cleanupSemanticLossless?.(diffs);

      const newDiffs = [];
      for (let k = 0; k < diffs.length; k++) {
        const [op, data] = diffs[k];

        const next = diffs[k + 1];
        if (
          next &&
          ((op === -1 && next[0] === 1) || (op === 1 && next[0] === -1))
        ) {
          const delStr = op === -1 ? data : next[1];
          const insStr = op === 1 ? data : next[1];

          const realigned = realignWithLCS(delStr, insStr);

          if (op === 1 && next[0] === -1) {
            // flip signs in realigned
            for (const seg of realigned) {
              if (seg[0] === -1) seg[0] = 1;
              else if (seg[0] === 1) seg[0] = -1;
            }
          }

          newDiffs.push(...realigned);
          k++;
        } else {
          newDiffs.push([op, data]);
        }
      }

      const leftHtml = newDiffs
        .map(([op, text]) => {
          if (op === -1) return `<span style="color: red">${text}</span>`;
          if (op === 0) return text;
          return "";
        })
        .join("");

      const rightHtml = newDiffs
        .map(([op, text]) => {
          if (op === 1) return `<span style="color: green">${text}</span>`;
          if (op === 0) return text;
          return "";
        })
        .join("");

      setDiffHtml({ left: leftHtml, right: rightHtml });
      setLoading(false);
      setProgress(0);
    }, totalTime);
  };

  return (
    <div className="flex flex-col mt-[24px]">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mx-auto w-[280px] mt-[192px] border-[1px] border-[#E1E1E1] rounded-[8px] py-[20px] px-[16px]">
            <div className="main-div flex flex-row items-center gap-[8px]">
              <div className="big-circle w-[40px] h-[40px] rounded-full border-[2px] border-[#4571E4] flex items-center justify-center">
                <img src={dotanimation} alt="dot animation" />
              </div>
              <div className="text-progress flex flex-col">
                <div className="text">
                  <p className="text-fontcolor text-[10px] font-normal leading-[16px]">
                    Converting...Thank you For your Patience
                  </p>
                </div>
                <div className="progressbar flex flex-row gap-[8px] items-center">
                  <p className="text-fontcolor text-[16px] font-bold text-[#383A48] leading-[24px]">
                    {Math.floor(progress)}%
                  </p>
                  <div className="w-[159px] h-[8px] bg-[#F6F9FF] rounded-[64px] overflow-hidden">
                    <div
                      className="h-full bg-[#4571E4] transition-all duration-50"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleCompare}
            className="w-[142px] p-[10px] bg-fontcolor mt-[192px] rounded-[6px] text-[14px] text-white font-normal leading-[20px]"
            disabled={loading}
          >
            შედარება
          </button>
        </div>
      ) : (
        <div className="text-containers flex  flex-col items-center">
          <div className="text-area-div mb:flex mb:flex-col mb:gap-[16px] tb:flex tb:flex-row tb:gap-[10px] mb:items-center tb:justify-center">
            {diffHtml ? (
              <>
                <div
                  className="mb:w-[288px] mb:h-[190px] tb:w-[330px] tb:h-[432px] lp:w-[342px] lp:h-[432px] dk:w-[542px] dk:h-[432px] p-[12px] rounded-[8px] bg-[#F0F7FF] overflow-auto text-fontcolor text-[14px] font-normal leading-[22px]"
                  dangerouslySetInnerHTML={{ __html: diffHtml.left }}
                />
                <img
                  src={arrows}
                  alt="arrows"
                  className="mb:block tb:hidden lp:hidden dk:hidden"
                />
                <img
                  src={horizontalArrow}
                  alt="horizontal arrow"
                  className="mb:hidden tb:block lp:block dk:block"
                />
                <div
                  className="mb:w-[288px] mb:h-[190px] tb:w-[330px] tb:h-[432px] lp:w-[342px] lp:h-[432px] dk:w-[542px] dk:h-[432px] p-[12px] rounded-[8px] bg-[#F0F7FF] overflow-auto text-fontcolor text-[14px] font-normal leading-[22px]"
                  dangerouslySetInnerHTML={{ __html: diffHtml.right }}
                />
              </>
            ) : (
              <>
                <textarea
                  className="mb:w-[288px] mb:h-[190px] tb:w-[330px] tb:h-[432px] lp:w-[342px] lp:h-[432px] dk:w-[542px] dk:h-[432px] p-[12px] rounded-[8px] bg-[#F0F7FF] outline-none cursor-pointer resize-none text-fontcolor text-[14px] font-normal leading-[22px]"
                  placeholder="დაიწყე წერა..."
                  value={leftText}
                  onChange={(e) => setLeftText(e.target.value)}
                />
                <img
                  src={arrows}
                  alt="arrows"
                  className="mb:block tb:hidden lp:hidden dk:hidden"
                />
                <img
                  src={horizontalArrow}
                  alt="horizontal arrow"
                  className="mb:hidden tb:block lp:block dk:block"
                />
                <textarea
                  className="mb:w-[288px] mb:h-[190px] tb:w-[330px] tb:h-[432px] lp:w-[342px] lp:h-[432px] dk:w-[542px] dk:h-[432px] p-[12px] rounded-[8px] bg-[#F0F7FF] outline-none cursor-pointer resize-none text-fontcolor text-[14px] font-normal leading-[22px]"
                  placeholder="დაიწყე წერა..."
                  value={rightText}
                  onChange={(e) => setRightText(e.target.value)}
                />
              </>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-[32px]">
            <button
              onClick={handleCompare}
              className="w-[142px] p-[10px] bg-[#4571E4] rounded-[6px] text-[14px] text-white font-normal leading-[20px]"
              disabled={loading}
            >
              შედარება
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
