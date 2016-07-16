var React = require('react');
var Clock = require('Clock');
var CountdownForm = require ('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function(){
    return {count: 0};
  },
  handleSetCountdow: function(seconds){
    this.setState({
      count: seconds
    });
  },
  render: function(){
    var {count} = this.state;
    return(
      <div>
        <h2>Countdow</h2>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdow} />
      </div>
    );
  }
});
module.exports = Countdown;
