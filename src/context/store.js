


import { combineReducers, applyMiddleware, legacy_createStore}  from 'redux'
import { pokemonReducer } from './pokemon/pokeReducer'


import thunk from 'redux-thunk'
import { pokemonOneReducer } from './pokemonOne/pokemonOneReducer';
import { pageCountReducer } from './PageCount/pageReducer';


let rootReducer = combineReducers({
     pokemon:pokemonReducer,
     pokemonOne: pokemonOneReducer,
     pageCount: pageCountReducer
    });



 export const store =  legacy_createStore(rootReducer, applyMiddleware(thunk)); 
