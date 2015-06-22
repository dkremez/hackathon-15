'use strict';

var React = require('react/addons');
import {Gmaps, Marker} from 'react-gmaps';
//var Actions = require('actions/xxx')

require('styles/GoogleMap.sass');


const coords = {
    lat: 53.9,
    lng: 27.5667
};

var GoogleMap = React.createClass({

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

    render: function() {
        return (
            <div>
                <Gmaps
                    ref='Gmaps'
                    width={'auto'}
                    height={'100vh'}
                    lat={coords.lat}
                    lng={coords.lng}
                    zoom={13}
                    onMapCreated={this.onMapCreated}
                    onClick={this.onClick}>
                    <Marker
                        lat={coords.lat}
                        lng={coords.lng}
                        draggable={true}
                        onDragEnd={this.onDragEnd} />
                </Gmaps>
            </div>
        );
    }
});


module.exports = GoogleMap;

