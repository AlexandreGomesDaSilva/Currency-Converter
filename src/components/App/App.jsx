import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Currencies />
      <Amount />
    </div>
  );
}

export default App;
