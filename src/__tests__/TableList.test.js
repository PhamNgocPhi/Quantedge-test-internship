import React from 'react';
import TableList from '../TableList';
import data from '../data.json';
import renderer from 'react-test-renderer';

test('test TableList.js', () => {
  const component = renderer.create(
    <TableList arrData = {data}></TableList>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
