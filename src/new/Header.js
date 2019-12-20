import { Link } from "react-router-dom";
import React from "react";

class Header extends React.Component {
  LocalStoradgdel() {
    localStorage.clear();

    window.location.reload();
  }
  render() {
    return (
      <div>
        <nav>
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <Link to="/">Main</Link>
            </li>
            <li class="nav-item">
              <Link to="/sign-in"> Sign In</Link>
            </li>
            <li class="nav-item">
              <Link to="/profile">Profile</Link>
            </li>

            <li class="nav-item">
              <button
                label="delete akk"
                class="btn btn-outline-dark"
                onClick={() => this.LocalStoradgdel()}
              >
                delete account
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
