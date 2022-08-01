import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import { Provider } from 'react-redux';
import {store} from "../../store/store";
import TodoForm from "./TodoForm";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event/dist";

describe('', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <TodoForm todos={[]} />
            </Provider>
        );
    });

    test('Проверка значения в инпуте', () => {
        const input = screen.getByRole('todo-input') as HTMLInputElement;
        expect(input.value).toEqual('');
        userEvent.type(input, 'new todo')
        expect(input.value).toEqual('new todo');
    });

});