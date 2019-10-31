import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

jest.mock(`../map/map`);

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
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
