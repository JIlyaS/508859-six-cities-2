import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

jest.mock(`../map/map`);

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
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
