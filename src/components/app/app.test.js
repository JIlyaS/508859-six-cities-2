import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

jest.mock(`../map/map`);

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      offers={[{
        id: `id0`,
        title: ``,
        type: `private room`,
        price: 0,
        img: `room.jpg`,
        rating: 0,
        isPremium: false,
        coordinate: [],
        photos: [],
        features: [],
        insideProperties: [],
        hostUser: {
          avatar: ``,
          name: ``,
          status: ``,
          description: []
        },
        reviews: [{
          id: `id0`,
          avatar: ``,
          name: ``,
          rating: 0,
          date: ``,
          description: ``
        }]
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
