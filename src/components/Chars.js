import React, { useEffect, useState } from "react";
import axios from "axios";






const Chars = (props)  => {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState ([]);
  const id = props.match.params.id;


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => { 
        setChars(response.data.results);
        
    })
    .catch(error => {
     console.log(`The error was: ${error}`) 
    })
  }, []);

console.log(chars.name);
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{chars.name}</h2>
        <div className="movie-director">
          Director: <em>{chars.status}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{chars.species}</strong>
        </div>
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}





export default Chars;