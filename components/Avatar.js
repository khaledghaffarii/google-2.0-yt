import React from 'react'

function Avatar  ({url})  {
    return <img
          loading="lazy" src={url}
     alt="profile pic"
      />;
    
}

export default Avatar
