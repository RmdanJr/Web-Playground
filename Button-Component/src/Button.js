import React from 'react'
import './Button.css'

const Button = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  text,
}) => {
  let className = 'btn'
  className = variant ? `${className} ${variant}` : className
  className = disableShadow ? `${className} disable-shadow` : className
  className = disabled ? `${className} disabled` : className
  className = size ? `${className} ${size}` : className
  className = color ? `${className} ${color}` : className

  return (
    <div className={className}>
      <span class='material-icons-outlined'>{startIcon}</span>
      <p>{(text = 'Defualt')}</p>
      <span class='material-icons-outlined'>{endIcon}</span>
    </div>
  )
}

export default Button
