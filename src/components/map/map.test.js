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
      coordinates={[[1, 2]]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
