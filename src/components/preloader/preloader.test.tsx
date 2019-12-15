import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Preloader from './preloader';

it(`Preloader correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Preloader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
