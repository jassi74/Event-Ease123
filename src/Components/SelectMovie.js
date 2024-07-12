import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { moviesList } from "../data";
import BsContext from "../Context/BsContext";
import "../Css/SelectMovie.css";

const SelectMovie = () => {
  const context = useContext(BsContext);

  
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);

  
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="SM_heading">Select a Movie :-</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;