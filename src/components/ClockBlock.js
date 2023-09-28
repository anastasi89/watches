import { React, useState } from "react";
import shortid from "shortid";
import FormClock from "./FormClock";
import Clock from "./Clock";

export default function ClockBlock() {
  const clearForm = {
    timeZone: "",
    nameZone: "",
  };
  const [formState, setForm] = useState(clearForm);
  const [arrClock, setClock] = useState([]);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const btnChange = (event) => {
    debugger;
    event.preventDefault();
    formState.id = shortid();
    setClock((prev) => [...prev, formState]);
    setForm(clearForm);
  };

  const deleteClock = (id) => {
    setClock((prevArr) => prevArr.filter((item) => item.id !== id));
  };

  return (
    <div className='ClockBlock'>
      <FormClock
        handleChange={handleChange}
        btnChange={btnChange}
        form={formState}
      />
      <div className='displayContainer'>
        {arrClock.map((item) => (
          <Clock
            key={item.id}
            timeZone={item.timeZone}
            nameZone={item.nameZone}
            id={item.id}
            deleteClock={deleteClock}
          />
        ))}
      </div>
    </div>
  );
}
