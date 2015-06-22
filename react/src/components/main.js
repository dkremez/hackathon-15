'use strict';

var ItechdiscountApp = require('./ItechdiscountApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ItechdiscountApp}>
    <Route name="/" handler={ItechdiscountApp}>
      <Route name="/discounts" handler={ItechdiscountApp}/>
      <Route name="/address/:id?venue=:venue_id" handler={ItechdiscountApp}/>
    </Route>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
