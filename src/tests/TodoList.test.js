import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from '../components/TodoList';

test('renders todo list', () => { 
    render(<TodoList />);
    const linkElement = screen.getByText(/Todo List/i);
    expect(linkElement).toBeInTheDocument();
});