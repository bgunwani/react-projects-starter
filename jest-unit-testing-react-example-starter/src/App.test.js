import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import App from "./App";

describe('App Counter', () => {
    test('Counter Elements should be present', () => {
        render(<App />);
        const incrementButton = screen.getByText(/Increment/i);
        const decrementButton = screen.getByText(/Decrement/i);
        const counterLabel = screen.getByText(/Counter:/i);
        const counterText = screen.getByTestId("counter-value");

        expect(incrementButton).toBeInTheDocument();
        expect(incrementButton).toBeEnabled();
        expect(decrementButton).toBeInTheDocument();
        expect(decrementButton).toBeDisabled();
        expect(counterLabel).toBeInTheDocument();
        expect(counterText).toHaveTextContent(0);

    })

    test('Increament increases value by 1', () => {
        render(<App />);
        const incrementButton = screen.getByText(/Increment/i);
        const decrementButton = screen.getByText(/Decrement/i);
        const counterText = screen.getByTestId("counter-value");
        expect(counterText).toHaveTextContent(0);
        userEvent.click(incrementButton);
        expect(counterText).toHaveTextContent(1);
        expect(decrementButton).not.toBeDisabled();
    })

    test('Decrement decreases value by 1', () => {
        render(<App />);
        const incrementButton = screen.getByText(/Increment/i);
        const decrementButton = screen.getByText(/Decrement/i);
        const counterText = screen.getByTestId("counter-value");
        userEvent.click(incrementButton);
        expect(counterText).toHaveTextContent(1);
        expect(decrementButton).toBeEnabled();
        userEvent.click(decrementButton);
        expect(counterText).toHaveTextContent(0);
    })
})

describe('App Todo Item List', () => {
    test('List Form Components Render:', () => {
        render(<App />);
        const ListitemInput = screen.getByLabelText(/Create List Item/i);
        const addItemButton = screen.getByTestId("add-item");

        expect(ListitemInput).toBeInTheDocument();
        expect(addItemButton).toBeInTheDocument();
    })

    test('User can add item to the page', () => {
        render(<App />);
        const ListitemInput = screen.getByLabelText(/Create List Item/i);
        const addItemButton = screen.getByTestId("add-item");
        expect(ListitemInput).toHaveValue("");
        userEvent.type(ListitemInput, "hello");
        expect(ListitemInput).toHaveValue("hello");
        userEvent.click(addItemButton);
        expect(screen.getByText("hello")).toBeInTheDocument();
        expect(ListitemInput).toHaveValue("");
    })
})