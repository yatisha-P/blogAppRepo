import React from 'react'
import { Link } from 'react-router-dom';

export default function Poste({post}) {
  const PF = "http://localhost:5000/images/"
  return (
    <div className='poste'>
      {post.photo &&(<img className='postImage' src={PF+post.photo} alt="" />)}
        
        <div className='postInfo'>
            <div className='postCats'>{post.categories.map((c,i)=>{

                <span>{c.name}</span>
            })}
                {/* <span>Life</span> */}
            </div>

            <Link to={`/post/${post._id}`} className ="link">
            <span className="postTitle">{post.title}</span>
            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDesc'>{post.desc}</p>
    </div>
  )
}
