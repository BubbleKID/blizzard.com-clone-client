import React from 'react';
import TestRenderer  from 'react-test-renderer';
import LanguageSelector from './LanguageSelector';

test('LanguageSelector should be rendered', () => {
    const component = TestRenderer.create(<LanguageSelector/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});