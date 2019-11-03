import React from 'react';
import renderer from 'react-test-renderer';
import OfferList from './offer-list';

it(`OfferList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<OfferList
      offers={[{
        id: `id0`,
        title: ``,
        type: `private room`,
        price: 0,
        img: `room.jpg`,
        rating: 0,
        isPremium: false
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
