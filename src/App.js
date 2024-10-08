
//import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import Chatroom from "./components/Chatroom";
import Numbersumup from "./components/Numbersumup";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Createchatroom from "./components/Createchatroom";


function App() {
  return (
    <div className="App">
        <TopBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chatroom" element={<Chatroom/>}/>
            <Route path="/sumupnum" element={<Numbersumup/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/createChatroom" element={<Createchatroom/>}/>

        </Routes>
        {/*<Chatroom/>*/}
      {/*<button classRoom={"btn btn-primary"}>*/}
      {/*  Submit</button>*/}
    </div>
  );
}

export default App;
