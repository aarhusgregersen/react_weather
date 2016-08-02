var React = require('react');

// Stateless functional component
// This can only be done because there's no state and the only content is return function
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to the about page</p>
    </div>
  )
};

module.exports = About;
