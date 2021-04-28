import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './form';

test('Label text is in the document', () => {
    render(<Form/>);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Birtday')).toBeInTheDocument();
    expect(screen.getByLabelText('E-Mail')).toBeInTheDocument();
    });


test('Label text is in the documentis required', () => {
    render(<Form/>);
    expect(screen.getByLabelText('First Name')).toBeRequired();
    expect(screen.getByLabelText('Last Name')).toBeRequired();
    expect(screen.getByLabelText('About Me')).toBeRequired();
  });

  test("test button element is in the document ", () => {
    render(<Form/>);
    const headElement = screen.getByRole("button");
    expect(headElement).toBeInTheDocument();
  });
  
  test("test head element have a class", () => {
    render(<Form/>);
    const headElement = screen.getByRole("heading");
    expect(headElement).toHaveClass("header");
  });
  