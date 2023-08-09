import React from 'react';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import Button from '../Button/Button';
import './App.scss';

import currencies from '../../data/currencies';

class App extends React.Component {
  // Constructor to initialize the component state
  constructor(props) {
    super(props);

    // Initializing the component state
    this.state = {
      // Indicate if currency block is open
      currenciesOpen: true,
      // The amount to be converted
      baseAmount: 1,
      // The name of the currently selected currency
      currencyName: 'United States Dollar',
    };
    // Binding the 'handleClick' method to the current instance of the class
    // This is necessary to preserve the correct context of 'this' inside the method
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOnCurrency = this.handleClickOnCurrency.bind(this);
  }

  handleClick() {
    // Retrieve the current value of currenciesOpen from the state
    const { currenciesOpen } = this.state;
    this.setState({
      // Toggle the value of currenciesOpen and update the state
      currenciesOpen: !currenciesOpen,
    });
  }

  // Method to handle the click event on a currency item
  handleClickOnCurrency(newCurrencyName) {
    this.setState({
      currencyName: newCurrencyName,
    });
  }

  // Method to compute the converted amount based on the selected currency
  computeAmount() {
    const { currencyName, baseAmount } = this.state;

    const selectedCurrency = currencies.find(
      (item) => item.name === currencyName
    );
    // console.log(selectedCurrency);
    const { rate } = selectedCurrency;

    const result = baseAmount * rate;

    const resultToDisplay = result.toFixed(2);

    return resultToDisplay;
  }

  // Render method to render the component's UI
  render() {
    const { currenciesOpen, baseAmount, currencyName } = this.state;
    const result = this.computeAmount();

    return (
      <div className="App">
        <Header currentAmount={baseAmount} />
        <main>
          <Button clickTreatment={this.handleClick} isOpen={currenciesOpen} />
          {currenciesOpen && (
            <Currencies
              currenciesList={currencies}
              handleClick={this.handleClickOnCurrency}
            />
          )}
          <Amount
            selectedCurrencyName={currencyName}
            convertedAmount={result}
          />
        </main>
      </div>
    );
  }
}

export default App;
