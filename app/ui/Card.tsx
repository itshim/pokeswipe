"use client";
import React from "react";
import TPokemon from "../interfaces/Pokemon";
import { useSpring } from "react-spring";
import { sortWithSlot } from "../helpers/utility";
import { traitColors, typeColors, typeColorsText } from "../helpers/typeColors";
import { TGeneralObject } from "../interfaces/Global";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TSwipeFn } from "./Swipeable";

const Card = ({
  user,
  handleSwiper,
}: {
  user: TPokemon;
  handleSwiper: TSwipeFn;
}) => {
  console.log(user, "user");

  const style = useSpring({
    to: { transform: "translateX(100%)" },
    from: { transform: "translateX(0%)" },
    config: { tension: 200, friction: 20 },
  });

  const type = user.types.sort(sortWithSlot)[0].type.name;

  const abilities = user.abilities.sort(sortWithSlot);

  const stats = user.stats;

  return (
    <div
      className={`relative 
      w-screen h-screen md:w-72 md:h-96 ${
        (typeColors as TGeneralObject)[type] || "bg-gray-500"
      } 
      md:rounded-xl shadow-lg bg-blur-lg bg-contain bg-no-repeat bg-center 
      overflow-hidden color-${(typeColorsText as TGeneralObject)[type]}`}
      style={{ backgroundImage: `url('${user.sprites.front_default}')` }}
    >
      <div
        className={`absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-gray to-transparent`}
      ></div>
      <div className="p-4 absolute bottom-0 w-full">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        {/* @ts-expect-error Mismatch in react version*/}
        <ul style={style}>
          {abilities.map((n) => (
            <li key={n.ability.url} className="inline-block mr-2">
              {n.ability.name}
            </li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-2 text-white w-full">
          {stats.map((stat) => (
            <div
              key={stat.stat.name}
              className={`flex justify-between ${
                (traitColors as TGeneralObject)[
                  stat.stat.name.split("-").join("").toLowerCase()
                ]
              }`}
            >
              <span className="text-md mr-2">{stat.stat.name}</span>
              <span className="text-md font-semibold">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons for swipe actions */}
      <button
        className="text-4xl text-white-500 absolute left-2 top-1/2"
        onClick={() => handleSwiper("left")}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
      <button
        className="text-4xl text-white-500 absolute right-2 top-1/2"
        onClick={() => handleSwiper("right")}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
    </div>
  );
};

export default Card;
