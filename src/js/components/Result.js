var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Result = React.createClass({
	render: function(){
    var title = this.props.result.Result;
    let start = title.indexOf('>') + 1;
    title = title.substring(start);
    let end = title.indexOf('<');
    title = title.substring(0,end);
		return(
      <div className="card">
        <img className="card-img-top" src={this.props.result.Icon.URL} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{this.props.result.Text}</p>
          <a href={this.props.result.FirstURL} className="btn btn-primary">See Full Result</a>
        </div>
      </div>
		);
	}
});

module.exports = Result;
