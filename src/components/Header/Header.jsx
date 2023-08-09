import './Header.scss';

// Only one instruction that is a return : using implicit return
const Header = () => (
  <header className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">1 euro</p>
  </header>
);

export default Header;
