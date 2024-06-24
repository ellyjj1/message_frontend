import React, {useEffect} from 'react';
import {BaseUrl} from "../consistents";
import axios from "axios";

function Chatroom(props) {
    const [chatroom, setChatroom] = React.useState([]);
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl+ "message/chatroom/",
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setChatroom(response.data);
            })
            .catch((error) => {
                console.log(error);
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
        </div>
    );
}

export default Chatroom;