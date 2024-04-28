import React from 'react'
import './toggle.css';

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className='toggle-container'>
      <input 
        type='checkbox'
        id='check'
        name='toggle'
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Tema</label>
    </div>
  )
}

export default Toggle
