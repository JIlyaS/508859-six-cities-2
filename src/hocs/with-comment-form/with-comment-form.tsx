import * as React from 'react';
import {Subtract} from "utility-types";

import {Comment} from '../../constants';
import {WithCommentFormState, WithInjectedCommentFormProps} from '../../types/types';

const withCommentForm = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  class WithCommentForm extends React.PureComponent<Subtract<P, WithInjectedCommentFormProps>, WithCommentFormState> {
    protected refSubmitBtn: React.RefObject<HTMLButtonElement>;
    constructor(props) {
      super(props);
      this.state = {
        rating: ``,
        comment: ``
      };
      this.refSubmitBtn = React.createRef();

      this.handleValueFormChange = this.handleValueFormChange.bind(this);
      this.handleFormResetSubmit = this.handleFormResetSubmit.bind(this);
    }

    handleValueFormChange(evt, nameInput) {
      this.setState({[nameInput]: evt.target.value}, () => {
        const {rating, comment} = this.state;
        if (rating !== `` && comment.length >= Comment.MIN && comment.length <= Comment.MAX) {
          this.refSubmitBtn.current.disabled = false;
        } else {
          this.refSubmitBtn.current.disabled = true;
        }
      });
    }

    handleFormResetSubmit() {
      this.setState({
        rating: ``,
        comment: ``
      });
    }

    render() {
      const {rating, comment} = this.state;

      return <Component
        {...this.props}
        refSubmitBtn={this.refSubmitBtn}
        rating={rating}
        comment={comment}
        onValueFormChange={this.handleValueFormChange}
        onFormResetSubmit={this.handleFormResetSubmit}
      />;
    }
  }

  return WithCommentForm;
};

export default withCommentForm;
