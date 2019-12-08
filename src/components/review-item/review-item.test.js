import React from 'react';
import renderer from 'react-test-renderer';

import ReviewsItem from './review-item';
import {ReviewItemMock} from '../../constants';

it(`ReviewsItem correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ReviewsItem
      review={ReviewItemMock.REVIEW}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
