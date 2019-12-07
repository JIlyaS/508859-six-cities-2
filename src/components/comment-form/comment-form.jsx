import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Operation from '../../operation/operation';
import {RATINGS} from '../../constants';
import ActionCreator from '../../action-creator/action-creator';

class CommentForm extends PureComponent {

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this._commentFormSubmitHandler = this._commentFormSubmitHandler.bind(this);
  }

  render() {
    const {comment, addValueFormChangeHandler, formSubmit: {blockedInput, error}, refSubmitBtn} = this.props;
    const errorValueBtn = error ? `red` : ``;
    const errorValueTextArea = error ? `1px solid red` : ``;
    return <form className="reviews__form form" action="#" method="post" ref={this.formRef} onSubmit={this._commentFormSubmitHandler}>
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          RATINGS.map(({stars, title}) => (
            <Fragment key={`${stars}-stars`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={stars}
                id={`${stars}-stars`}
                type="radio"
                onChange={(evt) => addValueFormChangeHandler(evt, `rating`)}
                disabled={blockedInput}
              />
              <label
                htmlFor={`${stars}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg
                  className="form__star-image"
                  width="37"
                  height="33"
                >
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(evt) => addValueFormChangeHandler(evt, `comment`)}
        style={{border: errorValueTextArea}}
        disabled={blockedInput}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{` `}
          <span className="reviews__star">rating</span> and
          describe your stay with at least{` `}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          ref={refSubmitBtn}
          style={{backgroundColor: errorValueBtn}}
          disabled
        >
          Submit
        </button>
      </div>
    </form>;
  }

  componentDidUpdate() {
    const {resetFormSubmitHandler, getDefaultForm, formSubmit: {submit}} = this.props;
    if (submit) {
      this.formRef.current.reset();
      resetFormSubmitHandler();
      getDefaultForm();
    }
  }

  _commentFormSubmitHandler(evt) {
    evt.preventDefault();
    const {formSubmit: {blockedSubmit}, refSubmitBtn} = this.props;
    if (blockedSubmit) {
      refSubmitBtn.current.disabled = true;
    }
    const {rating, comment, addReview, idHotel} = this.props;
    addReview(idHotel, rating, comment);
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  formSubmit: state.userReducer.formSubmit,
});

const mapDispatchToProps = (dispatch) => ({
  addReview: (idHotel, rating, comment) => dispatch(Operation.addReview(idHotel, rating, comment)),
  getDefaultForm: () => dispatch(ActionCreator.submitFormDefault())
});

CommentForm.propTypes = {
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  addReview: PropTypes.func,
  addValueFormChangeHandler: PropTypes.func.isRequired,
  idHotel: PropTypes.string.isRequired,
  refSubmitBtn: PropTypes.any,
  resetFormSubmitHandler: PropTypes.func.isRequired,
  getDefaultForm: PropTypes.func.isRequired,
  formSubmit: PropTypes.shape({
    blockedInput: PropTypes.bool.isRequired,
    blockedSubmit: PropTypes.bool.isRequired,
    submit: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  }).isRequired,
};

export {CommentForm};

const ConnectedCommentForm = connect(mapStateToProps, mapDispatchToProps)(CommentForm);
const RefCommentForm = React.forwardRef((props, ref) => <ConnectedCommentForm {...props} forwardedRef={ref} />);

RefCommentForm.displayName = `CommentForm`;

export default RefCommentForm;
