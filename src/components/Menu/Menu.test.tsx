import React from 'react';
import TestRenderer  from 'react-test-renderer';
import Menu from './Menu';

test('Card should be rendered', () => {
    const component = TestRenderer.create(<Menu/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});