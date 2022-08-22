import { useSelector } from 'react-redux'
import {selectors} from '../../store/index';

import './ListCurrencies.scss';

const ListCurrencies = () => {
  const currencies = useSelector(selectors.getCurrencies);
  const baseCurrency = useSelector(selectors.getBaseCurrency);

  return (
    <div className="list-currencies__container">
      <ul className="list-currencies">
         {currencies && (
          Object.entries(currencies.results).map((value) =>
            <li key={value[0]} className="list-currencies__item">
              {
                <h1 className='list-currencies__item-info'>
                  {`From ${baseCurrency} to: ${value[0]} ${value[1]}`}
                </h1>
              }
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default ListCurrencies;