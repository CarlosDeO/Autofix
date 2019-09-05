import React from 'react';
import ReactDOM from 'react-dom';
import RegisteredList from './registeredList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisteredList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
