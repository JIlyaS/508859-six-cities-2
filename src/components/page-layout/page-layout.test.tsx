import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

import PageLayout from "./page-layout";

Enzyme.configure({adapter: new Adapter()});

it(`PageLayout correctly renders after relaunch`, () => {
  const children = <div>Контент</div>;
  const tree = Enzyme.shallow(<PageLayout pageName="sign">{children}</PageLayout>);

  expect(toJSON(tree)).toMatchSnapshot();
});
