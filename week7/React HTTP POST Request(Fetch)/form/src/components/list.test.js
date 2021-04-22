import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './list';

test('render h3 element', () => {
  render(<List/>);
  expect(screen.getByText('USER LIST')).toBeInTheDocument();
});

test("user's name is rendered", async () => {
    render(<List/>);
    const userName = await screen.findByText('Mirjam');
    expect(userName).toBeInTheDocument();
  });