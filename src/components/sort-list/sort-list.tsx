import * as React from 'react';
import {connect} from 'react-redux';

import ActionCreator from '../../action-creator/action-creator';
import {SORT_LIST} from '../../constants';
import {SortListProps} from '../../types/types';

class SortList extends React.PureComponent<SortListProps, null> {

  constructor(props) {
    super(props);
    this._handleSortElemClick = this._handleSortElemClick.bind(this);
  }

  _handleSortElemClick(name, openSort, changeSort) {
    openSort();
    changeSort(name);
  }

  render() {
    const {activeSortName, onSortElemClick, isSortOpened, onSortListClick} = this.props;
    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex={0} onClick={onSortListClick}>
        {activeSortName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpened && `places__options--opened`}`}>
        {SORT_LIST.map((it) => (
          <li
            key={`sort-${it.id}`}
            onClick={() => this._handleSortElemClick(it.name, onSortListClick, onSortElemClick)}
            className={`places__option ${it.name === activeSortName && `places__option--active`}`}
            tabIndex={0}>
            {it.name}
          </li>
        ))}
      </ul>
    </form>;
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeSortName: state.userReducer.activeSortName
});

const mapDispatchToProps = (dispatch) => ({
  onSortElemClick: (sortName) => dispatch(ActionCreator.changeSortName(sortName))
});

export {SortList};

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
