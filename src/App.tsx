import Compare from "./components/Compare";
import CompareTextCond from "./components/CompareTextCond";
import HeaderMenu from "./components/HeaderMenu";
import TextOptions from "./components/TextOptions";
import { CompareProvider } from "./context/CompareProvider";

function App() {
  return (
    <div className="mb:flex mb:flex-col tb:flex tb:flex-col lp:flex lp:flex-row">
      <HeaderMenu />
      <div className="w-full flex flex-col">
        <CompareProvider>
          <CompareTextCond />
          <TextOptions />
          <Compare />
        </CompareProvider>
      </div>
    </div>
  );
}

export default App;
