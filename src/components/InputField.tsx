import React from 'react';
import '../styles.css';

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a task' className='input-box'/>
      <button className='submit-btn' type='submit'>Add</button>
    </form>
  )
}

export default InputField
