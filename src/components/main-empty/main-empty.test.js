import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './main-empty';

it(`MainEmpty correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainEmpty />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
