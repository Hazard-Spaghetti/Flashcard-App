import App from "../../App.jsx";
import React from 'react';
import { useState, useRef } from "react";
import '../../login.css';

const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    // function that occurs on an event, specifically here on the click of the submit button
    const handleClick = async (e) => {
      e.preventDefault();
      const userData = {
          userName,
          password,
      };
  
      try {
          const response = await fetch("http://localhost:3000/user/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  username: userName,
                  password: password,
              }),
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const userInfo = await response.json(); //took await out here
          console.log("User Info: _______________________");
          console.log(userInfo)
          if (userInfo.isLoggedIn) {
              setLoggedIn(true);
              console.log("Operation successful:", userInfo.message);
          } else {
              console.error("Operation failed:", userInfo.message);
          }
      } catch (error) {
          console.error("Error:", error);
      }
  };
  return (
    <div className='container'>
        <h1 className="welcome">Welcome to Cooler Cards</h1>
        <div className="loginpage">
            <form onSubmit={handleClick}>
                <label for="username">Username:</label><br/>
                <input type="text" id="username" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} /><br/>
                
                <label for="password">Password:</label><br/>
                <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>

                <input className="loginbutton" type="submit" /> 
            </form>
            {loggedIn ? <App /> : null}
        </div>
    </div>
  );
  }
export default LoginPage;