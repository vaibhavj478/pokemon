import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiLoader } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  let id = null;

  const boxRef = useRef(null);
  // for dom
  const [display, setDisplay] = useState(false);
  // for fetch
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // for inputs
  const [arg, setArg] = useState("");
  const [searchText, setSearchText] = useState("");

  const getData = async (str) => {
    try {
      setLoading(true);

      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${str}`);

      setData({ ...res.data });
      console.log(res.data);
      setLoading(false);
    } catch (error) {
      setError(error.response.data);
      // setDisplay(false);
      setLoading(false);
      // console.log(error);
    }
   
  };

  const handleChange = (e) => {
    setError("");
    setDisplay(true);
    setSearchText(e.target.value);
  };
  const handleClick = () => {
    setArg(searchText);
    if (arg) {
      getData(arg);
    } else {
      setError("Not Found");
      // setDisplay(false);
    }
    setSearchText("");
  };

  const directionClick = (e) => {
    navigate(`/pokemon/${data.id}`);
    setData({});
    setDisplay(false);
    setError("");

    setLoading(true);
  };

  useEffect(() => {
    return () => {
      setDisplay(false);
      setError("");
      setLoading(true);
      setData({});
    };
  }, []);

  return (
    <nav id="navBar">
      <Link className="routerLink" to={`/pokemon`}>
        Home
      </Link>

      <div id="search">
        <BsSearch />
        <input
          onChange={(e) => handleChange(e)}
          name="text"
          value={searchText}
          placeholder="Name or Id"
          type="text"
        />
        <button onClick={() => handleClick()} type="submit">
          Go
        </button>
      </div>

      {display === false ? null : loading === true ? (
        <div className="showSearchResult" ref={boxRef}>
          <h1>
            <BiLoader />
          </h1>
        </div>
      ) : error === "Not Found" ? (
        <div className="showSearchResult" ref={boxRef}>
          <h1>{error}</h1>
        </div>
      ) : (
        <div
          className="showSearchResult"
          onClick={(e) => directionClick(e)}
          ref={boxRef}
        >
          <h1> {data.name}</h1>

          <img src={`${data.sprites.front_default}`} alt="pokemon's_img" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
