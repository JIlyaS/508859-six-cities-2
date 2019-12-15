import * as React from 'react';
import * as Enzyme from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import withPrivateRoute from './with-private-route';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withPrivateRoute(MockComponent, true, `/login`);

describe(`withPrivateRoute HOC work correct`, () => {
  it(`PrivateRoute component is correct`, () => {
    const wrapper = Enzyme.shallow(<MockComponentWrapped />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
