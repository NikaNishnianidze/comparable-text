import CompareTextCond from "./components/CompareTextCond";
import HeaderMenu from "./components/HeaderMenu";
import TextOptions from "./components/TextOptions";

function App() {
  return (
    <div className="flex flex-col">
      <HeaderMenu />
      <CompareTextCond />
      <TextOptions />
    </div>
  );
}

export default App;
