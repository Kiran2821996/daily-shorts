import React, { createContext, useState } from 'react'
const likesData = createContext()

function Likes(props) {
    const [likeData,setLikeData] = useState([])
  return (

    <likesData.Provider value={{likeData,setLikeData}}>
        {props.children}
    </likesData.Provider>
  )
}

export default Likes
export {likesData}