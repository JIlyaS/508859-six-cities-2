import React, {PureComponent} from 'react';

import Header from '../../components/header/header';
import {getClassPageName} from '../../utils';

const withPageLayout = (Component, pageName) => {
  class WithPageLayout extends PureComponent {

    render() {
      const classPageName = getClassPageName(pageName);
      return <div className={classPageName}>
        <Header />
        <Component {...this.props} />
      </div>;
    }

  }

  WithPageLayout.propTypes = {};

  return WithPageLayout;
};

export default withPageLayout;
