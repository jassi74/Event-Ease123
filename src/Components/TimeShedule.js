import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { slots } from "../data";
import "../Css/TimeShedule.css";
import BsContext from "../Context/BsContext";

const TimeShedule = () => {
  const context = useContext(BsContext);

  
  const { time, changeTime } = context;

  const handleChangeTime = (value) => {
    changeTime(value);

   
    window.localStorage.setItem("slot", value);
  };

  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Schedule</h1>
        <div className="TS_main_container">
            <div className="select_Time">
            {slots.map((el, index) => {
            return (
              <RadioComponent
                text={el}
                changeSelection={handleChangeTime}
                data={time}
                key={index}
              />
            );
          })}
            </div >
         
            <div className="time_img">
              <img src="https://i.ibb.co/Vt3QFDF/Firefly-create-an-image-like-cartoon-thinking-looking-on-clock-and-the-moon-dark-night-45199.jpg" alt="image of clock"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default TimeShedule;