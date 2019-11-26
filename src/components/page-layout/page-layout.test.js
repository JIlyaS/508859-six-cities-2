import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

import PageLayout from "./page-layout";

Enzyme.configure({adapter: new Adapter()});

it(`PageLayout correctly renders after relaunch`, () => {
  const children = <div>Контент</div>;
  const tree = shallow(<PageLayout pageName="sign">{children}</PageLayout>);

  expect(toJSON(tree)).toMatchSnapshot();
});
