import React from 'react'

function Avatar  ({url ,className})  {
    return <img
          loading="lazy" src={url}
         className={`rounded-full h-10 cursor-pointer animation transition duration-150 transform hover:scale-110"
         alt="profile pic ${className}`}
      />;
    
}

export default Avatar
