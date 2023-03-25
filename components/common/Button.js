import React from 'react'

function Button({color, title, link}) {
  return (
    <div>
        <button className={`${color ? "btn-bg text-white" : 'border-blue-900 border text-blue-900'} w-32 sm:w-48 h-14 rounded md cursor-pointer`}>{title}</button>
    </div>
  )
}

export default Button