import React, { useState } from 'react'
import HOC from './Hoc'

function LikePost(props) {

  const {likeImageCounter,handleLikeImageCount}=props

  // const [likePostCounter, setPostCounter] = useState(0);

  // const handlePostCount = ()=>{
  //   setPostCounter(likePostCounter+1);
  // }

  return (
    <div>
      <button onClick={handleLikeImageCount}>Like Post {likeImageCounter}</button>
    </div>
  )
}

export default HOC(LikePost)