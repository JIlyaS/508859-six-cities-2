import React, {PureComponent, Fragment} from 'react';

import Main from '../main/main';
import DetailInfo from '../detail-info/detail-info';
import {OFFER_PATH_EXT} from '../../constants';

class App extends PureComponent {
  static _getPageScreen() {
    const idPath = Array.isArray(location.pathname.match(OFFER_PATH_EXT)) && location.pathname.match(OFFER_PATH_EXT)[1];
    switch (location.pathname) {
      case `/`:
        return <Main />;
      case `/offer/${idPath}`:
        return <DetailInfo idPath={idPath} />;
    }

    return null;
  }

  render() {
    return <Fragment>{App._getPageScreen()}</Fragment>;
  }
}

export default App;
