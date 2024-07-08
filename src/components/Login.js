import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../consistents";

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [login_status, setLogin_status] = useState("")

    function usernameHandler(e) {
        setUsername(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }


    function login() {
        let data = JSON.stringify({
            "username": username,
            "password": password
        });


        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'auth/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };


        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                localStorage.setItem('authToken', response.data.token); // Store token in local storage
                setLogin_status("Login Success!")
            })
            .catch((error) => {
                console.log(error);
                setLogin_status("Username or Password is wrong!")
            });
    }




    return (
        <div>
            <h1>login page</h1>
            <p>Username <input id={"username"} type={'text'} onChange={usernameHandler}/></p>
            <p>Password <input id={"password"} type={'password'} onChange={passwordHandler}/></p>
            <p>
                <button id={"loginbtn"} onClick={login}>Login</button>
            </p>
            <p id={'login_status'}>{login_status}</p>
        </div>
    );
}

export default Login;

