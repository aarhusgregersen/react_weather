var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      // Clear location value
      this.refs.location.value = '';
      // On 'this' search = this refering to the form in which this function is is executed
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="location"/>
            <button>Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
