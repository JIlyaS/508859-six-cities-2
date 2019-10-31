import React from 'react';
import renderer from 'react-test-renderer';
import leaflet, {icon, map, tileLayer} from 'leaflet';
import Main from './main';

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
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });
  leaflet.map(`map`, {
    center: [52.38333, 4.9],
    zoom: 12,
    zoomControl: false,
    marker: true
  });
  leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  });
  expect(icon).toHaveBeenCalledWith({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });
  expect(map).toHaveBeenCalledWith(`map`, {
    center: [52.38333, 4.9],
    zoom: 12,
    zoomControl: false,
    marker: true
  });
  expect(tileLayer).toHaveBeenCalledWith(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  });
});

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
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
