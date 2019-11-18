import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    this._activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });
    this._map = null;
    this._marker = null;
    this._activeMarker = null;
    this._mapMarkers = [];
  }

  render() {
    return <div id="map" style={{height: 100 + `%`}}></div>;
  }

  componentDidMount() {
    const {activeCityCoordinate, coordinates, activeCoordinate} = this.props;
    this._addMapLayer(activeCityCoordinate);
    this._addMarkersForMap(coordinates, activeCoordinate);
  }

  componentDidUpdate(prevProps) {
    const {activeCityCoordinate, coordinates, activeCoordinate} = this.props;
    this._mapMarkers.forEach((it) => {
      this._map.removeLayer(it);
    });
    if (this.props.city !== prevProps.city) {
      this._map.remove();
      this._addMapLayer(activeCityCoordinate);
    }
    this._addMarkersForMap(coordinates, activeCoordinate);
  }

  _addMapLayer(activeCityCoordinate) {
    this._city = activeCityCoordinate.coordinateCity;
    this._zoom = activeCityCoordinate.zoomCity;
    this._map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(this._city, this._zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(this._map);
  }

  _addMarkersForMap(coordinates, activeCoordinate) {
    coordinates.forEach(({coordinate}) => {
      this._marker = leaflet
        .marker(coordinate, {icon: this._icon})
        .addTo(this._map);
      this._mapMarkers.push(this._marker);
    });
    if (activeCoordinate) {
      this._activeMarker = leaflet
        .marker(activeCoordinate.coordinate, {icon: this._activeIcon})
        .addTo(this._map);
      this._mapMarkers.push(this._activeMarker);
    }
  }
}

Map.propTypes = {
  coordinates: PropTypes.array.isRequired,
  activeCoordinate: PropTypes.object,
  city: PropTypes.string.isRequired,
  activeCityCoordinate: PropTypes.shape({
    coordinateCity: PropTypes.array.isRequired,
    zoomCity: PropTypes.number.isRequired
  }).isRequired
};

export default Map;
