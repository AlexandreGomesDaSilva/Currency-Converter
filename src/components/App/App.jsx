import React from 'react';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import './App.scss';

import currencies from '../../data/currencies';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currenciesOpen: false,
    };
  }

  render() {
    const { currenciesOpen } = this.state;

    return (
      <div className="App">
        <Header />
        <main>
          <button
            type="button"
            onClick={() => {
              console.log('Button pressed');

              this.setState({
                currenciesOpen: !currenciesOpen,
              });
            }}
          >
            Display/Hide currencies
          </button>
          {currenciesOpen && <Currencies currenciesList={currencies} />}
          <Amount />
        </main>
      </div>
    );
  }
}

export default App;
