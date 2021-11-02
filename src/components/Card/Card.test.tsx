import React from 'react';
import TestRenderer  from 'react-test-renderer';
import Card from './Card';
import diablo4 from '../../images/game-card_diablo4_enUS.jpeg';

test('Card should be rendered', () => {
    const component = TestRenderer.create(<Card name="card" background={diablo4}/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});