import React from 'react'
import Poste from '../poste/Poste'

export default function Post({posts}) {
  return (
    <div className='post'>
      {posts.map((p,i)=>{
        return <Poste post={p} key={i}/>
      }) }
   
    </div>
  )
}
