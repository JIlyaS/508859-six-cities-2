import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {offers} = props;

  return <Main
    offers={offers}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        isPremium: PropTypes.bool.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.oneOf([`apartment`, `private room`, `house`, `hotel`])
      })
  )
};

export default App;
