import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

test('Whether the component has rendered and the snapshot is matching', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})