import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import selectUser from "../actions/index";

class UserList extends Component {
  createListItems() {
    return this.props.users.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>
          {user.fist}
          {user.last}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>{this.createListItems()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
