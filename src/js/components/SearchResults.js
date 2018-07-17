var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Result = require('./Result.js');

var SearchResults = React.createClass({
	render: function(){
		if (this.props.searchText != '') {
			var results = <h3>Results for {this.props.searchText}</h3>
		} else {
			var results = '';
		}
		return(
			<div>
				{results}
				<div className="card-deck">
				{
					this.props.results.slice(0,3).map(function(result,i) {
						return (
							<Result result={result} key={i} />
						)
					})
				}
				</div>
			</div>
		);
	}
});

module.exports = SearchResults;
