import React from 'react';
import ReactDOM from 'react-dom';
import Fix from './Fix';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fix/>, div);
  ReactDOM.unmountComponentAtNode(div);
});