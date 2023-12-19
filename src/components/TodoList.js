import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoPencil  , GoX , GoCheckCircle , GoCheckCircleFill } from "react-icons/go";
import { completeTodo, deleteTodo } from '../store';
import { useState } from 'react';
import EditTodo from './EditTodo';
function TodoList() {
    const dispatch = useDispatch()
    const [editPage , setEditPage] = useState()
    const [comp , setComp] = useState(false)

    const { todos , serfilter} = useSelector((state) => {
        return {
            todos : state.todo.todos, 
            serfilter : state.search.serfilter, 
        }
    })
    const filteredTodo = todos.filter((todo) => todo.text.toLowerCase().includes(serfilter))


    const handleComplete = (id) => {
      dispatch(completeTodo(id))
    }
    const handleDelete = (id) =>{
      dispatch(deleteTodo(id))
    }
    const handleEdit = (id) => {
      setEditPage(id)
      setComp(!comp)
    }
   

    const renderedTodos = filteredTodo.map((todo) => {
    
         return <div key={todo.id} className='px-2 border-2 rounded-lg border-blue-400 w-7/12 flex items-center mb-2'>
          <div className='flex items-center text-2xl ' onClick={() => handleComplete(todo.id)}>
              {todo.complete ? <GoCheckCircleFill /> : <GoCheckCircle />}
          </div>
          <div className='flex-1 h-12 text-xl flex items-center justify-center'>
            {editPage === todo.id && comp ? <EditTodo id = {todo.id} setComp = {setComp} comp = {comp} /> : todo.text}
          </div>
      
          <button className='ml-auto text-2xl flex items-center justify-end space-x-2'>
            <GoPencil onClick={() => handleEdit(todo.id)} />
            <GoX onClick={() => {handleDelete(todo.id)}} />
          </button>
        </div> 
});
      
      return (
        <div className='flex flex-col items-center'>
          {renderedTodos}
        </div>
      );
      
      }
export default TodoList