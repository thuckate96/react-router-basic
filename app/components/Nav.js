import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

class Nav extends React.Component{
  render(){
    return(
      <div>
        <div className="top-bar">
          <div className="top-bar-title">
            <strong>Relaxing</strong>
          </div>
          <div id="responsive-menu">
            <div className="top-bar-left">
              <ul className="dropdown menu" data-dropdown-menu>
                <li>
                  <a href="https://www.google.com.vn">Google</a>
                  <ul className="menu vertical">
                    <li><a href="https://www.google.com.vn">Google</a></li>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="http://foundation.zurb.com/">Foundation</a></li>
                  </ul>
                </li>

                  <li>
                    <Link to="/" replace={true}>Home</Link>
                  </li>
                  <li>
                    <Link to="/profile" replace={true}>Profile</Link>
                  </li>
                  <li>
                    <Link to="/transaction" replace={true}>Transaction</Link>
                  </li>
                  <li>
                    <Link to="/login" replace={true}>Login</Link>
                  </li>

              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li><input type="search" placeholder="Search"/></li>
                <li><button type="button" className="button">Search</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Nav;
