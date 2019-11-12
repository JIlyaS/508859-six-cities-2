import React, {PureComponent} from 'react';

const withSortList = (Component) => {
  class WithSortList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isSortOpened: false
      };
      this._openSortListClickHandler = this._openSortListClickHandler.bind(this);
    }

    render() {
      const {isSortOpened} = this.state;

      return <Component
        {...this.props}
        isSortOpened={isSortOpened}
        openSortListClickHandler={this._openSortListClickHandler}
      />;
    }

    _openSortListClickHandler() {
      this.setState((prevState) => ({isSortOpened: !prevState.isSortOpened}));
    }
  }

  WithSortList.propTypes = {};

  return WithSortList;
};

export default withSortList;
