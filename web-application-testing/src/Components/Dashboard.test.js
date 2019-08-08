import React from 'react';
import {render} from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";
import Dashboard from './Dashboard';

describe('<Dashboard .>', () => {
    // to see if component renders
    it('should render the dashboard component', () =>{
        const dashboard = render(<Dashboard/>);
    })
})