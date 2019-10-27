import React from 'react';
import renderer from 'react-test-renderer';
import OfferList from './offer-list';

it(`OfferList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<OfferList
      offers={[{
        title: ``,
        type: `private room`,
        price: 0,
        img: `room.jpg`,
        rating: 0,
        isPremium: false
      }]}
      updatePathApp={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
