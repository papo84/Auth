import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import parse from "html-react-parser";

class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            My Profile
          </h3>
        </header>
        <p>
          <strong>User:</strong> {currentUser.username}
        </p>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <p>
          <strong>Pylbs:</strong> {currentUser.Pylbs}
        </p>
        <div>
          <center><h1>latest Pylb</h1></center>
          <table class="table">
            <tr><center><img src="/img/hotjar_logo.png" class="company-logo"/><img src="/img/plus.png" class="plus-sign"/><img src="/img/google_analytics.png" class="company-logo"/></center></tr>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);
