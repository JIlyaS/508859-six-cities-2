import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import {Main} from './main';
import {DEFAULT_OFFERS, DEFAULT_OFFER, MainMock} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../map/map`);

it(`Main correctly renders after relaunch`, () => {
  const tree = shallow(<Main
    city={MainMock.CITY}
    offers={DEFAULT_OFFERS}
    activeOfferCard={DEFAULT_OFFER}
    activeSortName={MainMock.ACTIVE_SORT_NAME}
    isOffersFetching={MainMock.IS_OFFERS_FETCHING}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
