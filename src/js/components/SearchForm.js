var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getAppState(){
	return {

	}
}

var SearchForm = React.createClass({

	render: function(){
		return(
			<div>
				<form onSubmit={this.searchText}>
          <div className="form-group">
            <label>Search:</label>
            <input type="text" className="form-control" ref="text" />
          </div>
        </form>
			</div>
		);
	},

  searchText: function(event) {
    event.preventDefault();
    var search = {
      text: this.refs.text.value.trim()
    }
    AppActions.searchText(search);
  }
});

module.exports = SearchForm;
