import React from "react";
import PropTypes from "prop-types";

export default function FormClock({ handleChange, btnChange, form }) {
  return (
    <form onSubmit={btnChange} className='FormClock'>
      <div className='form-col'>
        <label htmlFor='nameZone'>Название</label>
        <input
          className='inputClock'
          type='text'
          name='nameZone'
          onChange={handleChange}
          value={form.nameZone}
          id='nameZone'
        />
      </div>
      <div className='form-col'>
        <label htmlFor='timeZone'>Временная зона</label>
        <select
          className='inputClock'
          name='timeZone'
          id='timeZone'
          value={form.timeZone}
          onChange={handleChange}
        >
          <option value='0'>0</option>
          <option value='1'>+1</option>
          <option value='2'>+2</option>
          <option value='3'>+3</option>
          <option value='4'>+4</option>
          <option value='5'>+5</option>
          <option value='6'>+6</option>
          <option value='7'>+7</option>
          <option value='8'>+8</option>
          <option value='9'>+9</option>
          <option value='10'>+10</option>
          <option value='11'>+11</option>
          <option value='12'>+12</option>
          <option value='13'>+13</option>
          <option value='14'>+14</option>
          <option value='15'>+15</option>
          <option value='16'>+16</option>
          <option value='17'>+17</option>
          <option value='18'>+18</option>
          <option value='19'>+19</option>
          <option value='20'>+20</option>
          <option value='21'>+21</option>
          <option value='22'>+22</option>
          <option value='23'>+23</option>
        </select>
      </div>
      <div className='form-col'>
        <button className=' inputClock btn'>Добавить</button>
      </div>
    </form>
  );
}

FormClock.propTypes = {
  form: PropTypes.exact({
    nameZone: PropTypes.string,
    timeZone: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  btnChange: PropTypes.func.isRequired,
};

FormClock.defaultProps = {
  form: [],
};
