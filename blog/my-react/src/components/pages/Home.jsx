import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../header/Header'
import Post from '../posts/Post'
import SideBar from '../sidebar/SideBar'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts]= useState([]);
  const {search} =  useLocation();
 

useEffect(()=>{
  const fetchPosts= async()=>{
    const res = await axios.get("http://localhost:5000/api/posts"+search);
     // console.log(res);
     setPosts(res.data);
    }
    fetchPosts();
},[search])



  return (
    <>
        <Header/>
       <div className='home'>
        <Post posts = {posts} />
        <SideBar/>
       </div>
    </>
  )
}
