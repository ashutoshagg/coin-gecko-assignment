import React from "react";
import renderer from "react-test-renderer";
import AppToolBar from "./index";

describe("Components/AppToolBar", () => {
  it("should match snapshot", () => {
    const component = renderer.create(<AppToolBar name="Coin" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
