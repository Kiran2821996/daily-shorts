import React,{createContext,useState,useEffect} from 'react'
import axios from 'axios';
 
const fecthedData = createContext();

function Data(props) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=(crypto AND bitcoin) NOT ethereum&from=2022-10-01&to=2022-10-18&sortBy=popularity&apiKey=72635734611e40d5b63c90dc5248f92b"
        )
        .then((response) => {
          console.log(response.data);
          setData([...response.data.articles]);
        });
    }, []);

  return (
    
    <fecthedData.Provider value={{data,setData}}>
    {props.children}
    </fecthedData.Provider>
    
  
 
  )
}

export default Data;
export {fecthedData}







