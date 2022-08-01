import React, {FC, memo, useState} from 'react';
import styles from "../Todos/Todos.module.scss";
import {ITodo} from "../../types/types";
import {addTodoHandler} from "../../store/todos/todosSlice";
import {useAppDispatch} from "../../hooks/redux";

interface TodoFormProps {
    todos: ITodo[]
}

const TodoForm: FC <TodoFormProps> = memo(({todos}) => {

    const dispatch = useAppDispatch();

    const [title, setTitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            dispatch(addTodoHandler(title))
            setTitle('')
        }
    }

    return (
        <header>
            {todos.length ?
                <i className="material-icons">expand_more</i>
                :
                <i className="material-icons">expand_less</i>
            }
            <input
                type="text"
                placeholder='What needs to be done ?'
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                className={styles.todoApp_input}
                role='todo-input'
            />
        </header>
    );
});

export default TodoForm;