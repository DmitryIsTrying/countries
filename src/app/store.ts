import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";

import { thunk, ThunkAction, ThunkDispatch } from "redux-thunk";

import { checkThemeSettings } from "shared/utils/checkThemeSettings";
import { CountriesActions, countriesReducer } from "@CountryFind";
import { appReducer, AppStateActions, AppStatus } from "./appReducer";

const reducer = combineReducers({
  countries: countriesReducer,
  app: appReducer,
});

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Исправленный preloadedState
const preloadedState = {
  app: {
    status: "PENDING" as AppStatus,
    error: null as null | string,
    theme: checkThemeSettings(),
  },
  countries: undefined, // Начальное состояние для countriesReducer
};

export const store = createStore(
  reducer,
  //@ts-ignore
  preloadedState, // Передаем preloadedState
  composeEnhancers(applyMiddleware(thunk))
);

//types of all actions app
type AppActions = CountriesActions | AppStateActions;

//state type
export type RootState = ReturnType<typeof store.getState>;

// useDispatch type
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>;

// thunks type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActions>;
