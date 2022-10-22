import React,{useContext} from "react";
import { changeTheme } from "../context.jsx/Theme";
import "../style.css/Footer.css"

function Footer() {
  const { ligDar} = useContext(changeTheme);
  const date = new Date();
  return (
    <div className={ligDar?"white":"dark"}>
      <div className={ligDar?"footer":"footerd"}>
      <h5>
        Last Sync:{" "}
        {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} @ ${
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }:${
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
        }`}
      </h5>
      </div>
      
    </div>
  );
}

export default Footer;
