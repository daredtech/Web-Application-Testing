import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/react/cleanup-after-each';
import {render, fireEvent} from '@testing-library/react';


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

  // to check the ballsCounting functionality
  it ('should match # clicked', () =>{
    const {getByText} = render(<App />);
    const ball = getByText(/^ball$/i); // button text
  
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/Balls: 2/);
 
    // if over 4, should reset to 0
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/Balls: 0/);
  })



})


