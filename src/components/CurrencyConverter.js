import React from "react";
import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";
import RAPID_API_KEY from "./apikey";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] =
    useState("BTC");
  const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] =
    useState("BTC");
  const [result, setResult] = useState(0);

  console.log(amount);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
        setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
        setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(exchangeRate);

  return (
    <div className="currency-converter">
      <div className="currency-converter-container">
        <h2 className="converter-title">Crypto Converter</h2>
        <div className="input-box">
          <table>
            <tbody>
              <tr>
                <td>Primary Currency:</td>
                <td>
                  <input
                    className="currency-input"
                    type={"number"}
                    name={"currency-amount-1"}
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={chosenPrimaryCurrency}
                    name="currency-option-1"
                    className="currency-options"
                    onChange={(event) =>
                      setChosenPrimaryCurrency(event.target.value)
                    }
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Secondary Currency:</td>
                <td>
                  <input
                    className="currency-input"
                    type={"number"}
                    name={"currency-amount-2"}
                    value={result}
                    disabled={true}
                  />
                </td>
                <td>
                  <select
                    value={chosenSecondaryCurrency}
                    name="currency-option-2"
                    className="currency-options"
                    onChange={(event) =>
                      setChosenSecondaryCurrency(event.target.value)
                    }
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button id="convert-button" onClick={convert}>
            Convert
          </button>
        </div>
      </div>

      <ExchangeRate
        exchangeRate={exchangeRate}
        chosenPrimaryCurrency={primaryCurrencyExchanged}
        chosenSecondaryCurrency={secondaryCurrencyExchanged}
      />
    </div>
  );
};

export default CurrencyConverter;
