import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './form';

test('render h3 element', () => {
    render(<Form/>);
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
  });


test('render h3 element', () => {
    render(<Form/>);
    expect(screen.getByLabelText('Last Name')).toBeRequired();
  });



