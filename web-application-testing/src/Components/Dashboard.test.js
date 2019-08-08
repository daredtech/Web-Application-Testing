import React from 'react';
import {render} from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";
import Dashboard, {ballsCounting} from './Dashboard';

// to test Dashboard component
describe('<Dashboard .>', () => {

    // to see if component renders
    it('should render the dashboard component', () =>{
        const dashboard = render(<Dashboard/>);
    });
});

  // to test ballsCounting function
  describe('ballsCounting ', () => {
    it('should update the current state of balls', () => {
        
    } )

  });
 