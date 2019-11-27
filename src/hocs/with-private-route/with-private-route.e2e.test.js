import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import withPrivateRoute from './with-private-route';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withPrivateRoute(MockComponent);

describe(`withPrivateRoute HOC work correct`, () => {
  it(`PrivateRoute component is correct`, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
