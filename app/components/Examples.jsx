var React = require('react');

// var Examples = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>Examples shown here</h3>
// 		);
// 	}
// });

// Stateless functional component (Does the same as above)
// This can only be done because there's no state and the only content is return function
var Examples = (props) => {
	return (
			<h3>Examples shown here</h3>
		)
};

module.exports = Examples;
