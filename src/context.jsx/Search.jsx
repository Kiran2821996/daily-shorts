import React,{useState,createContext} from 'react'

const searchedData =createContext()

function Search(props) {
    const [search,setSearch]=useState("")
    const [searchData,setSearchData]=useState([])
  return (
    <searchedData.Provider value={{search,setSearch,searchData,setSearchData}}>
     {props.children}
    </searchedData.Provider>
  )
}

export default Search
export {searchedData}