import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import withCommentForm from './with-comment-form';
import {DEFAULT_COMMENT} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withCommentForm(MockComponent);

describe(`withCommentForm  HOC work correct`, () => {
  it(`CommentForm component is correct`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().rating).toEqual(`0`);
    expect(wrapper.state().comment).toEqual(``);
    wrapper.props().addValueFormChangeHandler({target: {value: `5`}}, `rating`);
    wrapper.props().addValueFormChangeHandler({target: {value: DEFAULT_COMMENT}}, `comment`);
    expect(wrapper.state().rating).toEqual(`5`);
    expect(wrapper.state().comment).toEqual(DEFAULT_COMMENT);
  });
});
