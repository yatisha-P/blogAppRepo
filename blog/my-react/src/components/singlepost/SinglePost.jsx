import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function SinglePost() {
    const location= useLocation();
    const path= location.pathname.split("/")[2];
    const [post,setPost]= useState({});
    const PF = "http://localhost:5000/images/"
    const {user}= useContext(Context);
    const [title,setTitle] =  useState("");
    const [desc,setDesc] =  useState("");
    const [updateMode,setUpdateMode] =  useState(false);


    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("http://localhost:5000/api/posts/"+ path);
            // console.log(res);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    },[path])

    
      const handleDelete = async()=>{
        try {
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{data:{username:user.username}});
            window.location.replace("/");
        } catch (error) {}
      };

      const handleUpdate = async ()=>{
        try {
            await axios.put(`http://localhost:5000/api/posts/${post._id}`,{username:user.username, title,desc});
            // window.location.reload();
            setUpdateMode(false);
        } catch (error) {}

      }
  return (
    <>
    <div className='single-post'>
        <div className='single-post-wrapper'>
            {post.photo && (
                <img src={PF+post.photo} alt=""  className='single-post-img'/ >
            )}
            {updateMode? <input type="text" value={title} className='single-post-title-input'
            autoFocus
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            /> : (
                <h1 className='single-post-title'>{title}
            {post.username=== user?.username &&(
                <div className='single-post-edit-container'>
            <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={()=>{
                setUpdateMode(true)
            }}></i>
            <i className="fa fa-trash-o" aria-hidden="true" onClick={handleDelete}></i>
            </div>
            )}
            </h1>

            ) };
            
            <div className='singlePostInfo'>
                <span className="singlePostAuthor">Author:
                 <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link>
                 </span>
                <span className="singlePostDate">{new Date (post.createdAt).toDateString()}</span>
            </div>
            {updateMode? (<textarea  className='single-post-desc-input' value={desc} 
            onChange={(e)=>{
                setDesc(e.target.value)
            }} />):
            (<p className='single-post-desc'>{desc}</p>)
            }
            {updateMode && (
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            )}
        </div>
        </div>
    </>
  )
}
