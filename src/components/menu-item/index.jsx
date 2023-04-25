import React from 'react'

export const MenuItem = ({ text = '', icon }) => {
  return (
    <div className='flex w-f4ll space-x-4'>
        {icon}
        <span className='text-medium-gray hover:text-almost-black cursor-pointer'>{ text }</span>
    </div>
  )
}
