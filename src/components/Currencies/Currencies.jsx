import PropTypes from 'prop-types';
import './Currencies.scss';

const Currencies = ({ currenciesList, handleClick }) => (
  <div className="currencies">
    <h3 className="currencies-title">Currencies</h3>
    {/* Iterate over each item in 'currenciesList' and create an 'li' element */}
    <ul>
      {currenciesList.map((item) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
        <li
          className="currency"
          key={item.name}
          onClick={() => {
            console.log(`Click on currency : ${item.name}`);
            handleClick(item.name);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

// Define the prop types for 'currenciesList' prop
Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Currencies;
