import React from 'react';
import renderer from 'react-test-renderer';
import {SortList} from './sort-list';

it(`SortList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<SortList
      isSortOpened={false}
      activeSortName={`Popular`}
      changeSortElemClickHandler={() => {}}
      openSortListClickHandler={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
