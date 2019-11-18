import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';

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
      coordinates={[{coordinate: [1, 2], zoom: 16}, {coordinate: [2, 3], zoom: 16}]}
      activeCoordinate={{coordinate: [5, 6], zoom: 16}}
      activeCityCoordinate={{coordinateCity: [1, 1], zoomCity: 13}}
      city={`Amsterdam`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
