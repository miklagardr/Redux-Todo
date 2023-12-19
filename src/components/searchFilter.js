import React from 'react'
import {useDispatch} from 'react-redux'
import { changeFilter } from '../store'
import { useState } from 'react'

function SearchFilter() {
  const [value ,setValue] = useState()

  const dispatch = useDispatch()
  const handleChange = (event) =>{
    dispatch(changeFilter(event.target.value))
    setValue(event.target.value)
  }
  const handleSubmit =(event)=>{
    event.preventDefault(); 
    setValue("")
   
  }
  return (
    <div className='flex justify-end '>
        <form onSubmit={handleSubmit} className=' items-center space-x-2 lg:mr-64 mr-10 flex mb-10'>
          <button className='rounded border lg:text-lg p-1.5 border-blue-500 text-blue-600 hover:bg-blue-50'>Search</button>
          <input 
          onChange={handleChange}
          className='border border-blue-400 p-2 outline-none text-sm lg:text-lg'
          value={value}
          /> 
          
        </form>
    </div>
  )
}

export default SearchFilter