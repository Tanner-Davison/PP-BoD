import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchChars } from "./fetchData/characters";

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
  }, []); // Empty dependency array to ensure useEffect runs only once on mount

  return (
    <div className="App">
      {/* Render your components or display charsData here */}
    
    </div>
  );
}

export default App;
