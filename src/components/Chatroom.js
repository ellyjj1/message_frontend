import React, {useEffect, useState} from 'react';
import {BaseUrl} from "../consistents";
import axios from "axios";

function Chatroom() {
    const [chatroom, setChatroom] = useState([]);
    const token = localStorage.getItem('authToken');


    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl+ "message/chatroom/",
            headers: {
                'Authorization': 'token ' + token,
                'Content-Type': 'application/json'
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setChatroom(response.data);
            })
            .catch((error) => {
                console.log(error);
                if (!token) {
                    alert("You need to log in first.");
                    window.location.href = '/login';
                }else
                    alert("An error occurred. Please try again.");
            });
    }, []);
    return (
        <div>
            <h1>Chat Room</h1>
            <ul>
                {chatroom.map((chatroom) => (
                    <li key={chatroom.id}>{chatroom.name}</li>
                ))}
            </ul>
            {/*<p><span id={"token"}>{token}</span></p>*/}
        </div>
    );
}

export default Chatroom;