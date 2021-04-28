import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home'

  test('test h1 element', () => {
    //arrange
    render(<Home/>);
    // act
    const text=screen.getByText('Welcome to our WEB SITE. Please first FILL the form');
    //assert
    expect(text).toBeInTheDocument();
  });

  test('image alt is in the document', () => {
    //given
    render(<Home/>);
    // when
    const text=screen.getByAltText('form');
    //then
    expect(text).toBeInTheDocument();
  });
