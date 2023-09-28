import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default function DisplayClock({ time, name, id, deleteClick }) {
  debugger;
  const secondStyle = {
    transform: `rotate(${
      (1 / 60) * time.format("ss")
    }turn) translate(-50%, -50%)`,
  };
  const minuteStyle = {
    transform: `rotate(${
      (1 / 60) * time.format("mm")
    }turn) translate(-50%, -50%)`,
  };
  const hoursStyle = {
    transform: `rotate(${
      (1 / 12) * time.format("HH")
    }turn) translate(-50%, -50%)`,
  };

  return (
    <div className='DisplayClock'>
      <h5 className='titleClock'>{name}</h5>
      <div className='Clock'>
        <div className='Clock-item'>
          <div className='time second' style={secondStyle}></div>
          <div className='time minute' style={minuteStyle}>
            <div className='arrow'></div>
          </div>
          <div className='time hours' style={hoursStyle}>
            <div className='arrow'></div>
          </div>
        </div>
        <div onClick={() => deleteClick(id)} className='delete'>
          x
        </div>
      </div>
    </div>
  );
}

DisplayClock.propTypes = {
  time: PropTypes.instanceOf(moment),
  name: PropTypes.string,
  id: PropTypes.string,
  deleteClick: PropTypes.func.isRequired,
};
