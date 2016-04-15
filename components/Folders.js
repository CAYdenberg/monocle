const React = require('react');

const utils = require('../lib');
const dispatcher = utils.dispatcher;
const createTypingCallback = utils.createTypingCallback;

var store = null;
var userStore = null;

const Folders = React.createClass({

  getInitialState: function() {
    store = this.props.store;
    userStore = this.props.userStore;
    return {
      folders: [],
      newFolderName: '',
      loggedIn: userStore.loggedIn
    }
  },

  componentWillMount: function() {
    store.onUpdate(() => {
      this.setState({
        folders: store.folders,
        newFolderName: ''
      });
    });
    userStore.onUpdate(() => {
      this.setState({
        loggedIn: userStore.loggedIn
      });
    });
  },

  add: function(e) {
    e.preventDefault();
    dispatcher.dispatch({
      type: 'ADD_FOLDER',
      content: {name : this.state.newFolderName}
    });
  },

  render: function() {



    if (true) {



      return (
        <div>
          <ul className="folder-list">
            {
              this.state.folders.map(function(folder) {
                return (<Folder data={folder} key={folder.slug} />)
              })
            }
          </ul>
          <form className="form-inline" method="POST" onSubmit={this.add}>
            <div className="form-group">
              <input type="text" className="form-control new-folder-input" value={this.state.newFolderName} onChange={createTypingCallback('newFolderName', this)} />
              <button type="submit" className="btn-new-folder">+</button>
            </div>
          </form>
        </div>
      )
    } else {
      return (<div />);
    }
  }
});

const Folder = React.createClass({
  render: function() {
    return (
      <li><a href={'/library/'+this.props.data.slug+'/'}>{this.props.data.name}</a></li>
    )
  }
});

module.exports = Folders;