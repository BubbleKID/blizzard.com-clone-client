import React from 'react';
import TestRenderer  from 'react-test-renderer';
import Home from './Home';

test('Card should be rendered', () => {
    const component = TestRenderer.create(<Home/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});