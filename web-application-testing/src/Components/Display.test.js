import React from 'react';
import {render} from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";
import Display from './Display';

describe('<Display />', () => {
    // to see if component renders
    it('should render the display component', () =>{
        const dashboard = render(<Display/>);
    })

    // to see if values get passed properly
    it('should correctly get the props values', () => {
        const balls = 1, strikes = 5;
        const display = render(<Display strikes={strikes} balls={balls} />);
        display.getByText(new RegExp(`Strikes: ${strikes}`, 'i'));
        display.getByText(new RegExp(`Balls: ${balls}`, 'i'));
      });
    // to check the functionality doesn't depend on the values
    it('should correctly get the props values', () => {
        const balls = -1, strikes = NaN;
        const display = render(<Display strikes={strikes} balls={balls} />);
        display.getByText(new RegExp(`Strikes: ${strikes}`, 'i'));
        display.getByText(new RegExp(`Balls: ${balls}`, 'i'));
      });

})

