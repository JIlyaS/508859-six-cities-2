import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/reducer';
import {SORT_LIST} from '../../constants';


class SortList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSortOpened: false
    };

    this._openSortListClickHandler = this._openSortListClickHandler.bind(this);
  }

  render() {
    const {isSortOpened} = this.state;
    const {activeSortName, changeSortElemClickHandler} = this.props;
    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex="0" onClick={this._openSortListClickHandler}>
        {activeSortName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpened && `places__options--opened`}`}>
        {SORT_LIST.map((it) => (
          <li
            key={`sort-${it.id}`}
            onClick={() => {
              this._openSortListClickHandler();
              changeSortElemClickHandler(it.name);
            }}
            className={`places__option ${it.name === activeSortName && `places__option--active`}`}
            tabIndex="0">
            {it.name}
          </li>
        ))}
      </ul>
    </form>;
  }

  _openSortListClickHandler() {
    this.setState((prevState) => ({isSortOpened: !prevState.isSortOpened}));
  }
}

SortList.propTypes = {
  activeSortName: PropTypes.string.isRequired,
  changeSortElemClickHandler: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeSortName: state.activeSortName
});

const mapDispatchToProps = (dispatch) => ({
  changeSortElemClickHandler: (sortName) => {
    dispatch(ActionCreator.changeSortName(sortName));
  }
});

export {SortList};

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
