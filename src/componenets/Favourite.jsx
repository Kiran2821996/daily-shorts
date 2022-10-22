import React,{useContext,useEffect} from 'react'
import {likesData} from "../context.jsx/Likes"
import{changeTheme} from "../context.jsx/Theme"
import {searchedData} from "../context.jsx/Search"
import "../style.css/Favourite.css"

function Favourite() {
  const {search,setSearch,searchData,setSearchData} = useContext(searchedData)
  const {likeData,setLikeData} = useContext(likesData)
  const {ligDar}=useContext(changeTheme)

  useEffect(() => {
    const searchData = likeData.filter((item) => {
      if (item.title) {
        return item.title.includes(search.toLowerCase());
      }
    });
    console.log(searchData);
    setSearchData([...searchData]);
  }, [search,likeData,setSearchData]);
  return (
   <div  className={ligDar?"white":"dark"}>
    {searchData.length===0 && <p className='bk'>No BookMarks</p>}
    {searchData.map((item,idx) => {
    return (
      <div className={ligDar?"favtCard":"favtCardDark"}>
         
        <h1>{item.title}</h1>
        <img src={item.urlToImage} alt="Unavailable" width={"100px"} />
        <p>{item.description}</p>
       
       <a href={item.url} target="blank"><span>Read More</span></a>  
       <button onClick={()=>{likeData.splice(idx,1);setLikeData([...likeData])}}>Remove From Bookmark</button>
      </div>
    );
  })}</div>
  )
}

export default Favourite