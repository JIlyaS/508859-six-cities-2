import React from 'react';
import renderer from 'react-test-renderer';
import DetailInfo from './detail-info';

jest.mock(`../map/map`);

it(`DetailInfo correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<DetailInfo
      idPath={`1`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
