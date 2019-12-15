import * as React from 'react';
import {Subtract} from "utility-types";

import {WithInjectedSortListProps, WithSortListState} from '../../types/types';

const withSortList = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  class WithSortList extends React.PureComponent<Subtract<P, WithInjectedSortListProps>, WithSortListState> {
    constructor(props) {
      super(props);
      this.state = {
        isSortOpened: false
      };
      this.handleSortListClick = this.handleSortListClick.bind(this);
    }

    handleSortListClick() {
      this.setState((prevState) => ({isSortOpened: !prevState.isSortOpened}));
    }

    render() {
      const {isSortOpened} = this.state;

      return <Component
        {...this.props}
        isSortOpened={isSortOpened}
        onSortListClick={this.handleSortListClick}
      />;
    }
  }

  return WithSortList;
};

export default withSortList;
