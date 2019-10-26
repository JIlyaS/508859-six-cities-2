import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';

it(`OfferCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={{
        title: ``,
        type: `private room`,
        price: 0,
        img: `room.jpg`,
        rating: 0,
        isPremium: false
      }}
      activeOfferMouseEnterHandler={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
