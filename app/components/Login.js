import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from 'LoginForm';
import {connect} from "react-redux";

class Login extends React.Component{
  handleLogin(e){
     e.preventDefault();
     var userName = this.refs.username.value;
     var password = this.refs.password.value;
     alert("password: "+password+"Username:  "+ userName);
  }
  render(){
    var {username} = this.props;
    console.log(username);
    return(
      <div>

        <div className="login_div">
          <h1 className="h1login">Login</h1>
           <form onSubmit={this.handleLogin.bind(this)}>
             <input type="text" ref="username" placeholder="enter username" />
             <input type="password" ref="password" placeholder="enter password" />
             <input type="submit" value="Login" className="button expanded" />
           </form>
        </div>
      </div>
    );
  }
}

module.exports = connect(function(state){
  return {username: state.username}
})(Login);
