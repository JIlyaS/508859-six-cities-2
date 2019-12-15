import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';

import {CityListMock} from '../../constants';
import {CityList} from './city-list';

Enzyme.configure({adapter: new Adapter()});

it(`CityList correctly renders after relaunch`, () => {
  const tree = Enzyme.shallow(
      <CityList
        city={CityListMock.CITY}
        cities={CityListMock.CITIES}
        onChangedCityClick={() => {}}
      />
  );

  expect(toJSON(tree)).toMatchSnapshot();
});
