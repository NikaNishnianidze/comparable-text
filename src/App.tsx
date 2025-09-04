import CompareTextCond from "./components/CompareTextCond";
import HeaderMenu from "./components/HeaderMenu";
import TextOptions from "./components/TextOptions";

function App() {
  return (
    <div className="mb:flex mb:flex-col tb:flex tb:flex-col lp:flex lp:flex-row">
      <HeaderMenu />
      <div className="w-full">
        <CompareTextCond />
        <TextOptions />
      </div>
    </div>
  );
}

export default App;
