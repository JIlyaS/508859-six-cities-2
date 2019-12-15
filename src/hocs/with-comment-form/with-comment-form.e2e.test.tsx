import * as React from 'react';
import * as Enzyme from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import withCommentForm from './with-comment-form';
import {WithCommentFormMock} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

const refMock = document.createElement(`button`);

const MockComponent = () => <div />;
const MockComponentWrapped = withCommentForm(MockComponent);

describe(`withCommentForm  HOC work correct`, () => {
  it(`CommentForm component is correct`, () => {
    const wrapper = Enzyme.shallow(<MockComponentWrapped />);
    wrapper.instance().refSubmitBtn.current = refMock;
    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().comment).toEqual(``);
    wrapper.props().onValueFormChange(
        {target: {value: WithCommentFormMock.RATING}},
        WithCommentFormMock.RATING_NAME
    );
    wrapper.props().onValueFormChange(
        {target: {value: WithCommentFormMock.COMMENT}},
        WithCommentFormMock.COMMENT_NAME
    );
    expect(wrapper.state().rating).toEqual(WithCommentFormMock.RATING);
    expect(wrapper.state().comment).toEqual(WithCommentFormMock.COMMENT);
    wrapper.props().onFormResetSubmit();
    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().comment).toEqual(``);
  });
});
