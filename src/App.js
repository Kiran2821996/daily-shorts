import React,{useContext} from "react";
import Inshorts from "./componenets/Inshorts";
import Headlines from "./componenets/Headlines";
import Favourite from "./componenets/Favourite";
import About from "./componenets/About";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import { Routes, Route } from "react-router-dom";
import { changeTheme } from "./context.jsx/Theme";
import { fecthedData } from "./context.jsx/Data";
import Loader from "./componenets/Loader";
import "./index.css"

function App() {
  const { ligDar } = useContext(changeTheme);
  const { data } = useContext(fecthedData);
  return (
    <>
  {data.length===0? <Loader/>: <div className={ligDar?"mainContainer":"mainContainerDark"}>
      <div className="headContaner"><Header /> <Footer/></div>
     <div className="dataContainer">
     <Routes>
        <Route path="/" element={<Headlines />} />
        <Route path="/inshorts" element={<Inshorts />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </div>
      
    
    </div>}
   
     
     
    </>
  );
}

export default App;
