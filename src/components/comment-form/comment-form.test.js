
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {CommentForm} from './comment-form';
import {CommentFormMock} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

it(`CommentForm correctly renders after relaunch`, () => {
  const tree = shallow(<CommentForm
    rating={CommentFormMock.RATING}
    comment={CommentFormMock.COMMENT}
    addReview={() => {}}
    addValueFormChangeHandler={() => {}}
    getDefaultForm={() => {}}
    resetFormSubmitHandler={() => {}}
    idHotel={CommentFormMock.ID_HOTEL}
    refSubmitBtn={null}
    formSubmit={CommentFormMock.FORM_SUBMIT}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
