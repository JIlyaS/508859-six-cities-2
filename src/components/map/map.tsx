import * as React from 'react';
import * as leaflet from 'leaflet';

import {MapIcon, TileLayerMap} from '../../constants';
import {MapProps} from '../../types/types';

class Map extends React.PureComponent<MapProps, null> {
  _icon: any;
  _activeIcon: any;
  _map: any;
  _marker: any;
  _activeMarker: any;
  _mapMarkers: any[];
  _city: any;
  _zoom: any;
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
    this._city = null;
    this._zoom = null;
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

export default Map;
