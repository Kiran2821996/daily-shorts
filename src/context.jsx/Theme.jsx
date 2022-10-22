import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
const changeTheme = createContext()

function Theme({children}) {
    const[ligDar,setLigDar]=useState(true)
  return (
    <changeTheme.Provider value={{ligDar,setLigDar}}>
        {children}
    </changeTheme.Provider>
  )
}

export default Theme
export {changeTheme}