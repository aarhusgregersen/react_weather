var React = require('react');

// Stateless functional component
// This can only be done because there's no state and the only content is return function
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is my first try at a React app. This is a weather application built on React. </p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          React
        </li>

        <li>
          <a href="http://openweathermap.org">Open Weather Mapp</a> - I used
          Open Weather Map to search for data based on city name
        </li>

      </ul>
    </div>
  )
};

module.exports = About;
