import React from 'react';
import renderer from 'react-test-renderer';
import DetailInfo from './detail-info';

jest.mock(`../map/map`);

it(`DetailInfo correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<DetailInfo
      offer={{
        id: `id0`,
        title: ``,
        price: 0,
        img: `room.jpg`,
        rating: 0,
        isPremium: false,
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
          avatar: `avatar-max.jpg`,
          name: `Max`,
          rating: 4.8,
          date: `April 2019`,
          description: ``
        }],
      }}
      otherOffers={[{
        id: `id1`,
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
