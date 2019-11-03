import React, {Component} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends Component {
  constructor(props) {
    super(props);
    this._city = [52.38333, 4.9];
    this._zoom = 12;
    this._icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    this._map = null;
  }

  render() {
    return <div id="map" style={{height: 100 + `%`}}></div>;
  }

  componentDidMount() {
    const {coordinates} = this.props;
    this._map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(this._city, this._zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);

    coordinates.forEach((coordinate) => {
      leaflet.marker(coordinate, {icon: this._icon}).addTo(this._map);
    });
  }
}

Map.propTypes = {
  coordinates: PropTypes.array.isRequired
};

export default Map;
