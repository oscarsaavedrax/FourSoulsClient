import React from 'react'
import '../css/stylesheet.css';
const Button = ({color, text}) => {
  return <button style={{ backgroundColor: color} } className='CUB'>{text}</button>
}

export default Button