import React from 'react';
import {render} from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";
import Display from './Display';

describe('<Display />', () => {
    // to see if component renders
    it('should render the display component', () =>{
        const dashboard = render(<Display/>);
    })
})