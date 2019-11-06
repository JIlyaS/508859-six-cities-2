import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import {CityList} from './city-list';
import {DEFAULT_OFFERS} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

it(`CityList correctly renders after relaunch`, () => {
  const tree = shallow(<CityList
    city={`Amsterdam`}
    allOffers={DEFAULT_OFFERS}
    changeCityClickHandler={() => {}}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});