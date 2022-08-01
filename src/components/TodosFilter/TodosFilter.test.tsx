import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import TodosFilter from "./TodosFilter";
import { Provider } from 'react-redux';
import {store} from "../../store/store";
import '@testing-library/jest-dom';

test('Кнопка "All" находится в фокусе после рендера', () => {
    render(
        <Provider store={store}>
            <TodosFilter filterType={'All'} itemsLeft={0} onFilterClick={() => {}} />
        </Provider>
    );
    expect(screen.getByText('All')).toHaveClass('focus');
});


test('Кнопка "Active" получает класс "focus" после клика на неё', () => {
    render(
        <Provider store={store}>
            <TodosFilter filterType={'Active'} itemsLeft={0} onFilterClick={() => {}} />
        </Provider>
    );
    const btn = screen.getByText('Active');
    fireEvent.click(btn);
    expect(btn).toHaveClass('focus');
});


test('Кнопка "Completed" получает класс "focus" после клика на неё', () => {
    render(
        <Provider store={store}>
            <TodosFilter filterType={'Completed'} itemsLeft={0} onFilterClick={() => {}} />
        </Provider>
    );
    const btn = screen.getByText('Completed');
    fireEvent.click(btn);
    expect(btn).toHaveClass('focus');
});