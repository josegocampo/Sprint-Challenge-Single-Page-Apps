import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Header from "./Header"
import { Link } from "react-router-dom";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState ([]);
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => { 
        setChar(response.data.results);
        
    })
    .catch(error => {
     console.log(`The error was: ${error}`) 
    })
  }, []);
 


    return (
      <div className="movie-list">

          <Header/>

        {char.map(char => (

         <Link to={`/chars/${char.id}`}>
  
        <CharacterCard name = {char.name} img = {char.image} />

        </Link>
       
        ))}
      </div>
  );

}

// function CharDetails({ char }) {
//   const { name, status, species, gender = [] } = char;
//   return (
 
//       <div className="movie-card">
//         <h2>{name}</h2>
//         <div className="movie-director">
//           Director: <em>{status}</em>
//         </div>
//         <div className="movie-metascore">
//           Metascore: <strong>{species}</strong>
//         </div>
//       </div>
  
//   );
// }

