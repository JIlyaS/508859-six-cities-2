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

      this._addValueFormChangeHandler = this._addValueFormChangeHandler.bind(this);
      this._resetFormSubmitHandler = this._resetFormSubmitHandler.bind(this);
    }

    render() {
      const {rating, comment} = this.state;

      return <Component
        {...this.props}
        refSubmitBtn={this.refSubmitBtn}
        rating={rating}
        comment={comment}
        addValueFormChangeHandler={this._addValueFormChangeHandler}
        resetFormSubmitHandler={this._resetFormSubmitHandler}
      />;
    }

    _addValueFormChangeHandler(evt, nameInput) {
      this.setState({[nameInput]: evt.target.value}, () => {
        const {rating, comment} = this.state;
        if (rating !== `` && comment.length >= Comment.MIN && comment.length <= Comment.MAX) {
          this.refSubmitBtn.current.disabled = false;
        } else {
          this.refSubmitBtn.current.disabled = true;
        }
      });
    }

    _resetFormSubmitHandler() {
      this.setState({
        rating: ``,
        comment: ``
      });
    }
  }

  WithCommentForm.propTypes = {};

  return WithCommentForm;
};

export default withCommentForm;
