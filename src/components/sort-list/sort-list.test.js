import React from 'react';
import renderer from 'react-test-renderer';
import {SortList} from './sort-list';
import {DEFAULT_OFFERS} from '../../constants';

it(`SortList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<SortList
      activeSortName={`Popular`}
      changeSortElemClickHandler={() => {}}
      offers={DEFAULT_OFFERS}
      originalOffers={DEFAULT_OFFERS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
