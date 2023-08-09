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
      currenciesOpen: true,
    };
    // Binding the 'handleClick' method to the current instance of the class
    // This is necessary to preserve the correct context of 'this' inside the method
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Retrieve the current value of currenciesOpen from the state
    const { currenciesOpen } = this.state;
    console.log('click !');
    this.setState({
      // Toggle the value of currenciesOpen and update the state
      currenciesOpen: !currenciesOpen,
    });
  }

  // Render method to render the component's UI
  render() {
    const { currenciesOpen } = this.state;

    return (
      <div className="App">
        <Header />
        <main>
          <Button clickTreatment={this.handleClick} isOpen={currenciesOpen} />
          {currenciesOpen && <Currencies currenciesList={currencies} />}
          <Amount />
        </main>
      </div>
    );
  }
}

export default App;
