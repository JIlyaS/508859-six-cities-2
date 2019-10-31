import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

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
}));

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      offers={[{
        title: ``,
        type: `private room`,
        price: 0,
        img: `room.jpg`,
        rating: 0,
        isPremium: false,
        coordinate: [],
        photos: [],
        features: [],
        insideProperties: []
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
