// Компонент List - список
// Напишите для него тесты.
// Компонент позволяет добавлять элементы в список.
// При добавлении нового элемента тексовое поле очищается.

// При клике на элементы списка они удаляются.

// Убедитесь, что вы протестировали всю функциональнось.

import React from "react";
import { List } from "./List";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<List />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("The List is there", () => {
  const wrapper = shallow(<List />);

  expect(wrapper.find("input").text()).toEqual("");
});

it("clear input ", () => {
  const wrapper = shallow(<List />);

  expect(wrapper.find("input").text()).toEqual("");
  wrapper.find("button").simulate("click");
  expect(wrapper.find("input").text()).toEqual("");
});

it("word has added in list", () => {
  const wrapper = shallow(<List />);

  wrapper.find("input").simulate("change", { target: { value: 10 } });
  wrapper.find("button").simulate("click");
  expect(wrapper.text()).toBeTruthy();
  expect(wrapper.find("ul").children().length).toBe(1);
});

it("a few words were added to the list", () => {
  const wrapper = shallow(<List />);

  wrapper.find("input").simulate("change", { target: { value: 10 } });
  wrapper.find("button").simulate("click");
  //   console.log("hello");
  wrapper.find("input").simulate("change", { target: { value: 20 } });
  wrapper.find("button").simulate("click");
  //   console.log(wrapper.find("ul").html());
  expect(wrapper.find("ul").children().length).toBe(2);
});

it("input has cleared", () => {
  const wrapper = shallow(<List />);

  wrapper.find("input").simulate("change", { target: { value: 10 } });
  wrapper.find("button").simulate("click");
  expect(wrapper.text()).toBeTruthy();
  expect(wrapper.find("input").text()).toBe("");
});

it("input has cleared", () => {
  const wrapper = shallow(<List />);

  wrapper.find("input").simulate("change", { target: { value: 10 } });
  wrapper.find("button").simulate("click");
  expect(wrapper.text()).toBeTruthy();
  expect(wrapper.find("input").text()).toBe("");
});

it("list has cleared", () => {
  const wrapper = shallow(<List />);

  wrapper.find("input").simulate("change", { target: { value: 10 } });
  wrapper.find("button").simulate("click");
  wrapper.find("li").simulate("click");
  expect(wrapper.find("li").textContent).toBeFalsy();
});
