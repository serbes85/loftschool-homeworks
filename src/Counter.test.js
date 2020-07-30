// Компонент Counter - простой счётчик
// Напишите для него тесты.
// Убедитесь, что вы протестировали всю функциональнось.
// Также проверьте что компонент рендерится верно, используя Snapshot тест.

// * Задание со звёздочкой - выполнять не обязательно

// Вынесите логику в хук и протестируйте его
import React from "react";
import { Counter } from "./Counter";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("increment", () => {
  const wrapper = shallow(<Counter />);

  expect(wrapper.find("div").text()).toEqual("0");
  wrapper.find(".btn-increment").simulate("click");
  expect(wrapper.find("div").text()).toEqual("1");
});
it("is value negative", () => {
  const wrapper = shallow(<Counter />);

  wrapper.find(".btn-decrement").simulate("click");
  expect(wrapper.find("div").text()).toEqual("-1");
});
it("decrement", () => {
  const wrapper = shallow(<Counter />);

  expect(wrapper.find("div").text()).toEqual("0");
  wrapper.find(".btn-decrement").simulate("click");
  expect(wrapper.find("div").text()).toEqual("-1");
});

it("renders correctly", () => {
  const tree = renderer.create(<Counter />).toJSON();

  expect(tree).toMatchSnapshot();
});
