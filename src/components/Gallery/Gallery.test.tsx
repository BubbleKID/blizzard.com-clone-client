import React from 'react';
import TestRenderer  from 'react-test-renderer';
import Gallery from './Gallery';

test('Gallery should be rendered', () => {
    const component = TestRenderer.create(<Gallery/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});