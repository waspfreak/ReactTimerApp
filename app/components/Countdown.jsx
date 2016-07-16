var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Countdow</h2>
        <Clock totalSeconds={129} />
      </div>
    );
  }
});
module.exports = Countdown;
