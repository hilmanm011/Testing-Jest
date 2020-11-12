import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 

describe('ProductHeader Component', () => {

    it('has an h2 tag', () => {

        const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);    
        var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
        component, 'h2'
    );
    
    });

    it('has a title class', () => {

        const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);    
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(
        component, 'title'
    );
    })
})