import * as React from 'react';
import {connect} from 'react-redux';

import Operation from '../../operation/operation';
import {RATINGS} from '../../constants';
import ActionCreator from '../../action-creator/action-creator';
import {CommentFormProps} from '../../types/types';

class CommentForm extends React.PureComponent<CommentFormProps, null> {

  private formRef = React.createRef<HTMLFormElement>();

  constructor(props) {
    super(props);
    this._handleСommentFormSubmit = this._handleСommentFormSubmit.bind(this);
  }

  componentDidUpdate() {
    const {onFormResetSubmit, onGetDefaultForm, formSubmit: {submit}} = this.props;
    if (submit) {
      this.formRef.current.reset();
      onFormResetSubmit();
      onGetDefaultForm();
    }
  }

  _handleСommentFormSubmit(evt) {
    evt.preventDefault();
    const {
      rating,
      comment,
      onAddReview,
      idHotel,
      formSubmit: {blockedSubmit},
      refSubmitBtn} = this.props;

    if (blockedSubmit) {
      refSubmitBtn.current.disabled = true;
    }
    onAddReview(idHotel, rating, comment);
  }

  render() {
    const {comment, onValueFormChange, formSubmit: {blockedInput, error}, refSubmitBtn} = this.props;
    const errorValueBtn = error ? `red` : ``;
    const errorValueTextArea = error ? `1px solid red` : ``;
    return <form className="reviews__form form" action="#" method="post" ref={this.formRef} onSubmit={this._handleСommentFormSubmit}>
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          RATINGS.map(({stars, title}) => (
            <React.Fragment key={`${stars}-stars`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={stars}
                id={`${stars}-stars`}
                type="radio"
                onChange={(evt) => onValueFormChange(evt, `rating`)}
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
            </React.Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(evt) => onValueFormChange(evt, `comment`)}
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
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  formSubmit: state.userReducer.formSubmit,
});

const mapDispatchToProps = (dispatch) => ({
  onAddReview: (idHotel, rating, comment) => dispatch(Operation.addReview(idHotel, rating, comment)),
  onGetDefaultForm: () => dispatch(ActionCreator.submitFormDefault())
});

export {CommentForm};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
