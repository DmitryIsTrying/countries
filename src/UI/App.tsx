import { useAppSelector } from "bll/hooks/useAppSelector";
import { selectTheme } from "common/selectors/appStateSelectors";
import { changeTheme } from "common/utils/changeTheme";
import { useLayoutEffect } from "react";
import "./App.css";
import { Countries } from "./components/countries/Countries";
import { Header } from "./components/header/Header";
import { SearchSettings } from "./components/searchSettings/SearchSettings";

function App() {
  const theme = useAppSelector(selectTheme);

  useLayoutEffect(() => {
    changeTheme(theme === "light");
  }, [theme]);

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
