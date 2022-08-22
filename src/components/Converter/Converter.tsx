import React from 'react'
import './Converter.scss';
import { Currencies } from '../../store/currencies';

type Props = {
  queryFrom: number,
  queryTo: number,
  onHandleSetQueryFrom: (event: { target: { value: string } }) => void,
  selectedCurrencyFrom: string,
  selectedCurrencyTo: string,
  onHandleSelectCurrencyFrom: (event: { target: { value: string } }) => void,
  onHandleSelectCurrencyTo: (event: { target: { value: string } }) => void,
  currencies: Currencies,
  onReset:  () => void,
}

const Converter: React.FC<Props> = ({
  queryFrom,
  queryTo ,
  onHandleSetQueryFrom,
  selectedCurrencyFrom,
  selectedCurrencyTo,
  onHandleSelectCurrencyFrom,
  onHandleSelectCurrencyTo,
  currencies,
  onReset: reset,
}) => {
  return (
    <div className='converter '>
      <h3 className='converter__title'>Currency Converter</h3>
      <form className='converter__form'>
        <div className="converter__container">
          <input className="input is-info" value={queryFrom} onChange={onHandleSetQueryFrom} type='text'/>
          <div className="control has-icons-left">
            <div className="select">
              <select value={selectedCurrencyFrom} onChange={onHandleSelectCurrencyFrom}>
                {currencies && (
                  Object.keys(currencies.results).map((value,) =>
                    <option key={value} value={value}>{value}</option>
                ))}
              </select>
            </div>
            <div className="icon is-small is-left">
              <i className="fas fa-globe"></i>
            </div>
          </div>
        </div>


      <div className="converter__container">
        <input className="input is-info" value={queryTo} type='text' onChange={() => (0)}/>
        <div className="control has-icons-left">
          <div className="select">
            <select value={selectedCurrencyTo} onChange={onHandleSelectCurrencyTo}>
              {currencies && (
                Object.keys(currencies.results).map((value,) =>
                  <option key={value} value={value}>{value}</option>
                )
              )}
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas fa-globe"></i>
          </div>
        </div>
      </div>
    </form>

    <button className='converter__button' onClick={reset}>Reset</button>
  </div>
  )
}
export default Converter;