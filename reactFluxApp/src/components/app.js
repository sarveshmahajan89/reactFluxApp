/* eslint-disable strict*/
var React = require('react');
var Header = require('./common/header');
var RouterHandler = require('react-router').RouterHandler;
$ = jQuery = require('jQuery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div className="container-fluid">
					<RouterHandler/>
				</div>
			</div>
		);
	}
});

module.exports = App;