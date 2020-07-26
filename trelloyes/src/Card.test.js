import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component test', () => {
    //smoke test:
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    //snapshot test:
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(
            <div name='Card'>
                <button type='button'>delete</button>
                <h3>title={'myTitle'}</h3>
                <p>content={'myContent'}</p>
            </div>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});