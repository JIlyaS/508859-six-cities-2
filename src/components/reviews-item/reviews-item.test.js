import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item';

it(`ReviewsItem correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ReviewsItem
      review={{
        id: `id0`,
        avatar: `avatar-max.jpg`,
        name: `Max`,
        rating: 4.8,
        date: `April 2019`,
        description: ``
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
