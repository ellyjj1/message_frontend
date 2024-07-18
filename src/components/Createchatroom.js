import React, {useEffect, useState} from 'react';
import {BaseUrl} from "../consistents";
import axios from "axios";

function Createchatroom() {
    const token = localStorage.getItem('authToken');
    const login_user = localStorage.getItem('username');
    const [getuserid, setGetuserid] = useState(null)
    const [users, setUsers] = useState([]);
    const [create_status, setCreate_status] = useState("")

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'chat/users/',
            headers: {
                'Authorization': 'token ' + token,
                'Content-Type': 'application/json'
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, );//change watching users to avoid loop

    useEffect(() => {
        let data = JSON.stringify({
            "username": login_user
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'get_user_id/',
            headers: {
                'Authorization': 'token ' + token,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));//this is a dict
                setGetuserid(response.data.user_id)//this is a int
            })
            .catch((error) => {
                console.log(error);
            });
    }, [login_user,token]);

    function createChatRoom() {
        let name = document.getElementById("name").value
        let members = document.getElementById("members").selectedOptions
        members = Array.from(members).map((member) => {
            return Number.parseInt(member.value) || member.value
        })

        let data = JSON.stringify({
            "name": name,
            "created_by": getuserid,
            "members": members,

        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'chat/chatroom/',
            headers: {
                'Authorization': 'token ' + token,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setCreate_status("Create a New Chat Room Successfully!")
            })
            .catch((error) => {
                console.log(error);
                setCreate_status("Some error happen, please try again late.")

            });


    }

    return (
        <div className="container mt-5">
            <h1>Create Chat Room</h1>
            <p>Name: <input id={"name"} type={"text"}/></p>
            <p>Created By: {login_user}</p>
            <p>Members: <select id="members" multiple="multiple">
                {users.map((user) => {
                    return <option key={user.id} value={user.id}>{user.username}</option>
                })}
            </select></p>
            <button onClick={createChatRoom}>Create</button>
            <p>{create_status}</p>
        </div>
    );
}

export default Createchatroom;