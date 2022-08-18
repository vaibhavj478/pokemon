import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDECPage, getINCPage } from "../context/PageCount/pageAction";

import { getPokemonApi } from "../context/pokemon/pokeAction";
import Loading from "./Loading";
import Pokemon from "./Pokemon";

import '../styles/button.css'

const Pokemons = () => {
  const { loading, error } = useSelector((state) => state.pokemon);

  const offset = useSelector((state) => state.pageCount.count);

 
  const dispatch = useDispatch();

console.log(offset);


  const getData = async (arg) => {
    try {
      // console.log(`arg=> ${arg}`);
      dispatch(getPokemonApi(arg));
    } catch (error) {}
  };

  // const [offset, setOffset] = useState(0);

  const handleClick = (val) => {
    // setOffset((prev) => prev + val);
  };

  useEffect(() => {
    getData(offset);
  }, [offset]);

  return (
    <div>
      <div> Pokemon's</div>

      {loading ? (
        < Loading/>

      ) : (
        <>
          <Pokemon offset={offset} />
          <div>Offset{offset}</div>
        </>
      )}

      <div className="pagination" >

      <button disabled={offset === 0} onClick={() =>  dispatch(getDECPage())   }>
        Prev
      </button>
      <button disabled={offset >= 1140} onClick={() => dispatch(getINCPage())}>
        Next
      </button>
      </div>
    </div>
  );
};

export default Pokemons;
