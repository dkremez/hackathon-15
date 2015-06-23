'use strict';

var React = require('react/addons');
var MakersBuilder = require('../../services/MarkersBuilder');
import {Gmaps, Marker} from 'react-gmaps';
var google = window.google;
//var Actions = require('actions/xxx')

require('styles/GoogleMap.sass');

const coords = {
    lat: 53.9,
    lng: 27.5667
};

var GoogleMap = React.createClass({
        markers: [],
        mapCreated: false,

        onMapCreated: function () {
            console.log('onMapCreated', this.refs.Gmaps.getMap());
            this.refs.Gmaps.getMap().setOptions({
                disableDefaultUI: true
            });
            MakersBuilder.build(this.props.discounts).forEach(this.mountMarker);
            this.mapCreated = true;
        },

        clearMarker: function (marker) {
            marker.setMap(null);

        },

        mountMarker: function (marker) {
            var map = this.refs.Gmaps.getMap();
            var myLatlng = new google.maps.LatLng(marker.lat, marker.lng);
            var pinIcon = new google.maps.MarkerImage(
                marker.icon.url,
                null, /* size is determined at runtime */
                null, /* origin is 0,0 */
                null, /* anchor is bottom center of the scaled image */
                new google.maps.Size(50, 60)
            );
            var googleMarker = new google.maps.Marker({
                position: myLatlng,
                title: marker.title,
                draggable: false,
                icon: pinIcon
            });

            this.markers.push(googleMarker);

            googleMarker.setMap(map);
        },

        onClick: function (e) {
            console.log('onClick', e);
        },

        onDragEnd: function (e) {
            console.log('onDragEnd', e);
        },

        render: function () {
            this.markers.forEach(this.clearMarker);
            if(this.mapCreated) {
                this.markers = [];
                MakersBuilder.build(this.props.discounts).forEach(this.mountMarker);
            }
            if (this.props.discounts){
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
                            onClick={this.onClick}>
                        </Gmaps>
                    </div>

                );
            }
            return <div></div>;

        }
    })
    ;


module.exports = GoogleMap;

