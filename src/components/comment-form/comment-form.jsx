import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Operation from '../../operation/operation';
import {RATINGS} from '../../constants';

class CommentForm extends PureComponent {

  constructor(props) {
    super(props);

    this._commentFormSubmitHandler = this._commentFormSubmitHandler.bind(this);
  }

  render() {
    const {comment, addValueFormChangeHandler} = this.props;
    return <form className="reviews__form form" action="#" method="post" onSubmit={this._commentFormSubmitHandler}>
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
          disabled=""
        >
          Submit
        </button>
      </div>
    </form>;
  }

  _commentFormSubmitHandler(evt) {
    evt.preventDefault();
    const {rating, comment, addReview, idHotel} = this.props;
    if (rating !== 0 && comment.length >= 50 && comment.length <= 300) {
      addReview(idHotel, rating, comment);
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  addReview: (idHotel, rating, comment) => {
    dispatch(Operation.addReview(idHotel, rating, comment));
  }
});

CommentForm.propTypes = {
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  addReview: PropTypes.func,
  addValueFormChangeHandler: PropTypes.func.isRequired,
  idHotel: PropTypes.string.isRequired
};

export {CommentForm};

export default connect(null, mapDispatchToProps)(CommentForm);