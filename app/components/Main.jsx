var React = require('react');
var Nav = require('Nav');


// var Main = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>Main Component</h2>
//         <Nav/>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <Nav />
          <h1>Main component</h1>
          {props.children}
        </div>
      </div>

    </div>
  )
};

module.exports = Main;
