import "./App.css";

import { changeTheme, LinearBar, useAppSelector, Header } from "@shared";
import { selectError, selectStatus, selectTheme } from "./appStateSelectors";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { Flip, toast, ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const theme = useAppSelector(selectTheme);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const navigate = useNavigate();

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
      navigate("/", { replace: true });
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
              <LinearBar />
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
