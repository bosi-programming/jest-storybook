import React from "react";
import renderer from "react-test-renderer";
import { TextField } from "./index";

test("TextField", () => {
  const component = renderer.create(<TextField />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("TextField with test label", () => {
  const component = renderer.create(<TextField label="Test label"/>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("TextField with fake data", () => {
  const component = renderer.create(<TextField label="Test label" defaultValue="Test value"/>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
