import React from "react";
import renderer from "react-test-renderer";
import Text from "./index";

describe("Components/Text", () => {
  it("should match snapshot", () => {
    const component = renderer.create(<Text label="Coin" value="value" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
