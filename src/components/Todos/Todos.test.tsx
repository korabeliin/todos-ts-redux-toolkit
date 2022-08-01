import React from "react";
import {render, screen} from "@testing-library/react";
import Todos from "./Todos";
import { Provider } from 'react-redux';
import {store} from "../../store/store";
import '@testing-library/jest-dom';

describe('234', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Todos />
            </Provider>
        );
    });
    test('renders "h1 text"', () => {
        expect(screen.getByText('todos')).toBeInTheDocument();
    });
})