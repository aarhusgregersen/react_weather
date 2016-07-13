var React = require('react');

// var About = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>About us</h3>
// 		);
// 	}
// });

// Stateless functional component (Does the same as above)
// This can only be done because there's no state
var About = (props) => {
	return (
		<h3>About us</h3>
	);
}

module.exports = About;
