import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo' , 
    initialState : {
        todos : [],
    },  // 
    reducers : {
        addTodo(state,action){
            if(action.payload.text === '') {
                return 
            }else{
                // state.todos = [...state.todos , action.payload]  // { id : 1 , text : görev1 , complete : false - true }
                 state.todos.push(action.payload)
            }
        }, 
        completeTodo(state,action){
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                  return { ...todo, complete: !todo.complete };
                }
                return todo;
              });
        }, 
        todoEdit(state,action){  // action {id - text } 
            const { id , value} = action.payload
            state.todos = state.todos.map((todo) => {
               return todo.id === id ?  {...todo , text : value} : todo
            })

        }, 
        deleteTodo(state,action){ // action (id)
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        }
    }
})

export const todoReducer = todoSlice.reducer; 
export const {addTodo,todoEdit,deleteTodo,completeTodo} = todoSlice.actions; 