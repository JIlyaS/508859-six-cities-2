
import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';
import {CommentForm} from './comment-form';
import {CommentFormMock} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

it(`CommentForm correctly renders after relaunch`, () => {
  const tree = Enzyme.shallow(<CommentForm
    rating={CommentFormMock.RATING}
    comment={CommentFormMock.COMMENT}
    onAddReview={() => {}}
    onValueFormChange={() => {}}
    onGetDefaultForm={() => {}}
    onFormResetSubmit={() => {}}
    idHotel={CommentFormMock.ID_HOTEL}
    refSubmitBtn={null}
    formSubmit={CommentFormMock.FORM_SUBMIT}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
