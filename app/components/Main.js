import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'Nav';
import HomePage from 'HomePage';

class Main extends React.Component{
  render(){
    return(
      <div>
        <h1> Main </h1>
        <Nav/>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;
