import React from 'react'
import { todoEdit } from '../store'
import { useSelector , useDispatch } from 'react-redux'


function EditTodo(props) {

    const {id , setComp , comp } = props

    const dispatch = useDispatch()

  const { todos  } = useSelector((state) => {
    return {
        todos : state.todo.todos
    }   
})

    
    const handleChange = (event) => {
        const value = event.target.value
        dispatch(todoEdit({
            id,
            value,
        }))
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        setComp(!comp)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            className='border rounded-xl border-blue-950  h-10 pl-2 hover:border-red-400 transition duration-500 outline-none '
            onChange={handleChange}
        />
        </form>
     
    </div>
  )
}

export default EditTodo