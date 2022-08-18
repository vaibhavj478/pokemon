
import { Load_POKEMON_ONE,Error_POKEMON_ONE,Success_POKEMON_ONE, Load_POKEMON_ONE_detail, Success_POKEMON_ONE_detail, Error_POKEMON_ONE_detail}from './pokemonOneActionType'


let initSate = {
  data:{},
  meta:{},
  loading: true,
  error: false,
};




export const pokemonOneReducer = (state = initSate, action) => {
  switch (action.type) {
    case Load_POKEMON_ONE:
    //   console.log("load");
      return { ...state, loading: action.payload };
    case Success_POKEMON_ONE:
    //   console.log("success");
      // console.log(action.payload);
      return { ...state, data:{...action.payload}, loading:false };
    case Error_POKEMON_ONE:
    //   console.log("error");
      return { ...state, error: action.payload ,loading:false};
    case Load_POKEMON_ONE_detail:
    //   console.log("load");
      return { ...state, loading: action.payload };
    case Success_POKEMON_ONE_detail:
    //   console.log("success");
      // console.log(action.payload);
      return { ...state, meta:{...action.payload} ,loading:false };
    case Error_POKEMON_ONE_detail:
    //   console.log("error");
      return { ...state, error: action.payload ,loading:false};


    default:
      return state;
  }
};