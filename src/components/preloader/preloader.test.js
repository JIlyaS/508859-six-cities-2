import React from 'react';
import renderer from 'react-test-renderer';
import Prelaoder from './preloader';

it(`Prelaoder correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Prelaoder />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
