import React from 'react'
import Info from '../info'

const Textfield = ({
    label,
    error,
    ...otherProps
}) => {
  return (
    <div className='my-2'>
        <label className='flex flex=col gap-2 text-sm'>
            {label}:
            <input placeholder={label} {...otherProps} className='border-none'/>
        </label>
    </div>
  )
}

export default Textfield