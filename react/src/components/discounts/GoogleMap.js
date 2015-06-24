'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var MarkersStore = require('../../stores/MarkersStore');
var Gmaps = require('react-gmaps').Gmaps;
var google = global.google;

require('styles/GoogleMap.sass');

var coords = {
  lat: 53.9,
  lng: 27.5667
};

var GoogleMap = React.createClass({
  mixins: [Reflux.connect(MarkersStore, 'markers')],
  mapCreated: false,
  oldMarkers: [],
  map: null,

  onMapCreated: function () {
    console.log('onMapCreated', this.refs.Gmaps.getMap());
    this.map = this.refs.Gmaps.getMap();
    this.map.setOptions({
      disableDefaultUI: true
    });
    this.state.markers.forEach(this.mountMarker);
    this.mapCreated = true;
  },

  clearMarker: function (marker) {
    marker.setMap(null);
  },

  mountMarker: function (marker) {
    this.oldMarkers.push(marker);
    google.maps.event.addListener(marker, 'click', this.highlight);
    marker.setMap(this.map);
  },

  highlight: function () {
    console.log('Welcome!');
  },

  onClick: function (e) {
    console.log('onClick', e);
  },

  onDragEnd: function (e) {
    console.log('onDragEnd', e);
  },

  render: function () {
    if (this.mapCreated) {
      this.oldMarkers.forEach(this.clearMarker);
      this.state.markers.forEach(this.mountMarker);
    }
    if (this.state.markers) {
      return (
        <div>
          <Gmaps
            ref='Gmaps'
            width={'auto'}
            height={'100vh'}
            lat={coords.lat}
            lng={coords.lng}
            zoom={12}
            onMapCreated={this.onMapCreated}
            onClick={this.onClick}/>
        </div>

      );
    }
    return <div></div>;

  }
});

module.exports = GoogleMap;

