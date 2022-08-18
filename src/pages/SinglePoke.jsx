import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {BiLoader} from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonOneApi,
  getPokemonOneApiDetail,
} from "../context/pokemonOne/pokemonOneAction";
import Card from "../components/Card";

import '../styles/SinglePoke.css'

const SinglePoke = () => {
  let val = useParams();

  const { data, loading, error, meta } = useSelector(
    (state) => state.pokemonOne
  );

  const [delay, setDelay] = useState(false);
  // console.log(data);
  // console.log(meta);
  let dispatch = useDispatch();

  console.log("1");

  const getDataOne = (arg) => {
    console.log("4");
    // console.log(arg);
    dispatch(getPokemonOneApiDetail(arg));
    dispatch(getPokemonOneApi(arg));
  };

  useEffect(() => {
    getDataOne(val.id);

    // console.log(meta,data);

    let id = setTimeout(() => {
      clearTimeout(id);
      setDelay(true);
    }, 2500);
  }, [val.id, dispatch]);

  return loading ? (
    <div className="card"  >

    <h1><BiLoader/> </h1>
    </div>
  ) : delay ? (
    
    <Card data={data} meta={meta} val={meta.id||val.id} />
  ) : (
    
    <div className="card" >

    <h1><BiLoader/> </h1>
    </div>
   
  );
};

export default SinglePoke;
