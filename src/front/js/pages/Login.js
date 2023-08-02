import React, { useState, useContext } from "react";
import "../../styles/Login.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the login action from the Flux store
      await actions.login(email, password);

      // Reset the form fields after successful submission
      setEmail("");
      setPassword("");
      navigate("/userpage");
      actions.setLoggedIn()
    } catch (error) {
      console.log("Error during login", error);

      // Handle the error by displaying a message to the user
      actions.setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      {/* Display error message if it exists */}
      {store.errorMessage && <p className="error-message">{store.errorMessage}</p>}

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
