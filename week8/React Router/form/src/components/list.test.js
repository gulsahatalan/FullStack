import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './list';

test('USER LIST is in the document', () => {
  //arrange
  render(<List />);
  //act
  const text=screen.getByText('USER LIST');
  //assert
  expect(text).toBeInTheDocument();
});

test("user's name is in the document", async () => {
  render(<List/>);
  const userName = await screen.findByText('Mehmet');
  expect(userName).toBeInTheDocument();
});

test("test head element is in the document ", () => {
  render(<List />);
  const headElement = screen.getByRole("heading");
  expect(headElement).toBeInTheDocument();
});

test("test head element have a class", () => {
  render(<List/>);
  const headElement = screen.getByRole("heading");
  expect(headElement).toHaveClass("header");
});

