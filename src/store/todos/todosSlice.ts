import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITodo} from "../../types/types";

interface TodosState {
    todos: ITodo[];
}

const initialState: TodosState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodoHandler: (state, action: PayloadAction<string>) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload,
                completed: false
            }
            state.todos = [newTodo, ...state.todos];
        },

        toggleHandler: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        },

        handleClear: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
    }
})

export const { addTodoHandler, handleClear, toggleHandler } = todosSlice.actions

export default todosSlice.reducer