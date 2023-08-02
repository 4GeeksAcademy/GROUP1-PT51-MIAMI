import React, { useState,useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import { useNavigate } from "react-router-dom";


export default function CreateAccount() {

  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [phone_number, setPhonenumber] = useState("");
  const navigate = useNavigate();
  console.log("Password", password, "Email:", email);

  const registerUser = async () => {
     const response = await fetch(
       `${process.env.BACKEND_URL}/register`,
      {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
      },
         body: JSON.stringify({
           email: email,
           password: password,
           first_name: first_name,
           phone_number: phone_number

         }),
      }
     );
     const data = await response.json();
     if (response.ok) {
       navigate('/login');
     } else {
       console.log("Error:", data);
     }
   };





  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value);
  };


  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
     event.preventDefault();
     registerUser()

//   const signUpUser = (event) => {
//     fetch(`${process.env.BACKEND_URL}/register`)
//   }
    // Here you can perform the login logic, such as making an API request

    // Reset the form fields after submission
    setPhonenumber("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Phone number"
        value={phone_number}
        onChange={handlePhonenumberChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
       <input
        type="text"
        placeholder="First name"
        value={first_name}
        onChange={handleFirstnameChange}
      />


      <button type="submit">Sign Up</button>
    </form>
  </div>
);


}
