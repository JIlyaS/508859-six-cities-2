import * as React from 'react';

import Header from '../header/header';
import {getClassPageName} from '../../utils';
import {PageLayoutProps} from '../../types/types';

const PageLayout: React.FunctionComponent<PageLayoutProps> = (props) => {
  const {pageName, children} = props;
  const classPageName = getClassPageName(pageName);
  return (
    <div className={classPageName}>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
