import React from 'react';
import renderer from 'react-test-renderer';

import {SortList} from './sort-list';
import {SortListMock} from '../../constants';

it(`SortList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<SortList
      isSortOpened={SortListMock.IS_SORT_OPENED}
      activeSortName={SortListMock.ACTIVE_SORT_NAME}
      onSortElemClick={() => {}}
      onSortListClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
