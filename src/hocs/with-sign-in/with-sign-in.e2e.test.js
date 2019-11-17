import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import withSignIn from './with-sign-in';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withSignIn(MockComponent);

describe(`withSignIn HOC work correct`, () => {
  it(`SignIn component is correct`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().email).toEqual(``);
    expect(wrapper.state().password).toEqual(``);
    // wrapper.props().openSortListClickHandler();
    // expect(wrapper.state().isSortOpened).toEqual(true);
  });
});
