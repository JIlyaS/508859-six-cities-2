import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._city = [52.38333, 4.9];
    this._zoom = 12;
    this._icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    this._map = null;
    this._marker = null;
    this._mapMarkers = [];
  }

  render() {
    return <div id="map" style={{height: 100 + `%`}}></div>;
  }

  componentDidMount() {
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

    const {coordinates} = this.props;
    coordinates.forEach((coordinate) => {
      this._marker = leaflet.marker(coordinate, {icon: this._icon}).addTo(this._map);
      this._mapMarkers.push(this._marker);
    });
  }

  componentDidUpdate() {
    const {coordinates} = this.props;
    this._mapMarkers.forEach((it) => {
      this._map.removeLayer(it);
    });
    coordinates.forEach((coordinate) => {
      this._marker = leaflet.marker(coordinate, {icon: this._icon}).addTo(this._map);
      this._mapMarkers.push(this._marker);
    });
  }
}

Map.propTypes = {
  coordinates: PropTypes.array.isRequired
};

export default Map;
