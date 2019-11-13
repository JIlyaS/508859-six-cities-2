import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {DEFAULT_OFFERS} from '../../constants';

import {CityList} from './city-list';

Enzyme.configure({adapter: new Adapter()});

it(`CityList correctly renders after relaunch`, () => {
  const tree = shallow(
      <CityList
        city={`Amsterdam`}
        cities={[`Amsterdam`, `Paris`]}
        allOffers={DEFAULT_OFFERS}
        changeCityClickHandler={() => {}}
      />
  );

  expect(toJSON(tree)).toMatchSnapshot();
});
