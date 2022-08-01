import React, {FC} from 'react';
import styles from "./TodosFilter.module.scss";
import {handleClear} from "../../store/todos/todosSlice";
import {useAppDispatch} from "../../hooks/redux";

interface TodosFilterProps {
    itemsLeft: number,
    filterType: string,
    onFilterClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const TodosFilter: FC <TodosFilterProps> = ({itemsLeft, filterType, onFilterClick}) => {

    const dispatch = useAppDispatch();

    return (
        <footer className={styles.todosFilter}>
            <span>{itemsLeft} items left</span>
            <div>
                <button
                    className={filterType === 'All' ? styles.focus : ''}
                    onClick={e => onFilterClick(e)}>All</button>
                <button
                    className={filterType === 'Active' ? styles.focus : ''}
                    onClick={e => onFilterClick(e)}>Active</button>
                <button
                    className={filterType === 'Completed' ? styles.focus : ''}
                    onClick={e => onFilterClick(e)}>Completed</button>
            </div>
            <button onClick={() => dispatch(handleClear())}>Clear completed</button>
        </footer>
    );
};

export default TodosFilter;