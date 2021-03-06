const React = require('react')
const PropTypes = require('prop-types')
const {connect} = require('react-redux')

const {newSearch} = require('../../store/citations').actions

const mapStateToProps = state => {
  const currentQuery = state.searches.current
  return {
    query: currentQuery,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submit: query => dispatch(newSearch(query)),
  }
}

class ControlBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.query,
    }

    this._onChange = this._onChange.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
  }

  _onChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  _onSubmit(e) {
    e.preventDefault()
    this.props.submit(this.state.value)
  }

  render() {
    return (
      <nav id="main-nav" className="main-nav" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse">
            <form role="search" method="GET" action="/search" className="form-inline navbar-form navbar-left" onSubmit={this._onSubmit}>
              <div className="form-group">
                <label htmlFor="query" className="sr-only">Search</label>
                <input type="text" className="form-control" name="query" id="query" placeholder="Search" value={this.state.value} onChange={this._onChange} />
                <button type="submit" className="btn btn-success hidden-sm hidden-xs"><span className="icon-search"></span></button>
              </div>
            </form>
            <ul className="nav navbar-nav">
              <li><a href="#"><i className="icon-folder-add"></i></a></li>
              <li>
                <a href="#"><i className="icon-folder"></i></a>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">About</a></li>
              <li><a href="https://github.com/CAYdenberg/node-ncbi"><i className="icon-github"></i></a></li>
              <li><a href="#"><i className="icon-settings"></i></a></li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}

ControlBar.propTypes = {
  query: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ControlBar)
