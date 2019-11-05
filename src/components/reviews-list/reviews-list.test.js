import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list';

it(`ReviewsList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={[{
        id: `id0`,
        avatar: `avatar-max.jpg`,
        name: `Max`,
        rating: 4.8,
        date: `April 2019`,
        description: ``
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
