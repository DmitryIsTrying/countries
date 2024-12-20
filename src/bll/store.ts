import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { CountriesActions, countriesReducer } from "./countriesReducer";
import { thunk, ThunkAction, ThunkDispatch } from "redux-thunk";
import { appReducer, AppStateActions } from "./appReducer";

const reducer = combineReducers({
  countries: countriesReducer,
  app: appReducer,
});

export const store = createStore(reducer, {}, applyMiddleware(thunk));

//types of all actions app
type AppActions = CountriesActions | AppStateActions;

//state type
export type RootState = ReturnType<typeof store.getState>;

// useDispatch type
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>;

// thunks type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActions>;
