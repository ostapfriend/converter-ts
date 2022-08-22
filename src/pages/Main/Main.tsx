import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Converter from '../../components/Converter/Converter';
import {getAllCurrency} from '../../api/api'

import './Main.scss';

import { selectors, actions } from '../../store/index';


export const Main = () => {
  /* STATE */
  const [queryFrom, setQueryFrom] = useState(1);
  const [queryTo, setQueryTo] = useState(1);
  // const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState('USD');
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState('USD');

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
  }, [queryFrom, baseCurrency, selectedCurrencyTo])

  const handleSetQueryFrom = (event: { target: { value: string; }; }) => {
    const {value} = event.target;
    const onlyNumber = parseInt(value.replace(/[^\d]/g, ''));
    setQueryFrom(onlyNumber);
  };

  const handleSelectCurrencyFrom = (event: { target: { value: string; }; }) => {
    // setSelectedCurrencyFrom(event.target.value);
    dispatch(actions.BaseCurrencyActions.setCurrencies(event.target.value));
  }

  const handleSelectCurrencyTo = (event: { target: { value: string; }; }) => {
    setSelectedCurrencyTo(event.target.value);
  }

  const reset = () => {
    converter();
    setQueryFrom(1);
  };

  const converter = () => {
    let valueFromCountry;

    Object.entries(currencies.results).find((currency) => {
      if (currency[0] === selectedCurrencyTo) {
        return valueFromCountry = currency[1];
      }
    });

    if (valueFromCountry) {
      const convertCurrency = (valueFromCountry * queryFrom);
      setQueryTo(convertCurrency);
    }
  };

  async function getCurrenciesFromServer(country: string = 'USD') {
    await getAllCurrency(country).then(response => dispatch(actions.CurrenciesActions.setCurrencies(response)));
  }

  return (
    <div className='main'>
      <Converter
        queryFrom={queryFrom}
        queryTo={queryTo}
        onHandleSetQueryFrom={handleSetQueryFrom}
        selectedCurrencyFrom={baseCurrency}
        selectedCurrencyTo={selectedCurrencyTo}
        onHandleSelectCurrencyFrom={handleSelectCurrencyFrom}
        onHandleSelectCurrencyTo={handleSelectCurrencyTo}
        currencies={currencies}
        onReset={reset}
      />

    </div>
  )
}

