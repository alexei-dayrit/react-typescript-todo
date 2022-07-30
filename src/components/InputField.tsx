import React from 'react'

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a task' className='input-box'/>
      <button className='submit-btn' type='submit'>Add task</button>
    </form>
  )
}

export default InputField
