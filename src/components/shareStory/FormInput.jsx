import React from 'react'
import './forminput.css'

const FormInput = (props) => {
  const {type, placeholder, label} = props
  return (
    <div className='form-container'>
        <label htmlFor="">{label}</label>
        <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default FormInput