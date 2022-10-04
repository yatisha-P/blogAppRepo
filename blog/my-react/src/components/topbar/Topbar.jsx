import React from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useContext } from 'react';

export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";


  const handleLogout =()=>{
    dispatch({type: "LOGOUT"});
  };
  return (
    <div className='top'>
    <div className='top-left' >
        <a href="https://www.facebook.com/" target="_blank"><i className="socialIcon fa fa-facebook-official" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/" target="_blank"><i className="socialIcon fa fa-instagram" aria-hidden="true"></i></a>
        <a href="https://twitter.com/" target="_blank"><i className="socialIcon fa fa-twitter-square" aria-hidden="true"></i></a>
        <a href="https://www.pinterest.com/" target="_blank"><i className="socialIcon fa fa-pinterest-square" aria-hidden="true"></i></a>
    </div>

    <div className='top-center' >
        <ul className='nav-bar'>
            <li className='nav-list'>
             <Link to="/" className='link'>HOME</Link>
            </li>
            <li className='nav-list'><Link to="/" className='link'>ABOUT</Link></li>
            <li className='nav-list'><Link to="/" className='link'>CONTACT</Link></li>
            <li className='nav-list'><Link to="/write" className='link'>WRITE</Link></li>
            <li className='nav-list' onClick={handleLogout}>{user && "LOGOUT"}
            </li>
        </ul>
    </div>
    <div className='top-right' >
      {
        user?(
          <Link to="/setting">
          <img className='profile-image' src={PF+user.profilePic} alt="" />
          </Link>
        ):(
          <ul className='nav-bar'>
            <li className='nav-list'> <Link to="/login" className='link'>LOGIN</Link> </li>
            <li className='nav-list'> <Link to="/register" className='link'>REGISTER</Link> </li>
        </ul>
        )
      }
      
        <i className="searchIcon fa fa-search" aria-hidden="true"></i>
    </div>
    </div>
  )
}
