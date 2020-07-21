import React from "react";
import { Link } from "react-router";

const Main = React.createClass({
  render() {
    return (
      <div>
        <div className="header">
          <div className="options">
            <Link className="option" to="/contact">
              CONTACT
            </Link>
            <Link className="option" to="/about">
              ABOUT
            </Link>
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
            <Link className="option" to="/explore">
              EXPLORE
            </Link>
          </div>
        </div>
        <h1>
          <Link to="/">Tourism</Link>
        </h1>
        {React.cloneElement({ ...this.props }.children, { ...this.props })}
      </div>
    );
  },
});

export default Main;
