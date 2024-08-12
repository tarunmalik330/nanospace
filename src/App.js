import "./App.css";
import ExploreNanospace from "./components/ExploreNanospace";
import Header from "./components/Header";

function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <ExploreNanospace />
    </div>
  );
}

export default App;
