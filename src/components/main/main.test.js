import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

jest.mock(`../map/map`);

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      offers={[{
        title: ``,
        type: `private room`,
        price: 0,
        img: `room.jpg`,
        rating: 0,
        isPremium: false,
        coordinate: [],
        photos: [],
        features: [],
        insideProperties: []
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
