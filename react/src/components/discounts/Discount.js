'use strict';

var React = require('react/addons');
var Address = require('../Address');
var apiEndpoint = require('../../constants/endpoints');

//var Actions = require('actions/xxx')

require('styles/Discount.sass');

var Discount = React.createClass({
    getInitialState: function () {
        return {showAddress: false};
    },

    toogleAddress: function () {
        this.setState({showAddress: !this.state.showAddress});
    },

    render: function () {
        var Addresses = [];
        if (this.props.discount.addresses) {
            Addresses = this.props.discount.addresses.map(function (address) {
                return (
                    <li>
                        <Address address={address} />
                    </li>
                );
            });
        }

        return (
            <div onClick={this.toogleAddress}>
                <b>{this.props.discount.title} </b>{this.props.discount.just_created ? '(Hoвый)' : ''}
                <span className="label label-success label-as-badge">{this.props.discount.discount}</span>
                <div className="row">
                    <div className="col-md-3">
                        <img src={apiEndpoint + this.props.discount.image.image.thumb.url} alt="..." height="70" width="70" />
                    </div>
                    <div className="col-md-9">
                        <p>{this.props.discount.description}</p>
                    </div>
                </div>
            {this.state.showAddress ? (
                <ul className="list-unstyled">
                    {Addresses}
                </ul>
            ) : ''}
            </div>
        );
    }
});

module.exports = Discount;

