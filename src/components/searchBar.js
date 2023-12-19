import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { changeBar , addTodo  } from '../store';
import { nanoid } from '@reduxjs/toolkit';
function SearchBar() {

    const dispatch = useDispatch(); 
    
    const {serbar}= useSelector((state) =>{
       return {
        serbar : state.search.serbar, 
        todos : state.todo.todos
       } 
    });
   
    const handleSubmit = (event) =>{
        event.preventDefault(); 
        dispatch(addTodo({
            id: nanoid() , 
            text : serbar, 
            complete : false,
        }))
        dispatch(changeBar(''))
    }
    const handleChange = (event) => {
        const value = event.target.value
        dispatch(changeBar(value))
    }
  return (
<div className='flex items-center justify-center inset-x-0 bottom-0 h-36'>
    <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <div className='flex justify-between items-center w-2/3 space-x-5'>
            <input
                type='text'
                className='w-full h-10 outline-none border p-2 hover:border-blue-300 transition duration-500'
                onChange={handleChange}
                value={serbar}
            />
            <button className='rounded-xl border p-2 bg-slate-300 hover:bg-blue-100 transition duration-500 whitespace-nowrap '>Add to do</button>
        </div>
    </form>
</div>

  )
}

export default SearchBar