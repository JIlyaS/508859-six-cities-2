import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main/main';

const rentList = [
  {
    title: `Beautiful luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    image: `apartment-01.jpg`,
    rating: 93,
    premium: true
  },
  {
    title: `Wood and stone place`,
    type: `Private room`,
    price: 132,
    image: `room.jpg`,
    rating: 80,
    premium: false
  },
  {
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 120,
    image: `apartment-02.jpg`,
    rating: 80,
    premium: false
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    image: `apartment-03.jpg`,
    rating: 100,
    premium: true
  }
];

ReactDOM.render(<Main
  rentList={rentList}
  onDetailModalClick={() => {}}
/>, document.querySelector(`#root`));
