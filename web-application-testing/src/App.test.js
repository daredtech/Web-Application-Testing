import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@testing-library/react/cleanup-after-each";
import {render} from '@testing-library/react';


describe('', () => {

  // default
  it('renders without crashing usung ReactDom', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // to see if it renders without crashing
  it('should render the App component', () => {
    render(<App />);

  });

})



