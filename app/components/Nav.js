import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
class Nav extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li>
            <Link to="/" replace={true}>Main</Link>
          </li>
          <li>
            <Link to="/homepage" replace={true}>HomePage</Link>
          </li>
          <li>
            <Link to="/transaction" replace={true}>Transaction</Link>
          </li>
          <li>
            <Link to="/account" replace={true}>Account</Link>
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = Nav;
