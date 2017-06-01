import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class LoginForm extends React.Component{
  handleLogin(e){
     e.preventDefault();
     var {dispatch} = this.props;
     var username = this.refs.username.value;
     alert(dispatch+ ":  "+ username);
  }
  render(){
    return(
      <div>
        <div>
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

module.exports = LoginForm;
