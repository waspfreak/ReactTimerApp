var React = require('react');
var Navigation = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="row">
        <div className="column small-centered mediun-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
