import React from 'react';
import renderer from 'react-test-renderer';
import Mock from '../../../main/js/components/mock';

test('Mock component changes the class when hovered', () => {
  const component = renderer.create(
    <Mock />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.children[0].props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.children[0].props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
