import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';
import {MapMock} from '../../constants';

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    setView: jest.fn()
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
  marker: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
  removeLayer: jest.fn()
}));

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Map
      coordinates={MapMock.COORDINATES}
      activeCoordinate={MapMock.ACTIVE_COORDINATE}
      activeCityCoordinate={MapMock.ACTIVE_CITY_COORDINATE}
      city={MapMock.CITY}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
