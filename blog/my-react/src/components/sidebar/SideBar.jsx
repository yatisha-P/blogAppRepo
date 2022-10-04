import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function SideBar() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            const res  = await axios.get("http://localhost:5000/api/categories");
            setCats(res.data)
        }
        getCats();
    },[])

  return (
    <div className='sidebar'>
        <div className="sideBarItem">
            <span className='sideBarTitle'>ABOUT ME</span>
            <img src="../images/image7.webp" alt="" width="80%"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, corrupti consectetur? Libero ipsa quam nobis doloremque animi magni sed.</p>
        </div>
        <div className="sideBarItem">
            <span className='sideBarTitle'>CATEGORIES</span>
            <ul>
                {cats.map((c,i)=>{
                    return(
                   <Link to={`/?cat=${c.name}`} className="link" key={i}>
                   <li key={i}>{c.name}</li>
                   </Link>)
                })}

                {/* <li>Music</li>
                <li>Style</li>
                <li>Sports</li> */}
            </ul>
        </div>
        <div className="sideBarItem">
            <span className='sideBarTitle'>FOLLOW US</span>
            <div>
            <a href="https://www.facebook.com/"><i className="sideBarIcon fa fa-facebook-official" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/"><i className="sideBarIcon fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://twitter.com/"><i className="sideBarIcon fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="https://www.pinterest.com/"><i className="sideBarIcon fa fa-pinterest-square" aria-hidden="true"></i></a>
            </div>
          
        </div>
    </div>
  )
}
