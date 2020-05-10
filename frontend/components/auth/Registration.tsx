import React, { Component } from "react";
import axios from "axios";
import User from "../../models/User.model"
interface RegistrationInterface {
  email: string,
  password: string,
  registrationErrors: string,
  [key: string]: any
}
export default class Registration extends Component<{}, RegistrationInterface> {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      registrationErrors: ""
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
    const { email, password, password_confirmation } = this.state;
    let user = new User();
    user.email = email;
    user.password = password;


    axios
      .post(
        "http://localhost:3001/api/auth/signup",{   
            headers: {'Access-Control-Allow-Origin': true,  
            Authorization: "Bearer sk_test_XkBzjOKVgGX1xopzKdsPMO1h00W9ghZ3Gc"},
         
                email : email, password: password, prenom: email
           
            }
      )
      .then(response => {
   
        if (response.status == 201) {

            console.log("bien enregistre");
            
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
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

         

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}