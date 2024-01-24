// import App from "../../App";
import React from 'react';
import { useState, useRef } from "react";
import '../../login.css';

const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // function that occurs on an event, specifically here on the click of the submit button
    const handleClick = (e) => {
        e.preventDefault();
        const userData = {
            userName,
            password,
          };
      
          console.log(userData);
// Post request to the backend with the inputted values as the body of the request 
        fetch("http://localhost:3000/user/login)", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: userName,
              password: password,
            }),
          }).then(() => {
            console.log("Item sent!");
          }).catch((error) => {
            console.error("Error:", error);
          });
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
                {/* when submit data === true, render <App /> 
                else "error: please enter correct username and password*/}
            </form>
        </div>
        
    </div>
  );
  }
export default LoginPage;