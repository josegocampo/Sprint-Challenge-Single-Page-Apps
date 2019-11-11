import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";




const IND = styled.div`
border: 1px solid black;
width: 350px;
margin: 0 auto;
margin-top: 70px;
background: lightgrey;
`




const Chars = (props)  => {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState ([]);
  const id = props.match.params.id;


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => { 
        setChars(response.data);
        
    })
    .catch(error => {
     console.log(`The error was: ${error}`) 
    })
  }, [id]);

console.log(chars.name);
  return (
    <IND>
      <div className="char-card">
        <h2>{chars.name}</h2>
        <img src={chars.image}  alt= "" className = 'main-img' />
        <div className="char-status">
          Status: <em>{chars.status}</em>
        </div>
        <div className="char-species">
          Race: <strong>{chars.species}</strong>
        </div>
      </div>
    </IND>
  );
}





export default Chars;