import React from 'react';
import renderer from 'react-test-renderer';

import ReviewList from './review-list';
import {ReviewListMock} from '../../constants';

it(`ReviewList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ReviewList
      reviews={ReviewListMock.REVIEWS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
