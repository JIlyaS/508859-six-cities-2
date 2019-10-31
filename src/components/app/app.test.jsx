import React from 'react';
import renderer from 'react-test-renderer';
import leaflet, {icon, map, tileLayer} from 'leaflet';
import App from './app';
import {ICON, LEAFLET_OPTION, TILE_LAYER} from '../../constants';

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


it(`We can check if the consumer called a method on the class instance`, () => {
  leaflet.icon({
    iconUrl: ICON.url,
    iconSize: ICON.size
  });
  leaflet.map(`map`, {
    center: LEAFLET_OPTION.center,
    zoom: LEAFLET_OPTION.zoom,
    zoomControl: false,
    marker: true
  });
  leaflet.tileLayer(TILE_LAYER.img, {
    attribution: TILE_LAYER.attribution
  });
  expect(icon).toHaveBeenCalledWith({
    iconUrl: ICON.url,
    iconSize: ICON.size
  });
  expect(map).toHaveBeenCalledWith(`map`, {
    center: LEAFLET_OPTION.center,
    zoom: LEAFLET_OPTION.zoom,
    zoomControl: false,
    marker: true
  });
  expect(tileLayer).toHaveBeenCalledWith(TILE_LAYER.img, {
    attribution: TILE_LAYER.attribution
  });
});

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
