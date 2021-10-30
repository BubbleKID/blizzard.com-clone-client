import React from 'react';
import TestRenderer  from 'react-test-renderer';
import Footer from './Footer';

test('Footer should be rendered', () => {
    const component = TestRenderer.create(<Footer/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});