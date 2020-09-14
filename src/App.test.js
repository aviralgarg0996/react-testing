import React from "react";
import { render } from "@testing-library/react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });
// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test=component-app");
  expect(appComponent.length).toBe(1);
});
test("renders increment button", () => {});
test("renders counter display", () => {});
test("renders counter starts at 0", () => {});
test("renders clicking button increments counter display", () => {});
