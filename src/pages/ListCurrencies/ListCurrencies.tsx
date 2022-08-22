import { useSelector } from "react-redux";
import { selectors } from "../../store/index";

import "./ListCurrencies.scss";

export const ListCurrencies = () => {
  const currencies = useSelector(selectors.getCurrencies);
  const baseCurrency = useSelector(selectors.getBaseCurrency);

  return (
    <div className="list-currencies__container">
      <ul className="list-currencies">
        {currencies &&
          Object.entries(currencies.results).map((currency) => (
            <li key={currency[0]} className="list-currencies__item">
              {
                <h1 className="list-currencies__item-info">
                  {`From ${baseCurrency} to: ${currency[0]} ${currency[1]}`}
                </h1>
              }
            </li>
          ))}
      </ul>
    </div>
  );
};
