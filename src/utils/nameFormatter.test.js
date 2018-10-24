import React from 'react';
import ReactDOM from 'react-dom';
import nameFormatter from './nameFormatter';

test('Whether the nameFormatter generates the correct name or not', () => {
  expect(nameFormatter('john doe')).toBe('John Doe');
  expect(nameFormatter('Bill')).toBe('Bill');
  // expect(nameFormatter('123')).toBe('234');
});
