import React from 'react';
import ReactDOM from 'react-dom';
import FixList from './FixList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FixList />, div);
  ReactDOM.unmountComponentAtNode(div);
});