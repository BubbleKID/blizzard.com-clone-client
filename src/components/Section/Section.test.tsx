import React from 'react';
import TestRenderer  from 'react-test-renderer';
import Section from './Section';
import diablo4 from '../../images/game-card_diablo4_enUS.jpeg';

test('Card should be rendered', () => {
    const component = TestRenderer.create(<Section height="300px" backgroundImages={[diablo4, diablo4]}>children</Section>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});