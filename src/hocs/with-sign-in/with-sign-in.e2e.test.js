import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import withSignIn from './with-sign-in';
import {WithSignInMock} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withSignIn(MockComponent);

describe(`withSignIn HOC work correct`, () => {
  it(`SignIn component is correct`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().email).toEqual(``);
    expect(wrapper.state().password).toEqual(``);
    wrapper.props().onValueFormChange(
        {target: {value: WithSignInMock.EMAIL}},
        WithSignInMock.EMAIL_NAME
    );
    wrapper.props().onValueFormChange(
        {target: {value: WithSignInMock.PASSWORD}},
        WithSignInMock.PASSWORD_NAME
    );
    expect(wrapper.state().email).toEqual(WithSignInMock.EMAIL);
    expect(wrapper.state().password).toEqual(WithSignInMock.PASSWORD);
  });
});
