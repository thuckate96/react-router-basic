import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'Nav';
import Profile from 'Profile';

class Home extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Home;
