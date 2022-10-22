import React, { useContext, useEffect } from "react";
import { fecthedData } from "../context.jsx/Data";
import { likesData } from "../context.jsx/Likes";
import { changeTheme } from "../context.jsx/Theme";
import { searchedData } from "../context.jsx/Search";
import "../style.css/Headlines.css";

function Headlines() {
  const { ligDar } = useContext(changeTheme);
  const { data } = useContext(fecthedData);
  const { search, setSearch, searchData, setSearchData } =
    useContext(searchedData);
  const { likeData, setLikeData } = useContext(likesData);

  useEffect(() => {
    const searchData = data.filter((item) => {
      if (item.title) {
        return item.title.toLowerCase().includes(search.toLowerCase());
      }
    });
    console.log(searchData);
    setSearchData([...searchData]);
  }, [setSearchData, data, search]);

  return (
    <div className={ligDar ? "white" : "dark"}>
      <div>{data.length === 0 && "Loading..."}</div>
      <div className="container">
        {searchData.map((item, idx) => {
          return (
            <div className={ligDar ? "title-Cards" : "title-Cards-dark"}>
              <a
                className={ligDar ? "anchor" : "anchorDark"}
                href={item.url}
                target="blank"
              >
                <h1>{item.title}</h1>
              </a>
              <img
                className="image-headline"
                src={item.urlToImage}
                alt="Unavailable"
                width={"360px"}
              />
              <div className="headline-bookmark">
                <button
                  className="headline-bookmark"
                  onClick={() => {
                    likeData.push(item);
                    setLikeData([...likeData]);
                  }}
                >
                  BookMark
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Headlines;
