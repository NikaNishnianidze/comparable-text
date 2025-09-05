import { createContext, useContext, useState, type ReactNode } from "react";

interface IContext {
  leftText: string;
  setLeftText: React.Dispatch<React.SetStateAction<string>>;
  rightText: string;
  setRightText: React.Dispatch<React.SetStateAction<string>>;
  diffHtml: { left: string; right: string } | null;
  setDiffHtml: React.Dispatch<
    React.SetStateAction<{
      left: string;
      right: string;
    } | null>
  >;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const CompareContext = createContext<IContext>({
  leftText: "",
  setLeftText: () => {},
  rightText: "",
  setRightText: () => {},
  diffHtml: null,
  setDiffHtml: () => {},
  counter: 0,
  setCounter: () => {},
});

export function CompareProvider({ children }: { children: ReactNode }) {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [diffHtml, setDiffHtml] = useState<{
    left: string;
    right: string;
  } | null>(null);
  const [counter, setCounter] = useState<number>(0);

  return (
    <CompareContext.Provider
      value={{
        leftText,
        setLeftText,
        rightText,
        setRightText,
        diffHtml,
        setDiffHtml,
        counter,
        setCounter,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export const useCompare = () => useContext(CompareContext);
