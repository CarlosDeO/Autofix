import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Car />, div);
  ReactDOM.unmountComponentAtNode(div);
});