import React, {FC, memo} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import {ITodo} from "../../types/types";
import {TransitionGroup, CSSTransition} from "react-transition-group";

interface TodosListProps {
    todos: ITodo[],
}

const TodosList:FC <TodosListProps> = memo(({todos}) => {

    return (
        <ul>
            <TransitionGroup>
                {todos.map(todo =>
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="todo"
                    >
                        <TodoItem todo={todo} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </ul>
    );
});

export default TodosList;