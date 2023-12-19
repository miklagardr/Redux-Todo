import { configureStore } from "@reduxjs/toolkit";
import { 
    searchReducer , 
    changeBar ,
    changeFilter } from "./slices/searchSlices";

import { 
    todoReducer,
    addTodo,
    deleteTodo,
    todoEdit, 
    completeTodo
} from "./slices/todoSlices";

const store = configureStore({
    reducer : {
        search : searchReducer,
        todo : todoReducer
    }  
})

export {
    store,
    changeBar,
    changeFilter,
    deleteTodo,
    todoEdit,
    addTodo,
    completeTodo
}; 