import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import '../styles/pokemon.css'

const Pokemon = ({offset}) => {
  const data = useSelector((state) => state.pokemon.data);


  // console.log(offset);
  // console.log(data);
  return (
  <>
  <div className="cardsContainer" >
  {

    data.map((el,ind)=>{

        let result= (

            <div className="cardContainer"  key={offset +ind+1} >
                <span>
                    Name : {el.name}
                </span>
                <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${offset+ind+1}.svg`} alt="pokemon's_img" />

                <Link to={`/pokemon/${offset+ind+1}`} >more</Link>
                
            </div>

        )

        return result
    })
  }
  
  </div>
  </>
  );
};

export default Pokemon;
