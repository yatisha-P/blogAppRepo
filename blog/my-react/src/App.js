import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/login/Login";
import Setting from "./components/pages/setting/Setting";
import SinglePg from "./components/pages/singlepg/SinglePg";
import Write from "./components/pages/write/Write";
import Topbar from './components/topbar/Topbar';
import Register from "./components/pages/register/Register";
import{Routes,Route}from "react-router-dom";
import { Context } from "./context/Context";
import {useContext} from "react";

function App() {
  const {user} = useContext(Context);
  return (
    <>
     <Topbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={user?<Home/>:<Register/>}/>
    <Route path="/login" element={user?<Home/>:<Login/>}/>
    <Route path="/write" element={user?<Write/>:<Register/>}/>
    <Route path="/setting" element={user?<Setting/>:<Register/>}/>
    <Route path="/post/:id" element={<SinglePg/>}/>
    {/* <Route path="/single-page" element={<SinglePg/>}/> */}
  </Routes>
    </>
  );
}

export default App;


  {/* <SinglePg/> */}
  {/* <Write/> */}
  {/* <Setting/> */}
  {/* <Login/> */}
  {/* <Register/> */}