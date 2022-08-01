import React, {FC, memo} from 'react';
import styles from './TodoItem.module.scss';
import {ITodo} from "../../types/types";
import {useAppDispatch} from "../../hooks/redux";
import {toggleHandler} from "../../store/todos/todosSlice";

interface TodoItemProps {
    todo: ITodo,
}

const TodoItem: FC <TodoItemProps> = memo( ({todo}) => {

    const classes = [styles.todoItem];

    if (todo.completed) {
        classes.push(styles.completed)
    }

    const dispatch = useAppDispatch();

    return (
        <li className={classes.join(' ')} >
            <label className={styles.todoItemContainer}>
                <span className={styles.fakeCheckbox}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        className={styles.checkbox}
                        onChange={() => dispatch(toggleHandler(todo.id))}
                    />
                </span>
                <span>{todo.title}</span>
            </label>
        </li>
    );
});

export default TodoItem;