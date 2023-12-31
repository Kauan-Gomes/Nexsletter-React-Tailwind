import React from 'react'

export default function Input(props) {
  return (
    <input className='dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full py-2 pl-5 outline-none w-full max-w-lg placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-semibold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2 invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-400' {...props}/>
  )
}
