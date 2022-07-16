import React from "react";
import {connect} from "react-redux";

const UserHeader = ({user}) => {
  return (
    user != null ? <div><p><b>{user.name}</b></p></div> : null
  );
}

const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)};
}
export default connect(mapStateToProps)(UserHeader)