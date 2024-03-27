import React from 'react'
import { useState } from 'react'
import axios from "axios";
//import {NavLink} from "react-router-dom";
import './registeration.css'
export default function SignupForm(){
  const [ user, setUser] = useState({
      companyName: "",
      clientID:"",
      clientSecret:"",
      ownerName: "",
      ownerEmail: "",
      rollno: ""
  });

  const handleChange = e => {
      const { name, value } = e.target;
      setUser({
          ...user,
          [name]:value
      })
  }

  const register = () => {
      const { companyName, clientID, clientSecret, ownerName, ownerEmail, rollno } = user
      if( companyName && clientID && clientSecret && ownerName && ownerEmail && rollno){
          axios.post("http://20.244.56.144/test/register", user)
          .then( res => console.log(res));
      } else {
          alert("Product not added");
      }
  }



  return (
    <div class="container-fluid">
    <form id="input_form" method="POST">
        <h4 class="text-center">Register</h4>
        <div class="form-group">
            <label for="companyname">CompanyName</label>
            <input name="name" type="text" onChange={handleChange} value={user.companyName} class="form-control" id="companyname"/>
        </div>
        <div class="form-group">
            <label for="clientid">clientID</label>
            <input name="clientid" type="text" onChange={handleChange} value={user.clientID} class="form-control" id="clientid"/>
        </div>
        <div class="form-group">
            <label for="clientSecret">clientSecret</label>
            <input name="clientSecret" type="text" onChange={handleChange} value={user.clientSecret} class="form-control" id="companysecret"/>
        </div>
        <div class="form-group">
            <label for="ownername">ownerName</label>
            <input name="ownername" type="text" onChange={handleChange} value={user.ownerName} class="form-control" id="ownername"/>
        </div>
        <div class="form-group">
            <label for="owneremail">ownerEmail</label>
            <input name="owneremail" type="text" onChange={handleChange} value={user.ownerEmail} class="form-control" id="owneremail"/>
        </div>
        <div class="form-group">
            <label for="rollno">rollNo</label>
            <input name="rollno" type="text" onChange={handleChange} value={user.rollno} class="form-control" id="rollno"/>
        </div>
        <button type="submit" class="btn submit-btn">Sign up</button>
    </form>
    <p id="message"></p>
</div>
  )
}