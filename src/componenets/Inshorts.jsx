import { useContext, useState, useEffect } from "react";
import { fecthedData } from "../context.jsx/Data";
import { likesData } from "../context.jsx/Likes";
import { changeTheme } from "../context.jsx/Theme";
import { searchedData } from "../context.jsx/Search";
import "../style.css/Inshort.css"

function Inshorts() {
  const { data, setData } = useContext(fecthedData);
  const { ligDar } = useContext(changeTheme);
  const { likeData, setLikeData } = useContext(likesData);
  const [valueadd, setValueadd] = useState("");
  const [comment, setComment] = useState([]);
  const { search, setSearch, searchData, setSearchData } =
    useContext(searchedData);

  console.log(data, "data");
  const likess = (e) => {
    // console.log(e.target.id, e.target.innerText);
    data.map((_, idx) => {
      if (e.target.id == idx) {
        e.target.innerText = "👍";
      }
    });
  };

  useEffect(() => {
    const searchData = data.filter((item) => {
      if (item.title) {
        return item.title.toLowerCase().includes(search.toLowerCase());
      }
    });
    console.log(searchData);
    setSearchData([...searchData]);
  }, [search,data,setSearchData]);

  const handleDelete = (id) => {
    const filterData = data.filter((item) => item.url !== id);

    setData([...filterData]);
  };

  return (
    <div className={ligDar ? "white" : "dark"}>
      <div>{data.length===0 && "Loading..."}</div>
      {searchData.map((item, idx) => {
        return (
          <div className={ligDar ? "inshort-Cards" : "inshort-Cards-dark"} key={item.publishedAt}>
            <h1>{item.title}</h1>
            <img src={item.urlToImage} alt="Unavailable" width={"350px"} />
            <p>{item.description}</p>

            <a  className={ligDar?"anchor":"anchorDark"} href={item.url} target="blank">
              <span>Read More</span>
            </a>
            {
              <button
              className={ligDar?"bokk-btn":"bokk-btn-dark"}
                onClick={() => {
                  likeData.push(item);
                  setLikeData([...likeData]);
                }}
              >
                BookMark
              </button>
            }

          
            <div className="likes-comment">
              <div className="likes">
                <button  id={idx} onClick={(e) => likess(e)}>
                  Like
                </button>
              </div> <div className={ligDar?"comment":"commentdark"}>
                <input
                  type="text"
                  id={item.publishedAt}
                  onChange={(e) => {
                    console.log(e.target.id, item.publishedAt);
                    setValueadd(e.target.value);
                  }}
                  value={valueadd}
                  placeholder="Add your comment..."
                />
                <button
                  onClick={() => {
                    comment.push([valueadd, item.publishedAt]);
                    setValueadd("");
                    setComment([...comment]);
                  }}
                >
                +
                </button>
              </div>
              <div className="delete">
                <button onClick={(e) => handleDelete(item.url)}>X</button>
              </div>
               
            
            </div>
            <div className="all-comments">Comments:
            {comment.map((ele) => {
              if (ele[1] === item.publishedAt) {
                return <p>{ele[0]}</p>;
              }
            })}
            </div>
           
          </div>
        );
      })}
    </div>
  );
}

export default Inshorts;
