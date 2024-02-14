import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchChars } from "./fetchData/characters";
import styled from 'styled-components';
import Characters from './components/Characters'

function App() {
  const [charsData, setCharsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const chars = await fetchChars();
      if (chars) {
        setCharsData(chars);
      }
      return console.log(chars);
      
    };

    fetchData();
  }, []); 

  return (
    <div className="App">
     <Characters data={charsData}/>
    
    </div>
  );
}

export default App;
