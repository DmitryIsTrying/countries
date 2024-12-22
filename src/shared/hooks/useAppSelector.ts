import { RootState } from "app";
import { useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>();
