var React = require('react');
var {Link} = require('react-router');

// Stateless functional component
// This can only be done because there's no state and the only content is return function
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few sample locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Aalborg">Aalborg</Link>
        </li>

        <li>
          <Link to="/?location=Viborg">Viborg</Link>
        </li>

        <li>
          <Link to="/?location=Aarhus">Aarhus</Link>
        </li>
      </ol>
    </div>
    )
};

module.exports = Examples;
