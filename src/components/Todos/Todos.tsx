import React, {FC, memo, useMemo, useState} from 'react';
import styles from './Todos.module.scss';
import TodosList from "../TodosList/TodosList";
import TodoForm from "../TodoForm/TodoForm";
import {useAppSelector} from "../../hooks/redux";
import TodosFilter from "../TodosFilter/TodosFilter";

const Todos: FC = memo( () => {

    const {todos} = useAppSelector(state => state.todos)

    const [filterType, setFilterType] = useState<string>('All');

    const handleFilterBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const button = e.target as HTMLElement;
        setFilterType(button.innerText);
    }

    const filteredTodos = useMemo(() => {
        switch (filterType) {
            case 'Active':
                return todos.filter(todo => !todo.completed)
            case 'Completed':
                return todos.filter(todo => todo.completed)
            default:
                return todos
        }
    }, [handleFilterBtnClick, filterType]);

    const itemsLeft = todos.filter(todo => !todo.completed).length;

    return (
        <div className={styles.todosContainer}>
            <h1>todos</h1>
            <div className={styles.todoApp}>
                <TodoForm todos={filteredTodos} />
                <TodosList todos={filteredTodos} />
                <TodosFilter
                    filterType={filterType}
                    itemsLeft={itemsLeft}
                    onFilterClick={handleFilterBtnClick}
                />
            </div>
        </div>
    );
});

export default Todos;