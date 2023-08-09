import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import './App.scss';

import currencies from '../../data/currencies';

function App() {
  return (
    <div className="App">
      <Header />
      <Currencies currenciesList={currencies} />
      <Amount />
    </div>
  );
}

export default App;
