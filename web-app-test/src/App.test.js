import React from 'react';
import ReactDOM from 'react-dom';
import App, { strikes } from './App';
import { render, fireEvent } from '@testing-library/react'
import Dashboard, { strike } from './components/Dashboard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains header sign', () => {
  const { getByText, findByText } = render(<App />)
  getByText(/baseball app/i);
});

test('contains buttons', () => {
  const { getAllByText } = render(<App />);
  getAllByText('Strike', /ball/i, /foul/i, /hit/i);
});

// test('strikes does not be more than 4', () => {
//   expect(strike(3).not.toBe(5))
// });