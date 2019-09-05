import React from 'react';
import ReactDOM from 'react-dom';
import FixForm from './FixForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FixForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});