import React, { useState, useContext } from "react";
import { seats } from "../data";
import "../Css/SelectSeats.css";
import BsContext from "../Context/BsContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  const [seat, changeSeats] = useState([]);
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeats } = context;

  return (
    <>
      <div className="SS_wrapper">
        <h1 className="SS_heading">Select Seats</h1>
        <div className="SS_main_container">
        
        
            <div className="seat_img">
              <img src="https://i.ibb.co/B3kSb3y/Screenshot-2024-07-22-at-2-32-21-PM.png" alt="image of clock"/>
            </div>
         
          {/* <div className="seat_list"> */}
          {seats.map((el, index) => {
            return (
              <SeatsInput
                seat={seat}
                key={index}
                index={index}
                changeSeats={changeSeats}
                noOfSeat={noOfSeat}
                text={el}
                changeNoOfSeats={changeNoOfSeats}
              />
            );
          })}
          {/* </div> */}
          
        </div>
      </div>
    </>
  );
};

export default SelectSeats;