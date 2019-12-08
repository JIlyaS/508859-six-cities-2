import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ActionCreator from '../../action-creator/action-creator';
import {SORT_LIST} from '../../constants';

class SortList extends PureComponent {
  constructor(props) {
    super(props);
    this._changeSortElemClickHandler = this._changeSortElemClickHandler.bind(this);
  }

  render() {
    const {activeSortName, changeSortElemClickHandler, isSortOpened, openSortListClickHandler} = this.props;
    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex="0" onClick={openSortListClickHandler}>
        {activeSortName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpened && `places__options--opened`}`}>
        {SORT_LIST.map((it) => (
          <li
            key={`sort-${it.id}`}
            onClick={() => this._changeSortElemClickHandler(it.name, openSortListClickHandler, changeSortElemClickHandler)}
            className={`places__option ${it.name === activeSortName && `places__option--active`}`}
            tabIndex="0">
            {it.name}
          </li>
        ))}
      </ul>
    </form>;
  }

  _changeSortElemClickHandler(name, openSort, changeSort) {
    openSort();
    changeSort(name);
  }
}

SortList.propTypes = {
  isSortOpened: PropTypes.bool.isRequired,
  activeSortName: PropTypes.string.isRequired,
  changeSortElemClickHandler: PropTypes.func.isRequired,
  openSortListClickHandler: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeSortName: state.userReducer.activeSortName
});

const mapDispatchToProps = (dispatch) => ({
  changeSortElemClickHandler: (sortName) => {
    dispatch(ActionCreator.changeSortName(sortName));
  }
});

export {SortList};

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
