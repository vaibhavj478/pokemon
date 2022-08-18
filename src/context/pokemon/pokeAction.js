import { Error_POKEMON, Load_POKEMON, Success_POKEMON } from "./pokeActionType";

import axios from 'axios'

export const getPokemonApi = (arg) => async (dispatch) => {

// console.log(`arg=> ${arg}`);
    

  try {

    dispatch({
      type: Load_POKEMON,
      payload : true
  })


    let data = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${arg}&limit=20`)

    // console.log(data.data);

    dispatch({
        type: Success_POKEMON,
        payload: data.data.results
    })


  } catch (error) {

    dispatch({
        type: Error_POKEMON,
        payload : true
    })
  }

  return;
};
