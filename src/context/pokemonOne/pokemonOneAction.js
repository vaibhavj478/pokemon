import {
  Error_POKEMON_ONE,
  Error_POKEMON_ONE_detail,
  Load_POKEMON_ONE,
  Load_POKEMON_ONE_detail,
  Success_POKEMON_ONE,
  Success_POKEMON_ONE_detail,
} from "./pokemonOneActionType";

import axios from "axios";

export const getPokemonOneApi = (arg) => async (dispatch) => {
  // console.log(`arg=> ${arg}`);
  try {

    dispatch({
      type: Load_POKEMON_ONE,
      payload: true,
    });
    let data = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${arg}`);

    console.log(data.data);

    dispatch({
      type: Success_POKEMON_ONE,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: Error_POKEMON_ONE,
      payload: true,
    });
  }

  return;
};

export const getPokemonOneApiDetail = (arg) => async (dispatch) => {
  // console.log(`arg=> ${arg}`);


  try {
    // let data = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${arg}`);

    dispatch({
      type: Load_POKEMON_ONE_detail,
      payload: true,
    });

    let meta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${arg}`);
    console.log(meta.data);

    dispatch({
      type: Success_POKEMON_ONE_detail,
      payload: meta.data,
    });
  } catch (error) {
    dispatch({
      type: Error_POKEMON_ONE_detail,
      payload: true,
    });
  }

  return;
};
