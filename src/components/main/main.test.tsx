import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';

import {Main} from './main';
import {DEFAULT_OFFERS, DEFAULT_OFFER, MainMock} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../map/map`);

it(`Main correctly renders after relaunch`, () => {
  const tree = Enzyme.shallow(<Main
    city={MainMock.CITY}
    offers={DEFAULT_OFFERS}
    activeOfferCard={DEFAULT_OFFER}
    activeSortName={MainMock.ACTIVE_SORT_NAME}
    isOffersFetching={MainMock.IS_OFFERS_FETCHING}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
