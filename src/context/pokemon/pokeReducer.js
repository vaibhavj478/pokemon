import { Error_POKEMON, Load_POKEMON, Success_POKEMON } from "./pokeActionType";

let initSate = {
  data:[],
  loading: true,
  error: false,
};

export const pokemonReducer = (state = initSate, action) => {
  switch (action.type) {
    case Load_POKEMON:
    //   console.log("load");
      return { ...state, loading: action.payload };
    case Success_POKEMON:
    //   console.log("success");
    //   console.log(action.payload);
      return { ...state, data:[...action.payload],loading:false };
    case Error_POKEMON:
    //   console.log("error");
      return { ...state, error: action.payload , loading:false};
    default:
      return state;
  }
};
