import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {MapIcon, TileLayerMap} from '../../constants';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._icon = leaflet.icon({
      iconUrl: MapIcon.URL,
      iconSize: MapIcon.SIZE
    });
    this._activeIcon = leaflet.icon({
      iconUrl: MapIcon.ACTIVE_URL,
      iconSize: MapIcon.SIZE
    });
    this._map = null;
    this._marker = null;
    this._activeMarker = null;
    this._mapMarkers = [];
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
    this._city = activeCityCoordinate.cityCoordinates;
    this._zoom = activeCityCoordinate.zoomCity;
    this._map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(this._city, this._zoom);

    leaflet
      .tileLayer(TileLayerMap.IMG, {attribution: TileLayerMap.ATTRIBUTIONS})
      .addTo(this._map);
  }

  _addMarkersForMap(coordinates, activeCoordinate) {
    coordinates.forEach(({offerCoordinates}) => {
      this._marker = leaflet
        .marker(offerCoordinates, {icon: this._icon})
        .addTo(this._map);
      this._mapMarkers.push(this._marker);
    });
    if (activeCoordinate) {
      this._activeMarker = leaflet
        .marker(activeCoordinate.offerCoordinates, {icon: this._activeIcon})
        .addTo(this._map);
      this._mapMarkers.push(this._activeMarker);
    }
  }

  render() {
    return <div id="map" style={{height: 100 + `%`}}></div>;
  }
}

Map.propTypes = {
  coordinates: PropTypes.array.isRequired,
  activeCoordinate: PropTypes.object,
  city: PropTypes.string,
  activeCityCoordinate: PropTypes.shape({
    cityCoordinates: PropTypes.array.isRequired,
    zoomCity: PropTypes.number.isRequired
  }).isRequired
};

export default Map;
