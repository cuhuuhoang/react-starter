import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchStreams} from "../../actions";

class StreamList extends React.Component {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="card-footer" style={{textAlign: 'right'}}>
          <Link to={`/streams/edit/${stream.id}`} className="btn btn-primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="btn btn-danger">Delete</Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (

        <div className="card mb-3" key={stream.id}>
          <div className="row g-0">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/streams/${stream.id}`} className="header">
                  {stream.title}
                </Link>
              </h5>
              <p className="card-text">{stream.description}</p>
            </div>
            {this.renderAdmin(stream)}
          </div>
        </div>
      )
    })
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/streams/new" className="btn btn-primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)