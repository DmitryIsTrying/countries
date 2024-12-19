import "./App.css";
import { Countries } from "./components/countries/Countries";
import { Header } from "./components/header/Header";
import { SearchSettings } from "./components/searchSettings/SearchSettings";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <SearchSettings />
        <Countries />
      </div>
    </div>
  );
}

export default App;
