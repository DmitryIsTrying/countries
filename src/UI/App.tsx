import { useAppSelector } from "bll/hooks/useAppSelector";
import InfiniteProgressBar from "common/linearBar/LinearBar";
import { selectError, selectStatus, selectTheme } from "common/selectors/appStateSelectors";
import { changeTheme } from "common/utils/changeTheme";
import { useEffect, useLayoutEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Outlet } from "react-router-dom";
import { Flip, toast, ToastContainer } from "react-toastify";
import "./App.css";
import { Header } from "./components/header/Header";

function App() {
  const theme = useAppSelector(selectTheme);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  useLayoutEffect(() => {
    changeTheme(theme === "light");
  }, [theme]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }
  }, [error]);

  return (
    <SkeletonTheme
      baseColor={theme === "light" ? "hsl(0, 0%, 100%)" : "hsl(207, 26%, 17%)"}
      highlightColor={theme === "light" ? "hsl(0, 0%, 52%)" : "hsl(209, 23%, 22%)"}
    >
      <div className="container">
        <Header />
        <div className="main">
          {status === "PENDING" && (
            <div className="linearBar">
              <InfiniteProgressBar />
            </div>
          )}
          <ToastContainer />
          <Outlet />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default App;
