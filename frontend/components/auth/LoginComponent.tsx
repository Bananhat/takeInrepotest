import React, { Component } from "react";
import axios from "axios";
import { SCHED_NONE } from "cluster";
import User from "../../models/User.model";
import AuthService from "../services/auth.service";
import  { Redirect } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
interface LoginInterface  {
  email : any, 
  password : any,
  loginErrors: any,
  redirect : any,
  [key: string]: any;
}
export default class LoginComponent extends Component<{}, LoginInterface> {

  constructor(props) {
    super(props);
 
    this.state = {
      email: "",
      password: "",
      loginErrors: "",
      redirect : false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  

  handleSubmit(event) {

    const { email, password } = this.state;
   
    axios
      .post(
        "http://localhost:3001/api/auth/login",
        {   
            headers: {'Access-Control-Allow-Origin': true,  
            Authorization: "Bearer sk_test_XkBzjOKVgGX1xopzKdsPMO1h00W9ghZ3Gc"},
         
                email : email, password: password
           
            }
      )
      .then(response => {
        if (response.status == 200) {
     
            let user = new User()
            user._id = response.data.userId;
            user.email = response.data.email;
            user.prenom = response.data.prenom;
            user.token = response.data.token;
   
            AuthService.createSession(user)
    
            this.setState({redirect : true})
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    if(this.state.redirect)
    {
      document.location.href="/"
     
    }else{
    
    return (
      
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
    
}
}
