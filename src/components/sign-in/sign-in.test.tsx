import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';

import {SignIn} from './sign-in';

Enzyme.configure({adapter: new Adapter()});

it(`SignIn correctly renders after relaunch`, () => {
  const tree = Enzyme.shallow(<SignIn
    email={``}
    password={``}
    history={{
      push: () => {}
    }}
    onValueFormChange={() => {}}
    onCheckLogin={() => {}}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
