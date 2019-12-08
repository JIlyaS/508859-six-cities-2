import React, {PureComponent} from 'react';
import {Comment} from '../../constants';

const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
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

  WithCommentForm.propTypes = {};

  return WithCommentForm;
};

export default withCommentForm;
