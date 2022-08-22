export interface Currencies {
  results: {
    [key: string]: [value: number];
  };
}

type CurrenciesAction = {
  type: "set/currencies";
  payload: Currencies;
};

export const CurrenciesState: Currencies = {
  results: {},
};

export const actions = {
  setCurrencies: (currencies: Currencies) => ({
    type: "set/currencies",
    payload: currencies,
  }),
};

export const selectors = {
  getCurrencies: (results: Currencies) => results,
};

const currenciesReducer = (
  currencies = CurrenciesState,
  action: CurrenciesAction
): Currencies => {
  switch (action.type) {
    case "set/currencies":
      return {
        results: action.payload.results,
      };
    default:
      return currencies;
  }
};

export default currenciesReducer;
