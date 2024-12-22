import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";

import { CountriesActions, countriesReducer } from "features/CountryFind";
import { thunk, ThunkAction, ThunkDispatch } from "redux-thunk";
import { appReducer, AppStateActions } from "../app/appReducer";

const reducer = combineReducers({
  countries: countriesReducer,
  app: appReducer,
});

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Исправленный preloadedState
const preloadedState = {
  app: undefined,
  countries: undefined, // Начальное состояние для countriesReducer
};

export const store = createStore(
  reducer,
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
