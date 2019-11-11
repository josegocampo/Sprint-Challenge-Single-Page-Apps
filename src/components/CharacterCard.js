import React from "react";
import styled from "styled-components";




const Card = styled.div`
border: 1px solid black;
width: 350px;


`




export default function CharacterCard(props) {
  return( 
    <div className = '.grid-view'>
        <div className = '.card.ui'>
       <Card>

           <h3>{props.name}</h3>
           <img src={props.img}  alt= "" className = 'main-img' />
          
       </Card>
        </div>
      
    </div>
  )
}
