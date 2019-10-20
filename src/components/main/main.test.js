import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      rentList={[{
        title: ``,
        type: `Private room`,
        price: 0,
        image: `room.jpg`,
        rating: 0,
        premium: false
      }]}
      onDetailModalClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
