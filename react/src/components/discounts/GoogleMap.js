'use strict';

var React = require('react/addons');
var MakersBuilder = require('../../services/MarkersBuilder');
import {Gmaps, Marker} from 'react-gmaps';
//var Actions = require('actions/xxx')

require('styles/GoogleMap.sass');

const coords = {
    lat: 53.9,
    lng: 27.5667
};

var GoogleMap = React.createClass({
    map: null,
    getInitialState: function(){
        return {markers: MakersBuilder.build(this.props.discounts)};
    },
    componentDidMount: function () {
        if(this.map !== null && this.map.clearMarkers){
            this.map.clearMarkers();
        }
    },
    onMapCreated: function () {
        console.log('onMapCreated', this.refs.Gmaps.getMap());
        this.refs.Gmaps.getMap().setOptions({
            disableDefaultUI: true
        });
    },

    onClick: function (e) {
        console.log('onClick', e);
    },

    onDragEnd: function (e) {
        console.log('onDragEnd', e);
    },

    newGmap: function(Markers){
        return new React.createElement(Gmaps, {
            ref: "Gmaps",
            width: "auto",
            height: "100vh",
            lat: coords.lat,
            lng: coords.lng,
            zoom: 12,
            onMapCreated: this.onMapCreated,
            onClick: this.onClick,
            discounts: this.props.discounts }, Markers);
    },
    render: function() {
        var Markers = [];
        MakersBuilder.build(this.props.discounts).forEach(function(marker){
            Markers.push(
                <Marker key={marker.id} lat={marker.lat} lng={marker.lng} draggable={true} icon={marker.icon}  />
            );
        });
        var Map = this.props.discounts ? this.newGmap(Markers) : '';
        return (
            <div>
                {Map}
            </div>
        );
    }
});


module.exports = GoogleMap;

