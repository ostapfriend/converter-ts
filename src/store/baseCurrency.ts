export type BaseCurrency = string;

type CurrencyAction = {
  type: 'set/baseCurrency',
  payload: BaseCurrency;
};

export const CurrencyState:BaseCurrency = 'USD';

export const actions = {
  setCurrencies: (currency: BaseCurrency) => ({ type: 'set/baseCurrency', payload: currency }),
};

export const selectors = {
  getBaseCurrency: (currency: BaseCurrency) => currency,
};

const baseCurrencyReducer = (currency = CurrencyState, action: CurrencyAction): BaseCurrency => {
  switch (action.type) {
    case 'set/baseCurrency':
      return action.payload;
    default:
      return currency;
  }
};

export default baseCurrencyReducer;
