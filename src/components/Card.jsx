import React from "react";

import "../styles/card.css";

const Card = ({ data, meta, val }) => {
  console.log(data, meta);
  return (
    // bgImg of display pokemon 
    // style={{backgroundImage : `url(https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${val}.svg)  ` }}
    <div    className="bg_img" >
    <div id="card">
      <div className="divImg">
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${val}.svg `}
          alt="pokemon's_img"
        />
      </div>

      <div className="detailInfo">
        <div className="basicInfo">
          <h3>Basic Info</h3>
          <div>
            <span> Name: {`${meta.name.toUpperCase()}  ${meta.name} `}</span>
            <span> Order: {meta.order}</span>
            <span> Weight: {meta.weight}</span>
            <span> Height: {meta.height}</span>
            <span> Move's: {meta.moves.length}</span>
            <span> Species: {meta.species.name}</span>
          </div>
        </div>

        <div className="abilitiesInfo">
          <h3>Abilities</h3>

          <div>
            {
              meta.abilities.map((el, ind) => (
                <span key={ind + 1}>
                  <span>
                    {el.is_hidden ? (
                      <span style={{ color: "green" }}>{el.ability.name}</span>
                    ) : (
                      <span style={{ color: "red" }}>{el.ability.name}</span>
                    )}
                  </span>
                </span>
              ))
              // meta.abilities[0].ability.name
            }
          </div>
        </div>
        <div className="statsInfo">
          <h3>Stats</h3>

          <div>
            {meta.stats.map((el, ind) => (
              <span key={ind + 1}>
                <span>
                  {el.stat.name}:{el.base_stat}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="spritesInfo">
          {data.sprites.back_default !== null &&
          data.sprites.back_default !== undefined ? (
            <img src={`${data.sprites.back_default}`} alt={`${meta.name}`} />
          ) : null}
          {data.sprites.back_female !== null &&
          data.sprites.back_female !== undefined ? (
            <img src={`${data.sprites.back_female}`} alt={`${meta.name}`} />
          ) : null}
          {data.sprites.back_shiny !== null &&
          data.sprites.back_shiny !== undefined ? (
            <img src={`${data.sprites.back_shiny}`} alt={`${meta.name}`} />
          ) : null}
          {data.sprites.back_shiny_female !== null &&
          data.sprites.back_shiny_female !== undefined ? (
            <img
              src={`${data.sprites.back_shiny_female}`}
              alt={`${meta.name}`}
            />
          ) : null}
          {data.sprites.front_default !== null &&
          data.sprites.front_default !== undefined ? (
            <img src={`${data.sprites.front_default}`} alt={`${meta.name}`} />
          ) : null}
          {data.sprites.front_female !== null &&
          data.sprites.front_female !== undefined ? (
            <img src={`${data.sprites.front_female}`} alt={`${meta.name}`} />
          ) : null}
          {data.sprites.front_shiny !== null &&
          data.sprites.front_shiny !== undefined ? (
            <img src={`${data.sprites.front_shiny}`} alt={`${meta.name}`} />
          ) : null}
          {data.sprites.front_shiny_female !== null &&
          data.sprites.front_shiny_female !== undefined ? (
            <img
              src={`${data.sprites.front_shiny_female}`}
              alt={`${meta.name}`}
            />
          ) : null}
        </div>
      </div>
    </div>
   </div> 
  );
};

export default Card;
