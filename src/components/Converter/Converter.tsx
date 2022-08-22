import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Converter.scss";

import { actions, selectors } from "../../store/index";
import { getAllCurrency } from "../../api/api";

export const Converter = () => {
  /* STATE */
  const [currencyFrom, setCurrencyFrom] = useState(1);
  const [currencyTo, setCurrencyTo] = useState(1);
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("USD");

  /* STORE */
  const dispatch = useDispatch();
  const currencies = useSelector(selectors.getCurrencies);
  const baseCurrency = useSelector(selectors.getBaseCurrency);

  /* FIRST RENDER*/
  useEffect(() => {
    getCurrenciesFromServer();
    converter();
  }, []);

  /* NEXT RERENDERS*/
  useEffect(() => {
    getCurrenciesFromServer(baseCurrency);
    converter();
  }, [currencyFrom, baseCurrency, selectedCurrencyTo]);

  const handleSetQueryFrom = (event: { target: { value: string } }) => {
    const { value } = event.target;
    const onlyNumber = parseInt(value.replace(/[^\d]/g, ""));
    setCurrencyFrom(onlyNumber);
  };

  const handleSelectCurrencyFrom = (event: { target: { value: string } }) => {
    dispatch(actions.BaseCurrencyActions.setCurrencies(event.target.value));
  };

  const handleSelectCurrencyTo = (event: { target: { value: string } }) => {
    setSelectedCurrencyTo(event.target.value);
  };

  const reset = () => {
    converter();
    setCurrencyFrom(1);
  };

  const converter = () => {
    let valueFromCountry;

    Object.entries(currencies.results).find((currency) => {
      if (currency[0] === selectedCurrencyTo) {
        return (valueFromCountry = currency[1]);
      }
    });

    if (valueFromCountry) {
      const convertCurrency = valueFromCountry * currencyFrom;
      setCurrencyTo(convertCurrency);
    }
  };

  async function getCurrenciesFromServer(country: string = "USD") {
    await getAllCurrency(country).then((response) =>
      dispatch(actions.CurrenciesActions.setCurrencies(response))
    );
  }

  return (
    <div className="converter ">
      <h3 className="converter__title">Currency Converter</h3>
      <form className="converter__form">
        <div className="converter__container">
          <input
            className="input is-info"
            value={currencyFrom}
            onChange={handleSetQueryFrom}
            type="text"
          />
          <div className="control has-icons-left">
            <div className="select">
              <select value={baseCurrency} onChange={handleSelectCurrencyFrom}>
                {currencies &&
                  Object.keys(currencies.results).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
              </select>
            </div>
            <div className="icon is-small is-left">
              <i className="fas fa-globe"></i>
            </div>
          </div>
        </div>

        <div className="converter__container">
          <input
            className="input is-info"
            value={currencyTo}
            type="text"
            onChange={() => 0}
          />
          <div className="control has-icons-left">
            <div className="select">
              <select
                value={selectedCurrencyTo}
                onChange={handleSelectCurrencyTo}
              >
                {currencies &&
                  Object.keys(currencies.results).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
              </select>
            </div>
            <div className="icon is-small is-left">
              <i className="fas fa-globe"></i>
            </div>
          </div>
        </div>
      </form>

      <button className="converter__button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
