import React from 'react';
import renderer from 'react-test-renderer';
import DetailInfo from './detail-info';

it(`DetailInfo correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<DetailInfo
      offer={{
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
        }
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
