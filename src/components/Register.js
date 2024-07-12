import React, { useState } from 'react';
import axios from 'axios';
import {BaseUrl} from "../consistents";


function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [register_status, setRegister_status] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form submission behavior

        if (password !== confirmPassword) {
            setRegister_status('Passwords do not match!');
            return;
        }

        const data = JSON.stringify({
            username: username,
            password: password
        });

        const config = {
            method: 'post',
            url: BaseUrl + 'register/',
            headers: {
              'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
          .then((response) => {
              console.log(JSON.stringify(response.data));
              setRegister_status("User registered successfully!");
          })
          .catch((error) => {
              console.log(error);
              if (error.response && error.response.data && error.response.data.error) {
                  setRegister_status(error.response.data.error);
              } else {
                  setRegister_status('An error occurred');
              }
          });
    };

    return (
        <div>
            <h1>Register</h1>
            <p></p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} required/>
                </div>
                <p></p>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} required/>
                </div>
                <p></p>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
                </div>
                <p></p>
                <button type="submit">Register</button>
            </form>
            {register_status && <p>{register_status}</p>}
        </div>
    );
}

export default Register;
