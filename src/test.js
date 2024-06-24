import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from "./components/HelloWorld";


test('renders correctly', () => {
    const component = renderer.create(<HelloWorld/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
