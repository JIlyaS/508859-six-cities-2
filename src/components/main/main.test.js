import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      rentList={[]}
      onDetailModalClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
