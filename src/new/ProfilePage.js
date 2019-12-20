import React from "react";
import { Redirect } from "react-router";

class ProfilePage extends React.Component {
  Login() {
    return localStorage.getItem("Login");
  }
  Password() {
    return localStorage.getItem("Password");
  }

  render() {
    return (
      <div class="col-6 col-sm-5 col-md-5">
        <div class="card">
          {this.Login() === null ? <Redirect to="/" /> : null}

          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h3>Данные пользователя</h3>
            </li>
            <li class="list-group-item">
              <b>Login: </b> {this.Login()}
            </li>
            <li class="list-group-item">
              {" "}
              <b>Password:</b> {this.Password()}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
