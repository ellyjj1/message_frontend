import React from 'react';
import renderer from 'react-test-renderer';
import Helloworld from "./components/helloworld";


test('renders correctly', () => {
    const component = renderer.create(<Helloworld/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
