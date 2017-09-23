import React from 'react';
import App from '../App';
import data from '../data.json';
import renderer from 'react-test-renderer';

it('test app.js', () => {
  const component = renderer.create(
    <App arrData = {data} ></App>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
