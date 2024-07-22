import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { moviesList } from "../data";
import { moviesimg } from "../data";
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
      <h1 className="SM_heading">Select a Movie</h1>
      <div className="SM_main_container">
        <div className="SM_img">
          {moviesimg.map((el,index) =>{
           
            return <div className="SM_img2"> <img src={el} alt="Picture not available"/></div>;
          })}
        </div>
        
        
       <div className="movie_list">
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
       
      </div>
    </>
  );
};

export default SelectMovie;