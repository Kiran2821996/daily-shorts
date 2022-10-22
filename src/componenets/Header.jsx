import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { changeTheme } from "../context.jsx/Theme";
import { searchedData } from "../context.jsx/Search";
import "../style.css/Header.css";

function Header() {
  const { ligDar, setLigDar } = useContext(changeTheme);
  const { search, setSearch } = useContext(searchedData);
//   const { location } = this.props;
//   const homelink = location.pathname === "/" ? "active" : "";
// const inshortlink = location.pathname.match(/^\/about/) ? "active" : "";
// const bookmarklink = location.pathname.match(/^\/contact/) ? "active" : "";
// const aboutlink = location.pathname.match(/^\/contact/) ? "active" : ""

  return (
    <div className={ligDar ? "mainHeader" : "mainHeaderdr"}>
      <div className={ligDar ? "white" : "dark"}>
        <div className="newicon">
          <i class="fa-solid fa-newspaper"></i>
           Daily Shorts
        </div>
        <div className="top-toggle">
          {ligDar ? (
            // <button >Dark</button>
            <i
              class="fa-solid fa-moon mo"
              onClick={() => setLigDar(!ligDar)}
            ></i>
          ) : (
            <i
              class="fa-solid fa-sun su"
              onClick={() => setLigDar(!ligDar)}
            ></i>
            // <button >Light</button>
          )}
        </div>
        <div className="middle-search">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div className="low-links">
          <div className="home-link">
            <NavLink  className={ligDar ? "wh" : "dr"} to={"/"} end>
              Home
            </NavLink>
          </div>
          <div className="inshort-link">
            <NavLink className={ligDar ? "wh" : "dr"} to={"/inshorts"}>
              Inshorts
            </NavLink>
          </div>
          <div className="bookmark-link">
            <NavLink className={ligDar ? "wh" : "dr"} to={"/fav"}>
              BookMark
            </NavLink>
          </div>
          <div className="about-link">
            <NavLink className={ligDar ? "wh" : "dr"} to={"/about"}>
              About
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
