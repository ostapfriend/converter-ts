import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import currenciesReducer, { Currencies } from "./currencies";
import {
  actions as CurrenciesActions,
  selectors as currenciesSeletors,
} from "./currencies";

import baseCurrencyReducer, { BaseCurrency } from "./baseCurrency";
import {
  actions as BaseCurrencyActions,
  selectors as BaseCurrencySelectors,
} from "./baseCurrency";

export const actions = { CurrenciesActions, BaseCurrencyActions };

export const selectors = {
  getCurrencies: (state: { currencies: Currencies }) =>
    currenciesSeletors.getCurrencies(state.currencies),
  getBaseCurrency: (state: { baseCurrency: BaseCurrency }) =>
    BaseCurrencySelectors.getBaseCurrency(state.baseCurrency),
};

const reducer = combineReducers({
  currencies: currenciesReducer,
  baseCurrency: baseCurrencyReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
