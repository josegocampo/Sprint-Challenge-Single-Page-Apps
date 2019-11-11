import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Header from "./Header"
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm"



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState ([]);

  
  const search = charArr => {
    setData(charArr)
    
};
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => { 
    
        setData(response.data.results);
        
    })
    .catch(error => {
     console.log(`The error was: ${error}`) 
    })
  }, []);
 


    return (
      <div className="movie-list">

          <Header/>
          <SearchForm search={search} characters={data} />


        {data.map(char => (
         <Link to={`/chars/${char.id}`}>
          <CharacterCard name = {char.name} img = {char.image} />
         </Link>
       
        ))}
      </div>
  );

}
