import React from 'react';
import renderer from 'react-test-renderer';
import {SortList} from './sort-list';

it(`SortList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<SortList
      activeSortName={`Popular`}
      changeSortElemClickHandler={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
